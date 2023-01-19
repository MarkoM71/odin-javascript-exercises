const palindromes = function (str) {
    newStr = str.replace(/[^A-Za-z0-9]/g, "").replace(/\s{2,}/g, "").toLowerCase();
    reverseStr = newStr.split('').reverse().join('');

    if (newStr === reverseStr) {
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
