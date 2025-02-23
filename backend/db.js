const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://lakshayjain01lj:tsReWDrRvZvctmm7@cluster0.afpny.mongodb.net/paytm")

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
})

const accountSchema = mongoose.Schema({
    // only exisiting user id can add balance
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
})

const TransactionSchema = mongoose.Schema({
    from: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Account",
        required: true
    },
    to: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Account",
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model("User", userSchema);
const Account = mongoose.model("Account", accountSchema);
const Transactions = mongoose.model("Transactions", TransactionSchema);

module.exports = {
    User,
    Account,
    Transactions
}
