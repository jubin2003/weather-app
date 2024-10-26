const express = require('express');
const { Pool } = require('pg');
const axios = require('axios');
const cron = require('node-cron');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Set up PostgreSQL client
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

// Middleware
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', require('./routes/weatherRoutes'));

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

// Schedule API calls every 1 minute
cron.schedule('* * * * *', async () => {
    await fetchWeatherData();
});

// Function to fetch weather data
async function fetchWeatherData() {
    const cities = ['Delhi', 'Mumbai', 'Chennai', 'Bangalore', 'Kolkata', 'Hyderabad'];
    for (const city of cities) {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHER_API_KEY}`);
            const { main, weather, dt } = response.data;

            const weatherData = {
                city: city,
                main_condition: weather[0].main,
                temperature: main.temp - 273.15, // Convert from Kelvin to Celsius
                feels_like: main.feels_like - 273.15,
                timestamp: new Date(dt * 1000), // Convert Unix timestamp to JS Date
            };

            // Save to database
            await pool.query('INSERT INTO weather_data (city, main_condition, temperature, feels_like, timestamp) VALUES ($1, $2, $3, $4, $5)', 
                [weatherData.city, weatherData.main_condition, weatherData.temperature, weatherData.feels_like, weatherData.timestamp]);

        } catch (error) {
            console.error(`Error fetching weather data for ${city}:`, error.message);
        }
    }
}
