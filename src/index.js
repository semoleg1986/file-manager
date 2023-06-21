import os from 'os';
import { 
    list 
    } from './handler/index.js'
const startFileManager = async () =>{
    console.log('Welcome to the File Manager')
    process.chdir(os.homedir())   
    console.log(os.homedir())
    list(os.homedir())

}

await startFileManager()