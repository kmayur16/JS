var power = (base, exponent) => {
  var result = 1;
  for (var count = 0; count < exponent; count++) {
    result *= base;
  }
  console.log(result);
};

var n = prompt("enter the exp");
var a = prompt("enter the a");
var b = prompt("enter the b");
var c = prompt("enter the c");
var x = power(a, n);
var y = power(b, n);
var z = power(c, n);

var checkFermat = function (a, b, c, n) {
  if (n > 2 && x + y == z) {
    console.log("Holy smokes, Fermat was wrong!");
  } else {
    console.log("No that Dosen't work");
  }
};
checkFermat(a, b, c, n);
