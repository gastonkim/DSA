// Step 1: Initialize variables and constant
let a = 25;
let b = 20;
let c = 12;
let d = "15"; // String
const e = 15; // Constant

// Step 2a: Display the sum of all variables and the constant
let sum = a + b + c + Number(d) + e;
console.log("Sum of a, b, c, d, and e:", sum);

// Step 2b: Compare variable d (converted to number) and constant e
console.log("d > e:", Number(d) > e);
console.log("d < e:", Number(d) < e);
console.log("d >= e:", Number(d) >= e);
console.log("d <= e:", Number(d) <= e);
console.log("d === e:", Number(d) === e);

// Step 2c.1: Subtract all values
let subtraction = a - b - c - Number(d) - e;
console.log("Subtraction result:", subtraction);

// Step 2c.2: Multiply a and c, then divide by e
let multiplyDivide = (a * c) / e;
console.log("Multiplication and division result:", multiplyDivide);

// Step 2c.3: Exponentiation of e raised to the power of c
let exponentResult = e ** c;
console.log("e raised to the power of c:", exponentResult);

// Step 2c.4: Reassign exponent result to e (This will cause an error)
console.log("Reassigning constant e is not allowed, but if e were a variable, the value would be:", exponentResult);
