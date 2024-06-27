const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

const setupSwagger = require('./swagger/swagger'); // Import the Swagger setup

const userRoutes = require('./routes/user');
const incomeRoutes = require('./routes/income');
const expenseRoutes = require('./routes/expense');
const budgetRoutes = require('./routes/budget');

app.use(cors());
app.use(bodyParser.json());

setupSwagger(app); // Setup Swagger

app.use('/api/users', userRoutes);
app.use('/api/incomes', incomeRoutes);
app.use('/api/expenses', expenseRoutes);
app.use('/api/budgets', budgetRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Cashflow App API');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
