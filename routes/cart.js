const express = require('express');
const router = express.Router();
const userAuth = require('../middlewares/userAuth')

// import the service layer
const cartService = require("../service/cartService");

// get the current content of the shopping cart
// [userAuth] needs to be there to authenicate user, to get req.user.userId;
router.get("/",[userAuth], async function (req,res){
    try {
        const cartItems = await cartService.getCartContents(req.user.userId);
        res.json(cartItems);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
})

router.put("/", [userAuth], async function (req,res) {
    try {
        const cartItems = req.body.cartItems;

        console.log(cartItems);
        await cartService.updateCart(req.user.userId, cartItems);
        res.status(200).json({
            'Message': 'Cart updated successfully'
        })

    } catch(e){
        console.error(e);
        res.sendStatus(500);
    }
})

// save or update the current content of the shopping cart
router.put("/", async function (req,res){
    res.send("Put Cart Route")
})

module.exports = router;