const arrChar = ["|","/","-","\\","|"];
let delay = 100;
for (let elem of arrChar) {
  setTimeout(() => {
    process.stdout.write(`\r${elem}   `);
  }, delay);
  delay += 200;
}
setTimeout(() => {
  console.log(); //move the cursor to new line
}, delay);