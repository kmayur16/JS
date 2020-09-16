"use strict";
let i;
let bottle = function (n) {
    for (let i = n; i >= 1; i--) {


        console.log('%d bottles of water on wall,\n %d bottles of water,\n ya take one down,ya pass it around,\n %d bottles of water on wall\n', i, i, i - 1);
    }
    if (i == 0) {
        console.log("No bottles of water on the wall,\n no bottles of water,\n ya cant take one down, ya can't pass it around,\n cause there are no more bottles of water on the wall ");
    }
};

bottle(99);