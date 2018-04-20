describe("FizzBuzz", function() {
  var fizzBuzz

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  it("should return a number", function() {
    expect(fizzBuzz.play(1)).toEqual(1);
  })
});
