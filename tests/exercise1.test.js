const exercise1 = require('../exercise1');

describe('FizzBuzz', () => {
  it('should show FizzBuzz in 15', () => {
    const result = exercise1.fizzBuzz(15);

    expect(result).toBe('FizzBuzz');
  });

  it('should show Fizz in 3', () => {
    const result = exercise1.fizzBuzz(3);

    expect(result).toBe('Fizz');
  });

  it('should show Buzz in 5', () => {
    const result = exercise1.fizzBuzz(5);

    expect(result).toBe('Buzz');
  });

  it('should show original input in 7', () => {
    const result = exercise1.fizzBuzz(7);

    expect(result).toBe(7);
  });

  it('should throw error without number', () => {
    expect(() => { exercise1.fizzBuzz('Hello') }).toThrow();
  });
});
