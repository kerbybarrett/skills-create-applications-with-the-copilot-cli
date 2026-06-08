/**
 * Unit tests for calculator.js
 *
 * Covers all four supported operations:
 *   - Addition (+)
 *   - Subtraction (−)
 *   - Multiplication (×)
 *   - Division (÷)
 *
 * Includes edge cases: division by zero, negative numbers, decimals, and zero operands.
 */

const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

// ─── Addition (+) ────────────────────────────────────────────────────────────
describe('add', () => {
  test('2 + 3 = 5', () => expect(add(2, 3)).toBe(5));
  test('10 + 4 = 14', () => expect(add(10, 4)).toBe(14));
  test('45 + 2 = 47', () => expect(add(45, 2)).toBe(47));
  test('20 + 5 = 25', () => expect(add(20, 5)).toBe(25));
  test('adding zero leaves value unchanged', () => expect(add(7, 0)).toBe(7));
  test('adding two negatives', () => expect(add(-3, -4)).toBe(-7));
  test('adding negative and positive', () => expect(add(-5, 10)).toBe(5));
  test('adding decimals', () => expect(add(1.5, 2.5)).toBeCloseTo(4.0));
});

// ─── Subtraction (−) ─────────────────────────────────────────────────────────
describe('subtract', () => {
  test('2 - 3 = -1', () => expect(subtract(2, 3)).toBe(-1));
  test('10 - 4 = 6', () => expect(subtract(10, 4)).toBe(6));
  test('45 - 2 = 43', () => expect(subtract(45, 2)).toBe(43));
  test('20 - 5 = 15', () => expect(subtract(20, 5)).toBe(15));
  test('subtracting zero leaves value unchanged', () => expect(subtract(9, 0)).toBe(9));
  test('subtracting negative number', () => expect(subtract(5, -3)).toBe(8));
  test('subtracting decimals', () => expect(subtract(5.5, 2.2)).toBeCloseTo(3.3));
  test('result is zero when operands are equal', () => expect(subtract(7, 7)).toBe(0));
});

// ─── Multiplication (×) ──────────────────────────────────────────────────────
describe('multiply', () => {
  test('2 * 3 = 6', () => expect(multiply(2, 3)).toBe(6));
  test('10 * 4 = 40', () => expect(multiply(10, 4)).toBe(40));
  test('45 * 2 = 90', () => expect(multiply(45, 2)).toBe(90));
  test('20 * 5 = 100', () => expect(multiply(20, 5)).toBe(100));
  test('multiplying by zero gives zero', () => expect(multiply(8, 0)).toBe(0));
  test('multiplying two negatives gives positive', () => expect(multiply(-3, -4)).toBe(12));
  test('multiplying negative and positive gives negative', () => expect(multiply(-3, 4)).toBe(-12));
  test('multiplying decimals', () => expect(multiply(2.5, 4)).toBeCloseTo(10.0));
});

// ─── Division (÷) ────────────────────────────────────────────────────────────
describe('divide', () => {
  test('2 / 3 ≈ 0.667', () => expect(divide(2, 3)).toBeCloseTo(0.667));
  test('10 / 4 = 2.5', () => expect(divide(10, 4)).toBe(2.5));
  test('45 / 2 = 22.5', () => expect(divide(45, 2)).toBe(22.5));
  test('20 / 5 = 4', () => expect(divide(20, 5)).toBe(4));
  test('dividing zero by a number gives zero', () => expect(divide(0, 5)).toBe(0));
  test('dividing a number by itself gives one', () => expect(divide(7, 7)).toBe(1));
  test('dividing negative numbers', () => expect(divide(-10, 2)).toBe(-5));
  test('dividing decimals', () => expect(divide(7.5, 2.5)).toBeCloseTo(3.0));

  // Edge case: division by zero must throw
  test('division by zero throws an error', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero');
  });
  test('division by zero throws even with negative numerator', () => {
    expect(() => divide(-5, 0)).toThrow('Division by zero');
  });
});

// ─── Modulo (%) ──────────────────────────────────────────────────────────────
describe('modulo', () => {
  test('5 % 2 = 1', () => expect(modulo(5, 2)).toBe(1));
  test('10 % 3 = 1', () => expect(modulo(10, 3)).toBe(1));
  test('10 % 2 = 0 (even number)', () => expect(modulo(10, 2)).toBe(0));
  test('7 % 4 = 3', () => expect(modulo(7, 4)).toBe(3));
  test('negative dividend: -7 % 3 = -1', () => expect(modulo(-7, 3)).toBe(-1));
  test('modulo by zero throws an error', () => {
    expect(() => modulo(10, 0)).toThrow('Division by zero');
  });
});

// ─── Exponentiation (**) ─────────────────────────────────────────────────────
describe('power', () => {
  test('2 ^ 3 = 8', () => expect(power(2, 3)).toBe(8));
  test('2 ** 8 = 256', () => expect(power(2, 8)).toBe(256));
  test('3 ** 3 = 27', () => expect(power(3, 3)).toBe(27));
  test('5 ** 0 = 1', () => expect(power(5, 0)).toBe(1));
  test('any number to the power of 1 is itself', () => expect(power(7, 1)).toBe(7));
  test('negative base with even exponent gives positive', () => expect(power(-2, 4)).toBe(16));
  test('fractional exponent (square root via power)', () => expect(power(9, 0.5)).toBeCloseTo(3));
});

// ─── Square Root (√) ─────────────────────────────────────────────────────────
describe('squareRoot', () => {
  test('√16 = 4', () => expect(squareRoot(16)).toBe(4));
  test('√144 = 12', () => expect(squareRoot(144)).toBe(12));
  test('√9 = 3', () => expect(squareRoot(9)).toBe(3));
  test('√2 ≈ 1.414', () => expect(squareRoot(2)).toBeCloseTo(1.414));
  test('√0 = 0', () => expect(squareRoot(0)).toBe(0));
  test('√1 = 1', () => expect(squareRoot(1)).toBe(1));
  test('square root of negative number throws an error', () => {
    expect(() => squareRoot(-4)).toThrow('Square root of negative number');
  });
});
