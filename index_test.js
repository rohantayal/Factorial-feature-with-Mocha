var assert = require("assert");
var Calculate = require("../index.js");

describe("Calculate", () => {
  describe(".factorial", () => {
    it("Will test if the output of 5! is equal to 120", () => {
      //setup
      const inputNum = 5;
      const expectedResult = 120;
      //execute
      const result = Calculate.factorial(inputNum);
      //verify
      assert.equal(result, expectedResult);
    });

    //Second Red
    it("Will test if the output of 3! is 6", () => {
        //setup
      const inputNum = 3;
      const expectedResult = 6;
      //execute
      const result = Calculate.factorial(inputNum);
      //verify
      assert.equal(result, expectedResult);
    });

    //edge case
    it("Will test if the output of 0! is 1",()=>{
      //setup
      const inputNum = 0;
      const expectedResult = 1;
      //execute
      const result = Calculate.factorial(inputNum);
      //verify
      assert.equal(result, expectedResult);
    })
  });
});
