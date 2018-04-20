describe("FizzBuzz", function() {
  var fizzBuzz

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  describe("multiples of 3", function() {
    it("should return 'Fizz' when number is 3", function() {
      expect(fizzBuzz.play(3)).toEqual('Fizz');
    });

    it("should return 'Fizz' when number is 6", function() {
      expect(fizzBuzz.play(6)).toEqual('Fizz');
    });
  });

  describe("multiples of 5", function() {
    it("should return 'Buzz' when number is 5", function() {
      expect(fizzBuzz.play(5)).toEqual('Buzz');
    });

    it("should return 'Buzz' when number is 5", function() {
      expect(fizzBuzz.play(10)).toEqual('Buzz');
    });
  });

  describe("multiples of 3 and 5", function() {
    it("should return 'FizzBuzz' when number is 15", function() {
      expect(fizzBuzz.play(15)).toEqual('FizzBuzz');
    });

    it("should return 'FizzBuzz' when number is 30", function() {
      expect(fizzBuzz.play(15)).toEqual('FizzBuzz');
    });
  });

  describe("numbers not divisible by 3 or 5", function() {
    it("should return 8 when number is 8", function() {
      expect(fizzBuzz.play(8)).toEqual(8);
    });

    it("should return 13 when number is 13", function() {
      expect(fizzBuzz.play(13)).toEqual(13);
    });
  });
});
