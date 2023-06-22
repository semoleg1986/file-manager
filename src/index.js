import os from 'os';
import EventEmitter from 'events';
import readline from 'readline';
import { 
    list,
    changeDir,
    dirUp, 
} from './handler/index.js';
import { inputCommand } from './helper/inputCommand.js';


process.chdir(os.homedir());

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const myEmitter = new EventEmitter();

myEmitter
    .on('ls', list)
    .on('cd', changeDir)
    .on('up', dirUp)

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

  rl.on('line', (input) => inputCommand(input, myEmitter))
    .on('close', ()=> {
      console.log('Goodbuy M****F*****');
      process.nextTick(()=> exit());
    });

  const exit = () => {
    process.exit(0);
  }
};

await startFileManager();
