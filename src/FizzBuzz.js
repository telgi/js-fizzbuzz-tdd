function FizzBuzz() {
}

FizzBuzz.prototype.play = function(number) {
  if (number % 3 === 0) {
    return 'Fizz';
  } else {
    return number;
  }
};
