const express = require('express');
const router = express.Router();

// import the service layer
const cartService = require("../service/cartService");

// get the current content of the shopping cart
router.get("/", async function (req,res){
    try {
        const cartItems = await cartService.getCartContents(3);
        res.json(cartItems);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
})

// save or update the current content of the shopping cart
router.put("/", async function (req,res){
    res.send("Put Cart Route")
})

module.exports= router;