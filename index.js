const { solution: solution2 } = require('./questao2');
const { solution: solution3 } = require('./questao3');
const { solution: solution4 } = require('./questao4');
const { solution: solution5 } = require('./questao5');

async function main() {
    console.log('\n\nQuestao 2:\n');
    await solution2();
    
    console.log('\n\nQuestao 3:\n');
    solution3();

    console.log('\n\nQuestao 4:\n');
    solution4();

    console.log('\n\nQuestao 5:\n');
    solution5();
}

main();
