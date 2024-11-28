// const express = require('express');
// const router = express.Router();
// const userService = require('../service/userService')

// // register your routes
// router.post("/register", async function (req, res) {
//     try {
//         const userId = await userService.registerUser(req.body);
//         res.status(200).json({
//             "message": "New user created",
//             "userId": userId
//         })
//     } catch (error) {
//         console.log(error);
//         res.sendStatus(500);
//     }
// });

//     router.post("/login", function (req, res) {
//         res.json({
//             "message": "Login"
//         })
//     })


//     // export routes
//     module.exports = router;

const express = require('express');
const router = express.Router();
const userService = require('../service/userService');
const jwt = require('jsonwebtoken');

// POST register a new user
router.post('/register', async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      salutation,
      marketingPreferences,
      country
    } = req.body;

   
    // Register user with the new payload structure
    const userId = await userService.registerUser({
      name,
      email,
      password,
      salutation,
      marketingPreferences,
      country
    });

    res.status(201).json({ message: "User registered successfully", userId });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// POST login a user
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userService.loginUser(email, password);
    const token = jwt.sign({ 
        userId: user.id,
        email: user.email,
        name: user.name
    }, process.env.JWT_SECRET, { expiresIn: '1h' });
    
    res.json({ message: "Login successful", token });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

module.exports = router;
