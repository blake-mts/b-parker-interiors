import { PAGE } from '@/constants/pages.constants';
import { readFile, readdir, writeFile } from 'fs/promises';
import { resolve } from 'path';
import { GetPlaiceholderReturn, getPlaiceholder } from 'plaiceholder';

export interface ImageData {
    base64: string;
    width: number;
    height: number;
    path: string;
}

export class ImageDataBuilder {
    path: string;
    dataFilePath: string;

    static pages = [PAGE.home, PAGE.portfolio] as const;

    static async buildAllData() {
        await Promise.all(
            this.pages.map(async (page) => {
                const builder = new ImageDataBuilder(page);
                await builder.buildData();
            })
        );
    }

    constructor(public folder: (typeof ImageDataBuilder.pages)[number]) {
        this.path = resolve(`public/images/${this.folder}`);
        this.dataFilePath = resolve(`public/data/${this.folder}.json`);
    }

    async getData() {
        try {
            const file = await readFile(this.dataFilePath, 'utf8');
            return JSON.parse(file);
        } catch (error: any) {
            console.error(error);
            if ('code' in error && error.code === 'ENOENT') {
                return await this.buildData();
            } else {
                throw Error('undefined error');
            }
        }
    }

    async buildData() {
        const fileNames = await readdir(this.path);

        const files = await Promise.all(
            fileNames.map(async (name) => {
                const path = resolve(this.path, name);
                const data = await readFile(path);
                const nextPath = `/images/${this.folder}/${name}`;

                return {
                    data,
                    path: nextPath,
                };
            })
        );

        const data = await Promise.all(
            files.map(async (file) => ({
                plaiceholder: await getPlaiceholder(file.data, { size: 64 }),
                path: file.path,
            }))
        );

        const imageData = this.formatData(data);

        await writeFile(this.dataFilePath, JSON.stringify(imageData));

        return imageData;
    }

    formatData(
        data: { plaiceholder: GetPlaiceholderReturn; path: string }[]
    ): ImageData[] {
        return data.map((item) => ({
            base64: item.plaiceholder.base64,
            height: item.plaiceholder.metadata.height,
            width: item.plaiceholder.metadata.width,
            path: item.path,
        }));
    }
}
