// weatherUtils.js

// Temperature conversion functions
function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

function kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * (9/5) + 32;
}

// Daily summary calculation
function dailyWeatherSummary(data) {
    if (!data.length) return null;

    const total = data.reduce((acc, curr) => acc + curr.temperature, 0);
    const maxTemp = Math.max(...data.map(d => d.temperature));
    const minTemp = Math.min(...data.map(d => d.temperature));
    const dominantCondition = data.reduce((acc, curr) => {
        acc[curr.main_condition] = (acc[curr.main_condition] || 0) + 1;
        return acc;
    }, {});
    const mostCommonCondition = Object.keys(dominantCondition).reduce((a, b) => 
        dominantCondition[a] > dominantCondition[b] ? a : b
    );

    return {
        averageTemperature: total / data.length,
        maxTemperature: maxTemp,
        minTemperature: minTemp,
        dominantCondition: mostCommonCondition
    };
}

// Alert threshold check
function checkTemperatureAlert(temperature, threshold) {
    return temperature > threshold;
}

module.exports = {
    kelvinToCelsius,
    kelvinToFahrenheit,
    dailyWeatherSummary,
    checkTemperatureAlert,
};
