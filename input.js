const { KEY } = require('./constants')
let connection;

const setupInput = function (conn) {
  const stdin = process.stdin;
  connection = conn;
  stdin.on('data', handleUserInput);
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
}

const handleUserInput = input => {
  switch (input) {
    case KEY.EXIT:
      process.exit()
      break;
    case KEY.UP[0]:
      connection.write("Move: up")
      break;
    case KEY.LEFT[0]:
      connection.write("Move: left")
      break;
    case KEY.DOWN[0]:
      connection.write("Move: down")
      break;
    case KEY.RIGHT[0]:
      connection.write("Move: right")
      break;
    case KEY.MESSAGE:
      const messages = ['Hey', 'Hello', 'Wassup']
      const rng = Math.floor(Math.random() * messages.length);
      connection.write(`Say: ${messages[rng]}`)
      break;
  }
}

module.exports = {
  setupInput,
  handleUserInput,
}