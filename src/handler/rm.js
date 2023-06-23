import { promises as fs } from 'fs';
import { resolve } from "path";
import { dispCurrentDir } from '../helper/index.js';

export const removeFile = async (fileName) => {
  try {
    const currentPath = resolve(process.cwd())
    const filePath = resolve(currentPath, String(fileName))
    await fs.unlink(filePath);
    dispCurrentDir()
  } catch (err) {
    console.error(err);
  }
};