// const product = require("./services/products");
const {getFullName, productType} = require("./services/products");
const config = require("./services/config");
const db = require("./services/database");

async function main() {
    console.log("Products list:");
    // console.log(product.productType);

    // console.log(config.devArea.production);
    // console.log(config.client);

    getFullName(1, "Kindle");
    getFullName(2, "Sweater");
    // product.getProductLabel("Bottle"); // Ctrl+K+C para comentar
    db.connectToDB("db_ecommerce")
    db.disconnectDB();
}

main();