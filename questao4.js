const data = {
    'SP': 67836.43,
    'RJ': 36678.66,
    'MG': 29229.88,
    'ES': 27165.48,
    'Outros': 19849.53,
}

const getPart = (total, part) => (part / total) * 100;

function solution() {
    const entries = Object.entries(data);

    const total = entries.reduce((prev, [_, value]) => prev + value, 0);

    console.log(`Faturamento total: R$${total.toFixed(2)}\n`);
    for (const [uf, value] of entries) {
        console.log(`${uf}: ${getPart(total, value).toFixed(2)}%`);
    }
}

module.exports = {
    solution,
};
