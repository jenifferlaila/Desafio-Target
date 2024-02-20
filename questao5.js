const { createInterface } = require('node:readline');

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}  

async function readStdin() {
    console.log('\nInforme uma string a ser invertida: ');
    
    const stdin = createInterface({ input: process.stdin });

    let target = '';
    for await (const line of stdin) {
        target = line;
        break;
    }

    stdin.close();

    return target;
}

function reverse(str) {
    if (typeof str !== 'string') throw new Error('Algo errado aconteceu ao receber sua string');

    let out = '';
    const strArr = Array.from(str);
    for (let i = strArr.length - 1; i >= 0; i--) {
        out += strArr[i];
    }

    return out;
}

async function solution() {
    const str = await readStdin();
    const rev = reverse(str);

    console.log(`A string '${str}' invertida e: ${rev}`)

    await delay(2000);
}

module.exports = {
    solution,
};
