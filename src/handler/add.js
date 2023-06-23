import { resolve } from "path";
import { dispCurrentDir, getCurrentDir } from "../helper/index.js";
import { promises as fs} from 'fs';

export const addFile = async (fileName) => {
    let newFile;
    try {
      const currentPath = getCurrentDir();
      const filePath = resolve(currentPath, String(fileName));
      newFile = await fs.open(filePath, 'w');
      dispCurrentDir();
    } catch (err) {
      console.error(err);
    } finally {
      newFile?.close();
    }
  };