const repeatString = function(string, num) {

    let stringHolder = "";

    if (num < 0) {
        return "ERROR";
    }

    for (let i = 0; i < num; i++) {

        stringHolder += string;
        
    };

    return stringHolder;
};

// Do not edit below this line
module.exports = repeatString;
