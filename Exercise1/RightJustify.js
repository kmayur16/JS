"use strict";
let len, space;
let rightJustify = function (s) {
    len = s.length;
    space = 69;
    console.log(s.padStart(len + space));
};

rightJustify("monty");