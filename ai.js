const apiKey = '16404f8dabc97b6327ee9e9548da2498'; 
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBtn=document.querySelector('#search-btn');
const searchBox = document.querySelector('#city-input');
const cityName = document.querySelector('#city-name');
const temperature = document.querySelector('#temperature');
const feels_like = document.querySelector('#feels_like');
const humidity = document.querySelector('#humidity');

async function checkWeather(city) {
  try {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    const data = await response.json();
    console.log(data);

    cityName.textContent =`City : ${city}`;
    temperature.textContent = `Temperature: ${data.main.temp}°C`;
    feels_like.textContent=`Feels like :${data.main.feels_like}°C`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;


    // console.log("Feels like :", data.main.feels_like);
    // console.log("Humidity :", data.main.humidity);
    // console.log("Current temp :", data.main.temp);
    // console.log("Maximum temp :",data.main.temp_max);
    // console.log("Minimum temp :", data.main.temp_min);

  } catch (error) {
    console.error('Error fetching weather data:', error);
    alert('Error fetching weather data. Please try again.');
  }
}

searchBtn.addEventListener('click', () => {
  const city = searchBox.value.trim();
  if (city) {
    checkWeather(city);
  } else {
    alert('Please enter a city name');
  }
});