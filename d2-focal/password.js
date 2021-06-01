const obfuscate = function (str) {
  let empty = "";
  let empty1 = "";
  let empty2 = "";
  let empty3 = "";
  for (let value of str) {
    //let empty = ""
    if (value === "a") {
      empty = str.replace(value, 4);
    } else if (value === "e") {
      empty1 = empty.replace(value, 3);
    } else if (value === "o") {
      empty2 = empty1.replace(value, 0);
    } else if (value === "l") {
      empty3 = empty2.replace(value, 1);
    }

  } return empty1;
}

console.log(obfuscate("password"))

console.log(obfuscate("abracadabra"))