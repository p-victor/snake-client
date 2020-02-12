const setupInput = function() {
  const stdin = process.stdin;
  stdin.on('data', handleUserInput);
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
}

const handleUserInput = input => {
  switch(input) {
    case '\u0003':
      process.exit()
  }
}

module.exports = {
  setupInput,
  handleUserInput,
}