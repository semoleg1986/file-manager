import { getCurrentDir } from "../helper/index.js"

export const dirUp = async () => {
    try{
        process.chdir('..')
        getCurrentDir()
    } catch(error) {
        console.error('Operation failed')  
    }
}