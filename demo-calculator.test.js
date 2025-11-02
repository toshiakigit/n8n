// Demo Calculator Tests

const assert = require('assert');
const calculator = require('./demo-calculator');

console.log('Running Calculator Tests...\n');

// Test add function
console.log('Testing add()...');
assert.strictEqual(calculator.add(2, 3), 5, 'add(2, 3) should equal 5');
assert.strictEqual(calculator.add(-1, 1), 0, 'add(-1, 1) should equal 0');
assert.strictEqual(calculator.add(0, 0), 0, 'add(0, 0) should equal 0');
console.log('✓ add() tests passed');

// Test subtract function
console.log('Testing subtract()...');
assert.strictEqual(calculator.subtract(5, 3), 2, 'subtract(5, 3) should equal 2');
assert.strictEqual(calculator.subtract(0, 5), -5, 'subtract(0, 5) should equal -5');
assert.strictEqual(calculator.subtract(10, 10), 0, 'subtract(10, 10) should equal 0');
console.log('✓ subtract() tests passed');

// Test multiply function
console.log('Testing multiply()...');
assert.strictEqual(calculator.multiply(3, 4), 12, 'multiply(3, 4) should equal 12');
assert.strictEqual(calculator.multiply(0, 5), 0, 'multiply(0, 5) should equal 0');
assert.strictEqual(calculator.multiply(-2, 3), -6, 'multiply(-2, 3) should equal -6');
console.log('✓ multiply() tests passed');

// Test divide function
console.log('Testing divide()...');
assert.strictEqual(calculator.divide(10, 2), 5, 'divide(10, 2) should equal 5');
assert.strictEqual(calculator.divide(9, 3), 3, 'divide(9, 3) should equal 3');
assert.strictEqual(calculator.divide(-10, 2), -5, 'divide(-10, 2) should equal -5');

// Test divide by zero
try {
  calculator.divide(5, 0);
  assert.fail('divide(5, 0) should throw an error');
} catch (error) {
  assert.strictEqual(error.message, 'Cannot divide by zero');
}
console.log('✓ divide() tests passed');

// Test power function
console.log('Testing power()...');
assert.strictEqual(calculator.power(2, 3), 8, 'power(2, 3) should equal 8');
assert.strictEqual(calculator.power(5, 2), 25, 'power(5, 2) should equal 25');
assert.strictEqual(calculator.power(10, 0), 1, 'power(10, 0) should equal 1');
console.log('✓ power() tests passed');

console.log('\n🎉 All tests passed successfully!');
