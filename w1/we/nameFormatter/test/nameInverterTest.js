const chai = require('chai');
const assert = chai.assert;

const nameInverter = require('../nameInverter');

describe('nameInverter', function() {
  
  it('should return an empty string when passed an empty string', function() {
    const inputName = "";
    const expectedOutput = "";
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  it('should return name when passed a single name', function() {
    const inputName = "johnny";
    const expectedOutput = "johnny";
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  it('should return name when passed a single name with trailing and leading whitespace', function() {
    const inputName = " johnny ";
    const expectedOutput = "johnny";
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  it('should return lastname, firstname when passed a first name  and last name', function() {
    const inputName = "johnny trinh";
    const expectedOutput = "trinh, johnny";
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  
  it('should return lastname, firstname when passed a first name  and last name with trailing and leading whitespace', function() {
    const inputName = " John Doe  ";
    const expectedOutput = "Doe, John";
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  it('should return an empty string when passed a single honorific', function() {
    const inputName = "Dr. ";
    const expectedOutput = "";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('should return an honorific. firstname when passed an honorific. firstname', function() {
    const inputName = "Dr. John";
    const expectedOutput = "Dr. John";
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  it('should return an honorific. latname, firstname when passed an honorific. firstname, lastname', function() {
    const inputName = "Dr. Mark White";
    const expectedOutput = "Dr. White, Mark";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('should return an honorific. latname, firstname when passed an honorific. firstname, lastname with leading/trailing whitespace', function() {
    const inputName = " Dr. Mark White ";
    const expectedOutput = "Dr. White, Mark";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('should return undefined when passed an undefined name', function() {
    const inputName = undefined;
    const expectedOutput = undefined;
    assert.equal(nameInverter(inputName), expectedOutput);
  });




});
