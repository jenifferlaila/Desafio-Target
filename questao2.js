const { createInterface } = require('node:readline');

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}  

async function readStdin() {
    console.log('\nInforme um numero a ser consultado: ');
    
    const stdin = createInterface({ input: process.stdin });

    let num = -1;
    for await (const line of stdin) {
        num = parseInt(line);
        break;
    }

    stdin.close();

    if (isNaN(num)) throw new Error('O numero informado nao e valido');

    return num;
}

function doesFibContains(n) {
    if (typeof n !== 'number') throw new Error('O numero nao parece ser valido...');

    if (n === 0 || n === 1) return true;

    let temp = 0;
    let [prev, curr] = [0, 1];

    while (curr <= n) {
        if (curr === n) return true;

        temp = curr;

        curr = curr + prev;
        prev = temp;
    }

    return false;
}

async function solution() {
    const n = await readStdin();
    const isIn = doesFibContains(n);

    if (isIn) {
        console.log(`O numero ${n} pertence a sequencia de fibonacci`);
    } else {
        console.log(`O numero ${n} NAO pertence a sequencia de fibonacci`);
    }

    await delay(2000);
}

module.exports = {
    solution,
};
