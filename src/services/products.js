// Todas as funções que lidam com produto
const productType = {
    version: "digital",
    tax: "x1",
};

async function getFullName(codeID, productName) {
    console.log(`${codeID} - ${productName}`);
}

async function getProductLabel(productName) {
    console.log(`Name: ${productName}`);
}

module.exports = {
    getFullName,
    getProductLabel,
    productType,
}; // Hidden function são funções que ficam escondidas para o lado de fora do arquivo
