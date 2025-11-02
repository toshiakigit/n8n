// Demo Calculator Module

/**
 * Adds two numbers together
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtracts second number from first number
 * @param {number} a - Number to subtract from
 * @param {number} b - Number to subtract
 * @returns {number} Difference of a and b
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiplies two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Product of a and b
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Divides first number by second number
 * @param {number} a - Dividend
 * @param {number} b - Divisor
 * @returns {number} Quotient of a divided by b
 * @throws {Error} When divisor is zero
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

/**
 * Raises base to the power of exponent
 * @param {number} base - Base number
 * @param {number} exponent - Exponent value
 * @returns {number} Result of base^exponent
 */
function power(base, exponent) {
  return Math.pow(base, exponent);
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power
};
