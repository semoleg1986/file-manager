export const inputCommand = (input, myEmitter) => {
  const [command, ...args] = input.split(' ');
  const command_list = ['ls', 'cd', 'up', 'cat', 'add', 'rm'];
  //  нужно поймать ошибки и использовать brake
  for (let i = 0; i < command_list.length; i++) {
    if (command === command_list[i]) {
      if (command === 'ls') {
        myEmitter.emit('ls');
      }
      else {
        myEmitter.emit(command, args)
      }
    }
  }

  // if (command === 'ls') {
  //   myEmitter.emit('ls');
  // } else if (command === 'cd') {
  //   myEmitter.emit('cd', args);
  // } else if (command === 'up') {
  //   myEmitter.emit('up', args);
  // }
};
