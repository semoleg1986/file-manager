import os from 'os';
import EventEmitter from 'events';
import readline from 'readline';
import { 
    list,
    changeDir,
    dirUp,
    readFile,
    addFile,
    removeFile,
    renameFile,
    copyDir,
    moveFile,
} from './handler/index.js';
import { inputCommand } from './helper/inputCommand.js';

let shouldExit = false;

process.chdir(os.homedir());

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const myEmitter = new EventEmitter();
myEmitter.setMaxListeners(0)

myEmitter
    .on('ls', list)
    .on('cd', changeDir)
    .on('up', dirUp)
    .on('cat', readFile)
    .on('add', addFile)
    .on('rm', removeFile)
    .on('rn', renameFile)
    .on('cp', copyDir)
    .on('mv', moveFile)


const startFileManager = async () => {
  const args = process.argv.slice(2);

  let username = 'stranger';
  for (const arg of args) {
    if (arg.startsWith('--username=')) {
      username = arg.split('=')[1];
      break;
    }
  }
  console.log(`Welcome to the File Manager, ${username}!`);
  console.info('You are currently in', os.homedir());

  rl.on('line', (input) => inputCommand(input, myEmitter, rl))
    .on('SIGINT', () => {
      if (shouldExit) {
        exit();
      } else {
        shouldExit = true;
        console.log('Press Ctrl+C again to exit.');
      }})
    .on('close', ()=> {
      console.log(`Thank you for using File Manager, ${username}, goodbye!`);
      exit();
    });
};
  const exit = () => {
    process.exit(0);
  }
await startFileManager();
