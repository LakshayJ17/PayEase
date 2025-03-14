// Sets up specific routes for user-related operations
// eg - /api/v1/user/signup

const express = require('express');

const router = express.Router();
const zod = require("zod");
const { User, Account } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { authMiddleware } = require("../middleware");


// SIGNUP SCHEMA & LOGIC
// ----------------------------------------------
// Check if the given inputs satisfy the schema
// If not, return an error message
// If yes, check whether user already exits in db
// If yes, return an error message (bcz its a signup request) -> meaning new user create 
// If no, create a new user in db

const signupBody = zod.object({
    username: zod.string().email(),
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string()
})

router.post("/signup", async (req, res) => {
    try {
        const { success } = signupBody.safeParse(req.body)
        if (!success) {
            return res.status(411).json({
                message: "Email already taken / Incorrect inputs"
            })
        }

        const existingUser = await User.findOne({
            username: req.body.username
        })

        if (existingUser) {
            return res.status(411).json({
                message: "Email already taken / Incorrect inputs"
            })
        }

        const user = await User.create({
            username: req.body.username,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
        })
        const userId = user._id;

        await Account.create({
            userId,
            balance: 1 + Math.random() * 10000
        })

        // This is the token that the user will use to authenticate themselves in future requests   
        const token = jwt.sign({
            userId
        }, JWT_SECRET);

        res.json({
            message: "User created successfully",
            token: token,
            userId: userId
        })
    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message
        })

    }

})

// SIGNIN SCHEMA & LOGIC
// -----------------------------------------------
// Check if the given inputs satisfy the schema
// if not, return an error message
// If yes, check whether user exists in db
// If yes, return a token using jwt.sign
// If no, return an error message

const signinBody = zod.object({
    username: zod.string().email(),
    password: zod.string()
})

router.post("/signin", async (req, res) => {
    try {
        const { success } = signinBody.safeParse(req.body);

        if (!success) {
            return res.status(411).json(({ message: "Incorrect inputs" }))
        }

        const user = await User.findOne({
            username: req.body.username,
            password: req.body.password
        })

        if (user) {
            // Generate a JWT with the user's ID as the payload
            const token = jwt.sign({
                userId: user._id
            }, JWT_SECRET);

            // Send the token back to the client in the response
            res.json({
                message: "Logged in successfully",
                token: token,
                firstName: user.firstName,
                userId: user._id
            })
            return;
        }
    } catch (error) {
        res.status(411).json({
            message: "Error while logging in"
        })
    }



})

//  UPDATE SCHEMA & LOGIC
// -----------------------------------------------
// Check if the given inputs satisfy the schema
// If not, return an error message
// If yes, update the user information in the db

const updateBody = zod.object({
    password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
})

router.put("/", authMiddleware, async (req, res) => {
    const { success } = updateBody.safeParse(req.body)
    if (!success) {
        res.status(411).json({
            message: "Error while updating information"
        })
    }

    await User.updateOne(req.body, {
        id: req.userId
    })

    res.json({
        message: "Updated successfully"
    })
})

// GET INFO OF ALL USERS ( LIKE ACCESSING PEOPLE THROUGH THEIR NAME IN PAYTM TO SEND MONEY)
// -----------------------------------------------
// Check if the given inputs satisfy the schema
// If not, return an error message
// If yes, find the users with the given filter

router.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})

module.exports = router