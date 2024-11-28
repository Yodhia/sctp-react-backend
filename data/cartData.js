const pool = require('../database');

async function getCartContents(userId) {
    const [rows] = await pool.query(
        `SELECT cart_items.id, 
            product_id, 
            image AS imageUrl,
            CAST(price AS DOUBLE) AS price, 
            quantity
        FROM
            cart_items JOIN products
            ON cart_items.product_id = products.id
        WHERE user_id = ? 
        `, [userId]
    );
    return rows;
}

module.exports = {
    getCartContents
}