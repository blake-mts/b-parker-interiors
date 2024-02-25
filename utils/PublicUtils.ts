import { readdir } from 'fs/promises';
import path from 'path';

export class PublicUtils {
    private constructor() {}

    static folder = 'public';

    static async getImagePaths(folder: string) {
        const dir = path.resolve(`${this.folder}/images/${folder}`);
        const fileNames = await readdir(dir);
        return fileNames.map((fileName) => `/images/${folder}/${fileName}`);
    }
}
