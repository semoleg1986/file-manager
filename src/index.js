import os from 'os';
import EventEmitter from 'events';
import readline from 'readline';
import { 
    list,
    changeDir,
    dirUp, 
} from './handler/index.js';


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
  rl.on('line', (input) => {
    const [command, ...args] = input.split(' ');
    if (command === 'ls') {
      myEmitter.emit('ls');
    } else if (command === 'cd') {
      myEmitter.emit('cd', args);
    } else if (command === 'up') {
      myEmitter.emit('up', args);
    }
  })
  .on('close', ()=> {
    console.log('Goodbuy M****F*****');
    process.nextTick(()=> exit());
  });

  const exit = () => {
    process.exit(0);
  }
};

await startFileManager();
