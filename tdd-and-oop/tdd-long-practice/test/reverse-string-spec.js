// Your code here
const chai = require("chai");
const expect = chai.expect;
const reverseString = require("../problems/reverse-string");

describe("reverseString", () => {
  it("should return a string", () => {
    expect(reverseString("hello")).to.be.a("string");
  });
  it("should return the reverse of the input string", () => {
    expect(reverseString("fun")).to.equal("nuf");
  });

  it("should throw an error if the input is not a string", () => {
    expect(() => reverseString(123)).to.throw(Error);
  });
});
