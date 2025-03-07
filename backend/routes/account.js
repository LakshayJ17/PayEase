// api/v1/account/
const express = require('express');
const { authMiddleware } = require('../middleware');
const { Account, Transactions } = require('../db');
const { default: mongoose } = require('mongoose');

const router = express.Router();

// GET BALANCE

router.get("/balance", authMiddleware, async (req, res) => {
    try {
        const account = await Account.findOne({ userId: req.userId });
        if (!account) {
            return res.status(404).json({ message: 'Account not found' });
        }
        res.json({ balance: account.balance });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// TRANSFER MONEY
router.post("/transfer", authMiddleware, async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();
    const { amount, to } = req.body;

    try {
        const account = await Account.findOne({ userId: req.userId }).session(session);
        const toAccount = await Account.findOne({ userId: to }).session(session);

        if (!account || account.balance < amount || amount <= 0) {
            // Save failed transaction OUTSIDE the session to prevent rollback
            const failedTransaction = new Transactions({
                from: account ? account._id : null,
                to: toAccount ? toAccount._id : null,
                amount: amount,
                status: "failed"
            });

            await failedTransaction.save(); // No session here
            await session.abortTransaction();
            return res.status(400).json({
                message: "Insufficient balance or invalid amount"
            });
        }

        
        if (!toAccount) {
            // Save failed transaction OUTSIDE the session
            const failedTransaction = new Transactions({
                from: account._id,
                to: null,
                amount: amount,
                status: "failed"
            });

            await failedTransaction.save(); // No session here
            await session.abortTransaction();
            return res.status(400).json({
                message: "Invalid account"
            });
        }

        // Perform the transaction
        await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
        await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

        const transaction = new Transactions({
            from: account._id,
            to: toAccount._id,
            amount: amount,
            status: "success"
        });

        await transaction.save({ session });

        // Commit the transaction
        await session.commitTransaction();
        res.json({
            message: "Transfer successful"
        });

    } catch (error) {
        console.error("Transaction error:", error);
        try {
            // Save failed transaction OUTSIDE the session
            const failedTransaction = new Transactions({
                from: account ? account._id : null,
                to: toAccount ? toAccount._id : null,
                amount: amount,
                status: "failed"
            });

            await failedTransaction.save(); // No session here
        } catch (saveError) {
            console.error('Failed to save failed transaction:', saveError);
        }

        await session.abortTransaction();
        res.status(500).json({ message: 'Server error' });
    } finally {
        session.endSession();
    }
});

router.get("/transactions", authMiddleware, async (req, res) => {
    try {
        const account = await Account.findOne({ userId: req.userId });
        if (!account) {
            return res.status(404).json({ message: "Account not found" });
        }

        const allTransactions = await Transactions.find({
            $or: [{ from: account._id }, { to: account._id }]
        }).populate('from to', 'userId')

        res.json(allTransactions);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
})
module.exports = router;
