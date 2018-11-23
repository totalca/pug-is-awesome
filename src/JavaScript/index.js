// Rest parameter ES6

// eslint-disable-next-line no-unused-vars
function add() {
  const printIt = (start, end, ...other) => console.log(`${start} ${other.join(', ')}${end}`);
  printIt('Welcome', '!', 'Nicolae', 'Totalca');
}
// will output
// Welcome Nicolae, Totalca!