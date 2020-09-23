"use strict";

const countChar = function (str, character) {
    let count = 0;
    let len = str.length;
    for (let i = 0; i < len; i++) {
        if (str[i] === character)
            count++;
    }
    return count;
};

console.log(countChar('BBC', 'B'));