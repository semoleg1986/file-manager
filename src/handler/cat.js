import { createReadStream, promises as fs } from 'fs';
import { resolve } from "path"
import { pipeline } from 'stream';
import { dispCurrentDir } from '../helper/index.js';

export const readFile = async (fileName) => {
    try {
        const currentPath = resolve(process.cwd())
        const filePath = resolve(currentPath, String(fileName))
        const readStream = createReadStream(filePath, { encoding: 'utf-8'})
        // нужно реализовать вывод readstream
        await pipeline(readStream, process.stdout, () => {
            dispCurrentDir();
          });
    } catch (err) {
        console.error(err);
        dispCurrentDir()
    };
}