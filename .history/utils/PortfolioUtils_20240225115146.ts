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

        const plaiceholderData = await Promise.all(
            files.map(async (file) => getPlaiceholder(file))
        );

        const imageData = this.formatData(plaiceholderData);

        await writeFile(this.dataFilePath, JSON.stringify(imageData));

        return imageData;

        // return imageData;
    }

    static formatData(plaiceholder: GetPlaiceholderReturn[]) {
        return plaiceholder.map((item) => ({
            base64: item.base64,
            height: item.metadata.height,
            width: item.metadata.width,
        }));
    }
}
