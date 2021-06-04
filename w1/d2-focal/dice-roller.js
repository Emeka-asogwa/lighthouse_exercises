const args = process.argv.slice(2);
let diceRoller = function(value) {
  let dice = "";
  for (let diceSide = 0; diceSide < value; diceSide++) {
    dice = dice + Math.ceil(Math.random(diceSide) * 6) + ",";
  } return `Rolled 3 dice: ${dice.replace(/,\s*$/, "")}`;

};
console.log(diceRoller(args));
