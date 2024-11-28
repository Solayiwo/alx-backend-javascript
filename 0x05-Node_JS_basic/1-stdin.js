process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for user input from stdin
process.stdin.on('data', (data) => {
  const input = data.toString().trim(); // Trim whitespace from input
  process.stdout.write(`Your name is: ${input}\n`);
  process.exit();
});

// Handle program termination
process.on('exit', () => {
  console.log('This important software is now closing');
});
