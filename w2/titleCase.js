const titleCase = function(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
};





// const titleCase = function(string) {
//   let str = string.toLowerCase();
//   let sentence = str.split(' ');
//   let newFile = "";
//   if (string === "") {
//     return "";
//   } else {
  
//     for (let value of sentence) {
//       newFile += ((value[0]).toUpperCase()) + value.slice(1)+ " ";
//     //console.log()
//     }
//   }
//   return newFile;
// };



console.log(titleCase("this is an example"));
console.log(titleCase("test"));
console.log(titleCase("i r cool"));
console.log(titleCase("WHAT HAPPENS HERE"));
console.log(titleCase(""));
console.log(titleCase("A"));



