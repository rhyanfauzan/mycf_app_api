const express = require('express');
const router = express.Router();
const { Expense } = require('../models');
const { Op } = require('sequelize');

router.post('/', async (req, res) => {
    const { userId, label, amount, category, date } = req.body;
    try {
        const expense = await Expense.create({ userId, label, amount, category, date });
        res.status(201).json(expense);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const expenses = await Expense.findAll({ where: { userId } });
        res.status(200).json(expenses);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/:userId/date', async (req, res) => {
    const { userId } = req.params;
    const { startDate, endDate } = req.query;
    try {
        const expenses = await Expense.findAll({
            where: {
                userId,
                date: {
                    [Op.between]: [new Date(startDate), new Date(endDate)]
                }
            }
        });
        res.status(200).json(expenses);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/:userId/category', async (req, res) => {
    const { userId } = req.params;
    const { category } = req.query;
    try {
        const expenses = await Expense.findAll({ where: { userId, category } });
        res.status(200).json(expenses);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
