const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3001;

const pool = new Pool({
    user: 'oxem',
    host: 'localhost',
    database: 'currency_news',
    password: '12345678',
    port: 5432,
});

app.get('/api/news', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM news ORDER BY created_at DESC');
        const news = result.rows;
        res.json(news);
    } catch (error) {
        console.error('Error fetching news', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});