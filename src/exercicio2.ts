export default function IsFibonacci(n: number) {
    let a = 0, b = 1;
    if (n < 0) {
        return `Infelizmente, o número ${n} não pertence a senquência de Fibonacci`
    }
    if (n === a || n === b) {
        return `Que legal! O número ${n} pertence a senquência de Fibonacci`
    }
    while (n >= b) {
        const proximo = a + b;
        if (n === proximo) {
            return `Que legal! O número ${n} pertence a senquência de Fibonacci`
        }
        a = b;
        b = proximo

    }
    return `Infelizmente, o número ${n} não pertence a senquência de Fibonacci`
}

console.log(IsFibonacci(34))


