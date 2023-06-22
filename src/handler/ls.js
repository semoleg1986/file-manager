import { promises as fs} from 'fs';
import { resolve } from "path"

export const list = async () => {
    try {
        const currentPath = resolve(process.cwd())
        const files = await fs.readdir(currentPath);
        const fileList = [];
        for (const file of files) {
          const filePath = resolve(currentPath, file);
          const stats = await fs.stat(filePath);
          const fileType = stats.isFile() ? 'File' : 'Directory';
    
          fileList.push({ File: file, Type: fileType });
        }
    
        console.table(fileList);
    } catch(err){
        console.error('Operation failed')
    }
};