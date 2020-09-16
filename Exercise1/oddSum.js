"use strict";
let i;
let oddSum = function (n) {
    let result = 0;
    for (i = 0; i < n; i++) {
        if (i % 2 == 1) {
            result = result + i;
        }
    }
    console.log(result);
};

oddSum(10);