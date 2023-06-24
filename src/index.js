import os from 'os';
import EventEmitter from 'events';
import readline from 'readline';
import { inputCommand } from './helper/inputCommand.js';
import {
  lsHandler,
  cdHandler,
  upHandler,
  catHandler,
  addHandler,
  rmHandler,
  rnHandler,
  cpHandler,
  mvHandler,
  hashHandler,
  compressFile,
  decompressFile,
} from './handler/index.js'
import { osHandler } from './handler/os/index.js';


let shouldExit = false;

process.chdir(os.homedir());

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const myEmitter = new EventEmitter();
myEmitter.setMaxListeners(0)

myEmitter
    .on('ls', lsHandler)
    .on('cd', cdHandler)
    .on('up', upHandler)
    .on('cat', catHandler)
    .on('add', addHandler)
    .on('rm', rmHandler)
    .on('rn', rnHandler)
    .on('cp', cpHandler)
    .on('mv', mvHandler)
    .on('os', osHandler)
    .on('hash', hashHandler)
    .on('compress', compressFile)
    .on('decompress', decompressFile)


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
