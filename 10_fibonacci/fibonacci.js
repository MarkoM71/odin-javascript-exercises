const fibonacci = function (num) {
    let a = 0;
    let b = 1;
    let c;

    if (Math.sign(num) === -1) {
        return "OOPS";
    }

    else if (typeof num === "string") {
        parseInt(num);
    }

    for (let i = 1; i <= num; i++){
        c = a + b;
        a = b;
        b = c;                          /// a, b, c
    }
    return a;
};

// Do not edit below this line
module.exports = fibonacci;
