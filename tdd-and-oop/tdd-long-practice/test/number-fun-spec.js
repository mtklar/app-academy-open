// Your code here
const chai = require("chai");
const expect = chai.expect;
const { returnsThree, reciprocal } = require("../problems/number-fun");

describe("returnsThree", () => {
  it("should return a number", () => {
    expect(returnsThree()).to.be.a("number");
  });

  it("should return 3", () => {
    expect(returnsThree()).to.equal(3);
  });
});

describe("reciprocal", () => {
  it("should return a number", () => {
    expect(reciprocal(3)).to.be.a("number");
  });

  it("should return 1/3", () => {
    expect(reciprocal(3)).to.equal(1 / 3);
  });
});
