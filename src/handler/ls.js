import { promises as fs} from 'fs';
import { resolve } from "path"

export const list = async (path) => {
    try {
        const currentPath = resolve(process.cwd())
        console.log(currentPath)
        const files = await fs.readdir(path);
        console.table(files);
    } catch(err){
        console.error('Operation failed')
    }
};
await list();