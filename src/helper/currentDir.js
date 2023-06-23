import {dirname} from 'path';

export function dispCurrentDir() {
    const currentDirectory = process.cwd();
    console.info('You are currently in', currentDirectory);
  }

export function getCurrentDir() {
  const currentDirectory = process.cwd();
  return currentDirectory
}
