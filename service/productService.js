const productData = require ('../data/productData');

async function getAllProducts() {
    const products = await productData.getAllProducts();
    return products;
}

async function getProductById(id){
    const product = await productData.getProductById(id);
    return products;
}

module.exports = {
    getAllProducts, getProductById
}