import { dispCurrentDir } from "../helper/index.js"

export const changeDir = async ([pathToDirectory]) => {
    try{
        process.chdir(pathToDirectory)
        dispCurrentDir()
    } catch(err){
        console.error('Operation failed')
    }   
}