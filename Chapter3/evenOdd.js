"use strict";

function isEven(a) {
    if (a === 0) {
        return true;
    }
    if (a === 1) {
        return false;
    } else {
        return isEven(a - 2);
    }
}

console.log(isEven(111));