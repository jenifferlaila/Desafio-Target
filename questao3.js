const dados = require('./dados.json');

function parse() {
    if (!dados || !dados.length) throw new Error('Dados errados ou inexistentes');
}

function findSmallest() {
    let smallest = dados[0];

    for (const { dia, valor } of dados) {
        if (valor < smallest.valor) {
            smallest = { dia, valor };
        }
    }

    return smallest;
}

function findSmallestOtherThanZero() {
    let smallest = dados[0];

    for (const { dia, valor } of dados) {
        if (valor < smallest.valor && valor > 0) {
            smallest = { dia, valor };
        }
    }

    return smallest;
}

function findLargest() {
    let largest = dados[0];

    for (const { dia, valor } of dados) {
        if (valor > largest.valor) {
            largest = { dia, valor };
        }
    }

    return largest;
}

function solution() {
    parse();

    const smallest = findSmallest();
    const smallestOtherThanZero = findSmallestOtherThanZero();
    const largest = findLargest();

    const average = (dados.reduce((prev, { valor }) => prev + valor, 0)) / dados.length;
    const aboveAverage = dados.filter(({ valor }) => valor > average).length;

    console.log(`Menor valor: ${smallest.valor} - Dia ${smallest.dia}`);
    console.log(`Menor valor (diferente de 0): ${smallestOtherThanZero.valor} - Dia ${smallestOtherThanZero.dia}`);
    console.log(`Maior valor: ${largest.valor} - Dia ${largest.dia}`);
    console.log(`Dias com faturamento superior a media (${average}): ${aboveAverage}`);
}

module.exports = {
    solution,
};
