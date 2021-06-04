const { should } = require('chai');
const chai = require('chai'); // 1
const assert = chai.assert;

const shouldBuyCar = require('../shouldBuyCar.js'); // 2

describe("#shouldBuyCar()", function() { // 3

  it("should return false if it's a hatchback", function() { // 4
    const car = {
      type: "hatchback"
    
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);

  });
  it("should return true when the car is pink", function() { // 4
    const car = {
      //type: "pink"
      color: "pink"
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);

  });
  it("should return false when there are no details about the car", function() { // 4
    const car = {
      //type: "pink"
      //color: "pink"
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);

  });
  it("should return true when the car is pink", function() { // 4
    const car = {
      litresPer100km: car.litresPer100km && car.litresPer100km >= 6 && car.litresPer100km <= 11,
      
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);

  });
  
  

});
