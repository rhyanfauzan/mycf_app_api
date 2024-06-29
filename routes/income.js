const express = require('express');
const router = express.Router();
const { Income } = require('../models');
const { Op } = require('sequelize');

router.post('/', async (req, res) => {
    const { userId, label, amount, source, date } = req.body;
    try {
        const income = await Income.create({ userId, label, amount, source, date });
        res.status(201).json(income);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const incomes = await Income.findAll({ where: { userId },
            order: [['date', 'DESC']] // Sort by date in descending order
        });
        res.status(200).json(incomes);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/:userId/date', async (req, res) => {
    const { userId } = req.params;
    const { startDate, endDate } = req.query;
    try {
        const incomes = await Income.findAll({
            where: {
                userId,
                date: {
                    [Op.between]: [new Date(startDate), new Date(endDate)]
                }
            },
            order: [['date', 'DESC']] // Sort by date in descending order
        });
        res.status(200).json(incomes);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/:userId/source', async (req, res) => {
    const { userId } = req.params;
    const { source } = req.query;
    try {
        const incomes = await Income.findAll({ where: { userId, source } });
        res.status(200).json(incomes);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
