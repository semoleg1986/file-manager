import { dispCurrentDir } from "../helper/index.js"

export const dirUp = async () => {
    try {
        process.chdir('..')
        dispCurrentDir()
    } 
    catch(error) {
        console.error('Operation failed')  
    }
}