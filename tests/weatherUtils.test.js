// weatherUtils.test.js
const {
    kelvinToCelsius,
    kelvinToFahrenheit,
    dailyWeatherSummary,
    checkTemperatureAlert,
} = require('../utils/weatherUtils');

describe('Temperature Conversion', () => {
    test('Convert Kelvin to Celsius', () => {
        expect(kelvinToCelsius(273.15)).toBeCloseTo(0, 5);
        expect(kelvinToCelsius(300)).toBeCloseTo(26.85, 5);
    });

    test('Convert Kelvin to Fahrenheit', () => {
        expect(kelvinToFahrenheit(273.15)).toBeCloseTo(32, 5);
        expect(kelvinToFahrenheit(300)).toBeCloseTo(80.33, 5);
    });
});

describe('Daily Weather Summary', () => {
    const weatherData = [
        { city: 'Delhi', main_condition: 'Clear', temperature: 30 },
        { city: 'Mumbai', main_condition: 'Rain', temperature: 28 },
        { city: 'Chennai', main_condition: 'Clouds', temperature: 29 },
        { city: 'Bangalore', main_condition: 'Clear', temperature: 26 },
        { city: 'Kolkata', main_condition: 'Rain', temperature: 27 },
        { city: 'Hyderabad', main_condition: 'Clear', temperature: 31 },
    ];

    test('Calculate daily weather summary correctly', () => {
        const summary = dailyWeatherSummary(weatherData);
        expect(summary.averageTemperature).toBeCloseTo(28.5, 1);
        expect(summary.maxTemperature).toBe(31);
        expect(summary.minTemperature).toBe(26);
        expect(summary.dominantCondition).toBe('Clear');
    });

    test('Return null for empty weather data', () => {
        expect(dailyWeatherSummary([])).toBe(null);
    });
});

describe('Alerting Thresholds', () => {
    test('Trigger alert when temperature exceeds threshold', () => {
        expect(checkTemperatureAlert(35, 30)).toBe(true);
        expect(checkTemperatureAlert(25, 30)).toBe(false);
    });
});
