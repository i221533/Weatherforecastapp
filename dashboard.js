const apiKey = 'cfb5f8605cd9c4aef4d7f5dbc3cb8887';  // Replace with your OpenWeather API key
const cityNameElement = document.getElementById('city-name');
const weatherDescriptionElement = document.getElementById('weather-description');
const temperatureElement = document.getElementById('temperature');
const loader = document.querySelector('.loader');
const errorMessage =document.getElementById("errormsg")
// Function to fetch weather data
async function fetchWeatherData(city) {
    try {
        showLoader();  // Show loader before starting the fetch
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`);
        const data = await response.json();

        if (response.ok) {
            updateWeatherWidget(data);
            updateCharts(data);
        } 
        else if(data.message==="city not found")
        {
                        errorMessage.innerText="Invalid City name Please input Correct City Again"
                        setInterval(()=>{
                            errorMessage.innerText=''
                        },3000)
        }
        else {
            console.error("Error fetching weather data:", data.message);
        }
    } catch (error) {
        console.error("Fetch error:", error);
    } finally {
        hideLoader();  // Hide loader once the fetch is complete (whether success or failure)
    }
}

// Function to update the weather widget and background
function updateWeatherWidget(data) {
    const city = data.city.name;
    const description = data.list[0].weather[0].description;
    const temperature = data.list[0].main.temp;

    cityNameElement.textContent = city;
    weatherDescriptionElement.textContent = description;
    temperatureElement.textContent = `${temperature}°C`;

    // Dynamic background change based on weather
    const body = document.body;
    body.classList.remove('weather-bg-clouds', 'weather-bg-rain', 'weather-bg-sunny');

    if (description.includes('cloud')) {
        body.classList.add('weather-bg-clouds');
    } else if (description.includes('rain')) {
        body.classList.add('weather-bg-rain');
    } else if (description.includes('clear sky')) {
        body.classList.add('weather-bg-sunny');
    } else {
        body.classList.add('default-background');
    }
}

// Show loader function
function showLoader() {
    loader.style.display = 'flex';  // Display loader (flex to center it)
}

// Hide loader function
function hideLoader() {
    loader.style.display = 'none';  // Hide loader after content is loaded
}

// Fetch weather data on load (default city: London)
fetchWeatherData('London');
