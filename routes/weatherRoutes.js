const express = require('express');
const { Pool } = require('pg'); // Use Pool here
const router = express.Router();

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "weather",
    password: "Jubin",
    port: 5432,
});

// Home Route
router.get('/', async (req, res) => {
    try {
        const weatherData = await pool.query('SELECT * FROM weather_data ORDER BY created_at DESC LIMIT 10');
        res.render('index', { weatherData: weatherData.rows });
    } catch (error) {
        console.error('Error fetching weather data:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Daily Summary Route
router.get('/summary', async (req, res) => {
    try {
        const summaries = await pool.query('SELECT * FROM daily_weather_summary ORDER BY date DESC');
        res.render('summary', { summaries: summaries.rows });
    } catch (error) {
        console.error('Error fetching daily summaries:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
