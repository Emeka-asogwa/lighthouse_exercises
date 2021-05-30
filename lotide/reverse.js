const arr = process.argv.slice(2);
const reverse = function(num) {
  let newarr = "";
  for (let i = num.length - 1; i >= 0; i--) {
    newarr = newarr + num[i];
  }
  return newarr;
};
console.log(reverse("hbgdtcm"))

for (const element of arr) {
  console.log(reverse(element));
}