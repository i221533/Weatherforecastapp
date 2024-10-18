<!-- Weather Dashboard -->

**Project Overview**

The Weather Dashboard is a responsive web application that provides real-time weather information, a 5-day weather forecast, and chatbot interaction. It allows users to search for weather updates in different cities using the OpenWeather API and interact with a chatbot powered by Google Generative AI via the Gemini API.

**Features**
Weather Widget: Displays real-time weather details (city name, temperature, and weather description).
Weather Charts: Visualize temperature trends and weather conditions using Bar, Doughnut, and Line charts (powered by Chart.js).

**5-Day Weather Forecast:**
 Displays a table with weather data for the next five days.
Chatbot Integration: Engage with a chatbot to ask weather-related questions or other prompts using the Gemini API.
Dynamic Backgrounds: Changes background based on weather conditions (e.g., sunny, cloudy, rainy).
Loader: Provides a loading animation while the weather data is being fetched.


**Technologies Used**
HTML/CSS: For structuring and styling the user interface, including responsive design.
JavaScript: For handling user interactions, fetching data from APIs, and updating the UI dynamically.
Tailwind CSS: For fast and responsive styling.
Chart.js: For creating visual data representations of weather conditions.
OpenWeather API: To fetch real-time weather data.
Google Generative AI (Gemini API): For chatbot functionality.

**How to Use**
Search for a City: Enter a city name in the search bar and click "Get Weather" to view current weather data and charts.
View the 5-Day Forecast: Navigate to the "Tables" section to see the weather forecast for the next five days.
Interact with the Chatbot: Click on the "Chat with Bot" button to ask weather-related questions or general prompts. If the prompt involves weather, the bot will request the city name and fetch relevant weather details.

**File Structure**
index.html: The main file for the dashboard interface and weather widget.
Tables.html: Contains the 5-day weather forecast table and chatbot functionality.
dashboard.js: Handles fetching weather data and updating the weather widget.
pagination.js: Manages pagination for weather forecast tables.
tableforecast.js: Handles the logic for fetching and displaying the 5-day weather forecast.
chart.js: Contains the code for generating weather charts using Chart.js.

**APIs Used**
OpenWeather API: Fetches current and forecast weather data.
Google Generative AI (Gemini API): Integrates a chatbot for enhanced user interaction.
Installation & Setup


**Deployment:**

Created a github reposiory and pushed the code to github 
Marked index.html as root file 

**Live Link:**

*https://i221533.github.io/Weatherforecastapp/*


**Future Enhancements**
Expand chatbot functionality with more natural language interactions.
Add more detailed weather metrics (e.g., humidity, wind speed).
Improve styling and animations for a better user experience