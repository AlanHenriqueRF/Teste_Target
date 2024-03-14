"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function InvertSting(string) {
    string = string.toLowerCase();
    var newString = '';
    for (var i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    return newString;
}
exports.default = InvertSting;
console.log(InvertSting('target sistemas'));