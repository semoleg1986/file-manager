import { createReadStream, createWriteStream, unlink, access } from 'fs';
import { resolve, basename } from 'path';
import { pipeline } from 'stream';
import { promisify } from 'util';

const pipelineAsync = promisify(pipeline);
const accessAsync = promisify(access);
const unlinkAsync = promisify(unlink);

export const mvHandler = async (pathToFile, pathToNewDirectory) => {
  try {
    const fileName = basename(pathToFile);
    const sourcePath = resolve(process.cwd(), pathToFile);
    const destinationPath = resolve(process.cwd(), pathToNewDirectory, fileName);

    // Check if the file exists at the old path
    await accessAsync(sourcePath);

    // Check if the file exists at the new path
    try {
      await accessAsync(destinationPath);
      console.error('Operation failed');
      return;
    } catch (error) {
        console.error('Operation failed');
    }

    const readStream = createReadStream(sourcePath);
    const writeStream = createWriteStream(destinationPath);


    await pipelineAsync(readStream, writeStream);


    await unlinkAsync(sourcePath);

    console.log('File moved successfully');
  } catch (error) {
    console.error('Operation failed');
  }
};
