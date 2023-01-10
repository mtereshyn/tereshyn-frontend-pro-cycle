//task 1-2
let arrayOfNumbers = [];
let arrayOfSquareNumbers = [];
for (let i = 10; i <= 20; i++) {
  arrayOfNumbers.push(i);
  arrayOfSquareNumbers.push(Math.pow(i, 2));
}
console.log(`Number of 10 - 20 is ${arrayOfNumbers.join(",")}`);
console.log(`Number of squer 10 - 20 is ${arrayOfSquareNumbers.join(",")}`);

//task 3
console.log(`Multiplication table of 7:`);
for (let i = 0; i <= 10; i++) {
  console.log(`7 * ${i} = ${7 * i}`);
}

//task 4
let sum = 0;
for (let i = 1; i <= 15; i++) {
  sum += i;
}
console.log(`Sum of 1 - 15 is ${sum}`);

//task 5
let mult = 1;
for (let i = 15; i <= 35; i++) {
  mult *= i;
}
console.log(`Multiply of 15 - 35 is ${mult}`);

//task 6
sum = 0;
for (let i = 1; i <= 500; i++) {
  sum += i;
}
console.log(`Average of 1 - 500 is ${(sum / 500).toFixed(2)}`);

//task7
sum = 0;
for (let i = 30; i <= 80; i += 2) {
  sum += i;
}
console.log(`Sum of coins 30 - 80 is ${sum}`);

//task 8
arrayOfNumbers = [];
for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    arrayOfNumbers.push(i);
  }
}
console.log(`Number of 100 - 200 div 3 is ${arrayOfNumbers.join(",")}`);

//task 9-11
function inputNumber() {
  let number = +prompt("Please, input number");
  while (isNaN(number) || number <= 0) {
    number = +prompt("Error, please, input number again");
  }
  return number;
}

const customerNumber = inputNumber();
arrayOfNumbers = [];
sum = 0;
let quantity = 0;
for (let i = 1; i <= customerNumber / 2; i++) {
  if (customerNumber % i === 0) {
    arrayOfNumbers.push(i);
    if (i % 2 === 0) {
      sum += i;
      quantity++;
    }
  }
}

if (customerNumber % 2 === 0) {
  quantity++;
  sum += customerNumber;
}
console.log(
  `Dividers of ${customerNumber} is ${arrayOfNumbers.join(
    ","
  )},${customerNumber}`
);
console.log(`Quantity of number dividers of ${customerNumber} is ${quantity}`);
console.log(`Sum of number dividers of ${customerNumber} is ${sum}`);

//task 12
console.log(`Multiplication table:`);
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j};`);
  }
}
