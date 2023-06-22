import { getCurrentDir } from "../helper/index.js"

export const changeDir = async ([pathToDirectory]) => {
    try{
        process.chdir(pathToDirectory)
        getCurrentDir()
    } catch(err){
        console.error('Operation failed')
    }   
}