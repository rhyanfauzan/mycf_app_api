const express = require('express');
const router = express.Router();
const { Budget } = require('../models');

router.post('/', async (req, res) => {
    const { userId, category, amount } = req.body;
    try {
        const budget = await Budget.create({ userId, category, amount });
        res.status(201).json(budget);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const budgets = await Budget.findAll({ where: { userId } });
        res.status(200).json(budgets);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/:userId/category', async (req, res) => {
    const { userId } = req.params;
    const { category } = req.query;
    try {
        const expenses = await Budget.findAll({ where: { userId, category } });
        res.status(200).json(expenses);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
