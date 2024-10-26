# Weather App 🌦️

A stylish and user-friendly weather application that fetches real-time weather data for multiple cities. This app displays temperature, humidity, air quality, and other weather details with an elegant, Microsoft-like design.

---

## 🌟 Features
- Real-time weather updates for multiple cities
- Temperature conversions between Celsius and Fahrenheit
- Daily summaries including average, max, and min temperatures
- Configurable alert thresholds for extreme weather conditions
- Responsive and visually appealing UI

---

## 📁 File Structure

Weather-App/
├── views/
│   └── index.ejs  # Main HTML template for displaying weather
├── public/
│   └── styles.css  # Custom styling for the app
├── src/
│   ├── app.js  # Main server file
│   └── weatherUtils.js  # Utility functions for fetching and processing weather data
└── tests/
    └── weatherUtils.test.js  # Unit tests for weather utilities

## 🚀 Getting Started
Prerequisites
Node.js and npm
A valid API key from OpenWeather

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/username/weather-app.git
   cd weather-app
2. **Install dependencies:**
   ```bash
      npm install

3. **Set up environment variables:** -Create a .env file in the root directory -and add your OpenWeather API key:
      API_KEY=your_openweather_api_key
      DB_USER=postgres
      DB_PASSWORD=your_password


4. **Run the server:**
    ```bash
      npm start
5. **Visit the app in your browser:**
     http://localhost:3000
     
     
## 💻 Technologies Used
 -  Frontend: HTML, CSS, EJS (Embedded   JavaScript templates)

 -  Backend: Node.js, Express.js

 -  APIs: OpenWeather API

 -  Database: PostgreSQL

 ## 🌐 API Reference

 -  OpenWeather API: https://openweathermap.org/api


 ## Enjoy using the Weather App! 🌤️
 
### Notes
Replace `your-email@example.com`, `username`, and `your_openweather_api_key` with your own information. This setup improves clarity, with consistent formatting and markdown syntax, making it easier to read and navigate.
