describe("FizzBuzz", function() {
  var fizzBuzz

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  it("should return a number that isn't divisible by 3 or 5", function() {
    expect(fizzBuzz.play(13)).toEqual(13);
  });

  it("should return 'fizz' for multiples of 3", function() {
    expect(fizzBuzz.play(3)).toEqual('Fizz');
  });

  it("should return 'buzz' for multiples of 5", function() {
    expect(fizzBuzz.play(5)).toEqual('Buzz');
  });
});
