function FizzBuzz() {
}

FizzBuzz.prototype.play = function(number) {
  if (this._isDivisible(15, number)) {
    return 'FizzBuzz';
  } else if (this._isDivisible(3, number)) {
    return 'Fizz';
  } else if (this._isDivisible(5, number)) {
    return 'Buzz';
  } else {
    return number;
  };
};

FizzBuzz.prototype._isDivisible = function(divisor, number) {
  return number % divisor === 0;
};
