import { promises as fs } from 'fs';
import { resolve } from "path";

export async function rnHandler(oldName, newName){
    const currentPath = resolve(process.cwd());
    const oldPath = resolve(currentPath, String(oldName));
    const newPath = resolve(currentPath, String(newName));
    try {
        await fs.access(oldPath, fs.constants.F_OK);
        
        try {
            await fs.stat(newPath);
            console.error('Operation failed');
            return; 
        } catch (error) {
            await fs.rename(oldPath, newPath);
        }
    } catch (error) {
        console.error('Operation failed');
    }
};