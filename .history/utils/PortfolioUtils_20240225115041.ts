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
            filePaths.map(
                async (path) => await readFile(join(PublicUtils.folder, path))
            )
        );

        console.log(this.dataFilePath);

        // const plaiceholderData = await Promise.all(
        //     files.map(async (file) => getPlaiceholder(file))
        // );

        // console.log(1);

        // const imageData = this.formatData(plaiceholderData);

        const test = [{ test: 'yo' }];

        console.log(test);

        await writeFile(this.dataFilePath, JSON.stringify(test));

        return test;

        // return imageData;
    }

    static async formatData(plaiceholder: GetPlaiceholderReturn[]) {
        return plaiceholder.map((item) => ({
            base64: item.base64,
            height: item.metadata.height,
            width: item.metadata.width,
        }));
    }
}
