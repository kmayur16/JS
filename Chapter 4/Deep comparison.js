"use strict";

function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
    if (a == null || b == null || typeof a != "object" || typeof b != "object") {
        return false;
    }
    let keysOfA = Object.keys(a);
    let keysOfB = Object.keys(b);

    if (keysOfA.length != keysOfB.length) return false;
    for (let key of keysOfA) {
        if (deepEqual(a[key], b[key]) == false) {
            return false;
        }
    }
    return true;
}

let obj = {
    here: {
        is: "an"
    },
    object: 2
};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {
    here: 1,
    object: 2
}));
// → false
console.log(deepEqual(obj, {
    here: {
        is: "an"
    },
    object: 2
}));
// → true