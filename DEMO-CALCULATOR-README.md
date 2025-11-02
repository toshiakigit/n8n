# Demo Calculator Module

A simple calculator module demonstrating TodoWrite usage with Claude AI.

## Features

- Addition
- Subtraction
- Multiplication
- Division (with zero-check)
- Power/Exponentiation

## Installation

No installation needed - this is a demo module.

## Usage

```javascript
const calculator = require('./demo-calculator');

// Addition
console.log(calculator.add(5, 3));        // Output: 8

// Subtraction
console.log(calculator.subtract(10, 4));  // Output: 6

// Multiplication
console.log(calculator.multiply(3, 7));   // Output: 21

// Division
console.log(calculator.divide(20, 4));    // Output: 5

// Power
console.log(calculator.power(2, 3));      // Output: 8
```

## Error Handling

The divide function throws an error when attempting to divide by zero:

```javascript
try {
  calculator.divide(10, 0);
} catch (error) {
  console.error(error.message); // "Cannot divide by zero"
}
```

## Testing

Run tests with:

```bash
node demo-calculator.test.js
```

## API Documentation

All functions are documented with JSDoc. See source code for detailed parameter and return type information.

---

**Demo created to showcase TodoWrite functionality with Claude AI**
