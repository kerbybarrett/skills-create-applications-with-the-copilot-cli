#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   add        - Addition (+): sum two numbers
 *   subtract   - Subtraction (−): find the difference between two numbers
 *   multiply   - Multiplication (×): compute the product of two numbers
 *   divide     - Division (÷): divide two numbers (throws on division by zero)
 *   modulo     - Modulo (%): remainder of a divided by b (throws on division by zero)
 *   power      - Exponentiation (**): base raised to the exponent
 *   squareRoot - Square root (√): square root of n (throws on negative input)
 *
 * Usage:
 *   node calculator.js add 5 3           # => 8
 *   node calculator.js subtract 9 4      # => 5
 *   node calculator.js multiply 6 7      # => 42
 *   node calculator.js divide 10 2       # => 5
 *   node calculator.js modulo 10 3       # => 1
 *   node calculator.js power 2 8         # => 256
 *   node calculator.js squareRoot 144    # => 12
 */

// Addition (+): returns the sum of a and b
function add(a, b) {
  return a + b;
}

// Subtraction (−): returns the difference of a and b
function subtract(a, b) {
  return a - b;
}

// Multiplication (×): returns the product of a and b
function multiply(a, b) {
  return a * b;
}

// Division (÷): returns the quotient of a and b; throws if b is zero
function divide(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

// Modulo (%): returns the remainder of a divided by b; throws if b is zero
function modulo(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a % b;
}

// Exponentiation (**): returns base raised to the power of exponent
function power(base, exponent) {
  return base ** exponent;
}

// Square root (√): returns the square root of n; throws if n is negative
function squareRoot(n) {
  if (n < 0) throw new Error('Square root of negative number');
  return Math.sqrt(n);
}

// Export functions for unit testing
module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };

// CLI entry point — only runs when executed directly, not when imported as a module
if (require.main === module) {
const [, , operation, rawA, rawB] = process.argv;

const singleOperandOps = ['squareRoot'];
const isSingleOperand = singleOperandOps.includes(operation);

if (!operation || rawA === undefined || (!isSingleOperand && rawB === undefined)) {
  console.error('Usage: node calculator.js <add|subtract|multiply|divide|modulo|power|squareRoot> <a> [b]');
  process.exit(1);
}

const a = parseFloat(rawA);
const b = isSingleOperand ? undefined : parseFloat(rawB);

if (isNaN(a) || (!isSingleOperand && isNaN(b))) {
  console.error('Error: Operands must be valid numbers.');
  process.exit(1);
}

try {
  let result;
  switch (operation) {
    case 'add':
      result = add(a, b);
      break;
    case 'subtract':
      result = subtract(a, b);
      break;
    case 'multiply':
      result = multiply(a, b);
      break;
    case 'divide':
      result = divide(a, b);
      break;
    case 'modulo':
      result = modulo(a, b);
      break;
    case 'power':
      result = power(a, b);
      break;
    case 'squareRoot':
      result = squareRoot(a);
      break;
    default:
      console.error(`Error: Unknown operation "${operation}". Use add, subtract, multiply, divide, modulo, power, or squareRoot.`);
      process.exit(1);
  }
  console.log(result);
} catch (err) {
  console.error(`Error: ${err.message}`);
  process.exit(1);
}
} // end require.main === module
