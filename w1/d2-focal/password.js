const obfuscate = function(password) {
  let passwordArr = password.split('');
  let obfuscatepassword = "";
  for (let value of passwordArr) {
    if (value === "a") {
      value = '4';
      obfuscatepassword += value;
    } else if (value === "e") {
      value = '3';
      obfuscatepassword += value;

    } else if (value === "o") {
      value = '0';
      obfuscatepassword += value;
    } else if (value === "l") {
      value = '1';
      obfuscatepassword += value;
    } else {
      obfuscatepassword += value;
    }

  } return obfuscatepassword;
};

// console.log(obfuscate("password"));

// console.log(obfuscate("abracadabra"));

// ///----------    Switch method -----------//


// function obfuscate(password) {
//   let obfuscatepassword = "";
//   let passwordArr = password.split("");
//   for (let i = 0; i < password.length; i++) {
//     switch (passwordArr[i]) {
//     case 'a':
//       obfuscatepassword += '4';
//       break;
//     case 'e' :
//       obfuscatepassword += '3';
//       break;
//     case 'o' :
//       obfuscatepassword += '0';
//       break;
//     case 'l':
//       obfuscatepassword += '1';
//       break;
//     default :
//       obfuscatepassword += passwordArr[i];

//     }
//   }
//   return (obfuscatepassword);
// }

console.log(obfuscate("password"));

console.log(obfuscate("abracadabra"));