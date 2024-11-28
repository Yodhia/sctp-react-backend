const express = require('express');
const router = express.Router();
const userService = require('../service/userService')

// register your routes
router.post("/register", async function (req, res) {
    try {
        const userId = await userService.registerUser(req.body);
        res.status(200).json({
            "message": "New user created",
            "userId": userId
        })
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

    router.post("/login", function (req, res) {
        res.json({
            "message": "Login"
        })
    })


    // export routes
    module.exports = router;