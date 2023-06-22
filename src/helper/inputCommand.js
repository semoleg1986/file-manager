export const inputCommand = (input, myEmitter) => {
  const [command, ...args] = input.split(' ');

  if (command === 'ls') {
    myEmitter.emit('ls');
  } else if (command === 'cd') {
    myEmitter.emit('cd', args);
  } else if (command === 'up') {
    myEmitter.emit('up', args);
  }
};
