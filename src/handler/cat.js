import { createReadStream, promises as fs } from 'fs';
import { resolve } from "path"
import { pipeline } from 'stream';
import { dispCurrentDir } from '../helper/index.js';

export const readFile = async (file) => {
    try {
        const currentPath = resolve(process.cwd())
        const filePath = resolve(currentPath, String(file))
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