import { readFile, writeFile } from 'fs/promises';
import { PublicUtils } from './PublicUtils.js';
import { resolve, join } from 'path';
import { GetPlaiceholderReturn, getPlaiceholder } from 'plaiceholder';

export class PortfolioUtils {
    private constructor() {}

    static folder = 'portfolio';
    static dataFilePath = resolve(join(PublicUtils.folder, 'portfolio.json'));

    static async getData() {
        try {
            const file = await readFile(this.dataFilePath, 'utf8');
            return this.formatData(JSON.parse(file));
        } catch (error: any) {
            console.error(error);
            if ('code' in error && error.code === 'ENOENT') {
                return await this.buildData();
            }
        }
    }

    static async buildData() {
        const filePaths = await PublicUtils.getImagePaths(this.folder);

        const files = await Promise.all(
            filePaths.map(async (path) => ({
                dat: await readFile(join(PublicUtils.folder, path)),
            }))
        );

        const data = await Promise.all(
            files.map(async (file) => ({
                plaiceholder: await getPlaiceholder(file),
                path: file,
            }))
        );

        const imageData = this.formatData(data);

        await writeFile(this.dataFilePath, JSON.stringify(plaiceholderData));

        return imageData;
    }

    static formatData(
        data: { plaiceholder: GetPlaiceholderReturn; path: string }[]
    ) {
        return data.map((item) => ({
            base64: item.plaiceholder.base64,
            height: item.plaiceholder.metadata.height,
            width: item.plaiceholder.metadata.width,
            path: item.path,
        }));
    }
}
