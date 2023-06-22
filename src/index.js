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

// const username = args['--username'] ? args['--username'] : 'stranger';

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
  console.log('Welcome to the File Manager');
  console.info(os.homedir());

  // Прослушка ввода нужно отдельно вынести как функцию
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
