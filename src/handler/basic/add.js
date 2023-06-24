import { resolve } from "path";
import { dispCurrentDir } from "../../helper/index.js";
import { promises as fs } from 'fs';

export const addHandler = async (fileName) => {
  const currentPath = resolve(process.cwd());
  const filePath = resolve(currentPath, String(fileName));
  console.log(currentPath);
  console.log(filePath);
  
  try {
    await fs.access(filePath, fs.constants.F_OK);
    console.error('File already exists');
  } catch (err) {
    let newFile;
    try {
      newFile = await fs.open(filePath, 'w');
    } catch (err) {
      console.error(err);
    } finally {
      newFile?.close();
      dispCurrentDir();
    }
  }
};
