"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function IsFibonacci(n) {
    var a = 0, b = 1;
    if (n < 0) {
        return "Infelizmente, o n\u00FAmero ".concat(n, " n\u00E3o pertence a senqu\u00EAncia de Fibonacci");
    }
    if (n === a || n === b) {
        return "Que legal! O n\u00FAmero ".concat(n, " pertence a senqu\u00EAncia de Fibonacci");
    }
    while (n >= b) {
        var proximo = a + b;
        if (n === proximo) {
            return "Que legal! O n\u00FAmero ".concat(n, " pertence a senqu\u00EAncia de Fibonacci");
        }
        a = b;
        b = proximo;
    }
    return "Infelizmente, o n\u00FAmero ".concat(n, " n\u00E3o pertence a senqu\u00EAncia de Fibonacci");
}
exports.default = IsFibonacci;
console.log(IsFibonacci(34));
