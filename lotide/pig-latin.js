const args = process.argv.slice(2);   /// Removing initial values not needed
const pigLatin = function(arg) {
  let str = "";
  for (let i = 0; i < arg.length; i++) {
    str = str + arg[i].slice(1) + arg[i].slice(0,1);
    str += "ay ";
    
  }
  return str;
};

console.log(pigLatin(args));
