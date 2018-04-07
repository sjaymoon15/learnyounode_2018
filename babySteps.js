// console.log(process.argv);

const rawArguments = process.argv;
let sum = 0;

if (rawArguments.length > 2) {
  for (let i = 2; i < rawArguments.length; i++) {
    sum += Number(rawArguments[i]);
  }
}
console.log(sum);
