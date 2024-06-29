const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const { User } = require('../models');

router.post('/register', async (req, res) => {
    const { username, name, email, password } = req.body;
    try {
        const user = await User.create({ username, name, email, password });
        const userWithoutPassword = user.toJSON();
        delete userWithoutPassword.password;
        res.status(201).json(userWithoutPassword);
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            res.status(400).json({ error: 'Username already exists' });
        } else {
            res.status(400).json({ error: error.message });
        }
    }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.scope('withPassword').findOne({ where: { username } });
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        const userWithoutPassword = user.toJSON();
        delete userWithoutPassword.password;
        res.status(200).json(userWithoutPassword);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
