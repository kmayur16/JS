let str1 = "";

for (let i = 1; i <= 7; i++) {
  for (let j = 1; j <= 7; j++) {
    if (j <= i) {
      str1 = str1.concat("*");
    }
  }
  str1 = str1.concat("\n");
}

console.log(str1);
