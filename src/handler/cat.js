import { createReadStream, constants } from 'fs';
import { resolve } from 'path';
import { dispCurrentDir } from '../helper/index.js';

export const readFile = async (fileName) => {
  try {
    const currentPath = resolve(process.cwd());
    const filePath = resolve(currentPath, String(fileName));
    const readStream = createReadStream(filePath, { encoding: 'utf-8' });

    readStream.on('error', (error) => {
      console.error('Error reading the file:', error);
      readStream.destroy();
    });

    readStream.pipe(process.stdout);

    readStream.on('close', () => {
      dispCurrentDir();
    });
  } catch (error) {
    console.error('Operation failed');
    dispCurrentDir();
  }
};
