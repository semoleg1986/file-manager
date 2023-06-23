import { dispCurrentDir } from "./currentDir.js";

export const inputCommand = (input, myEmitter, rl) => {
  const [command, ...args] = input.split(' ');
  console.log(args)
  const command_list = ['ls', 'cd', 'up', 'cat', 'add', 'rm', 'rn','cp','mv','.exit'];

  if (command_list.includes(command)) {
    if (args.length === 1)  {
      myEmitter.emit(command, args);
    } else if (command === '.exit') {
      rl.close();
    } else {
      myEmitter.emit(command, ...args);
    }
  } else {
    console.log('Invalid input');
    dispCurrentDir()
  }
};
