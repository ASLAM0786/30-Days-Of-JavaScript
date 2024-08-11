const apiKey = "20c148a67c2433f34836d8e7bd1dcf0c"; // Replace with your OpenWeatherMap API key
const lat = "30.715260"; // Replace with the latitude
const lon = "76.707770"; // Replace with the longitude
const exclude = "minutely,hourly,daily"; // Example of excluding parts

// const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${apiKey}`;
const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    //console.log("Weather Data:", data);
    const city = data.city.name;
    const currentWeather = data.list[0]; // Get the first 3-hour interval
    const temperatureK = currentWeather.main.temp;
    const temperatureC = temperatureK - 273.15; // Convert Kelvin to Celsius
    const temperatureF = (temperatureC * 9) / 5 + 32; // Convert Celsius to Fahrenheit
    const condition = currentWeather.weather[0].description;

    //* Update the webpage
    document.getElementById("city").textContent = `City: ${city}`;
    //     document.getElementById(
    //       "temp"
    //     ).textContent = `Temperature: ${temperature}°C`;
    document.getElementById(
      "temp"
    ).textContent = `Temperature: ${temperatureC.toFixed(
      2
    )}°C (${temperatureF.toFixed(2)}°F)`;
    document.getElementById(
      "condition"
    ).textContent = `Condition: ${condition}`;
  })
  .catch((error) => {
    console.error("Error fetching weather data:", error);
  });

// document
//   .getElementById("weather-form")
//   .addEventListener("submit", function (event) {
//     event.preventDefault(); //* Prevent the default form submission

//     const city = document.getElementById("city-name").value;
//     console.log("City:", city); // Check the value of the city input
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; // Use units=metric for Celsius

//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => {
//         // Check if the city was found
//         if (data.cod === 200) {
//           // Extract data
//           const cityName = data.name;
//           const temperature = data.main.temp;
//           const condition = data.weather[0].description;

//           // Update the webpage
//           document.getElementById("city").textContent = `City: ${cityName}`;
//           document.getElementById(
//             "temp"
//           ).textContent = `Temperature: ${temperature.toFixed(2)}°C`;
//           document.getElementById(
//             "condition"
//           ).textContent = `Condition: ${condition}`;
//         } else {
//           // Handle cases where the city is not found
//           document.getElementById("city").textContent = "City: Not found";
//           document.getElementById("temp").textContent = "Temperature: N/A";
//           document.getElementById("condition").textContent = "Condition: N/A";
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching weather data:", error);
//       });
//   });

document.addEventListener("DOMContentLoaded", function () {
  //const apiKey = "YOUR_API_KEY"; // Replace with your actual API key

  document
    .getElementById("weather-form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission

      const city = document.getElementById("city-name").value.trim();
      if (!city) {
        alert("Please enter a city name.");
        return;
      }

      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (data.cod === "200") {
            const forecastContainer = document.getElementById("forecast");
            forecastContainer.innerHTML = ""; // Clear any previous data

            // Filter forecast data to get one forecast per day
            const forecasts = data.list.filter((_, index) => index % 8 === 0); // One entry every 8 hours

            forecasts.forEach((forecast) => {
              const date = new Date(forecast.dt * 1000).toLocaleDateString();
              const temp = forecast.main.temp;
              const condition = forecast.weather[0].description;
              const icon = `http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`;

              // Create and append forecast item
              const forecastItem = document.createElement("div");
              forecastItem.className = "forecast-item";
              forecastItem.innerHTML = `
                                    <h3>${date}</h3>
                                    <img src="${icon}" alt="${condition}" />
                                    <p>${temp.toFixed(1)}°C</p>
                                    <p>${condition}</p>
                                `;
              forecastContainer.appendChild(forecastItem);
            });
          } else {
            document.getElementById("forecast").innerHTML =
              "City not found or data unavailable.";
          }
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });
    });
});
