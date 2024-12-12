
document.addEventListener('DOMContentLoaded', () => {
	const options = {
	  method: 'GET',
	  headers: {
		'X-RapidAPI-Key': '2c92341be7msh75ef3160beec172p15af0bjsn38945300c2ba',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	  }
	};

	const getWeather = (city) => {
	  const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
	  const cityName = document.getElementById('cityName');
	  if (cityName) {
		cityName.innerHTML = city;
	  }
  
	  async function fetchData() {
		try {
		  const response = await fetch(url, options);
		  const result = await response.json();
		  console.log(result);
  
		  const cloud_pct = document.getElementById('cloud_pct');
		  if (cloud_pct) {
			cloud_pct.innerHTML = result.cloud_pct;
		  }
  
		  const temp = document.getElementById('temp');
		  if (temp) {
			temp.innerHTML = result.temp;
		  }
  
		  const feels_like = document.getElementById('feels_like');
		  if (feels_like) {
			feels_like.innerHTML = result.feels_like;
		  }
  
		  const humidity = document.getElementById('humidity');
		  if (humidity) {
			humidity.innerHTML = result.humidity;
		  }
  
		  const min_temp = document.getElementById('min_temp');
		  if (min_temp) {
			min_temp.innerHTML = result.min_temp;
		  }
  
		  const max_temp = document.getElementById('max_temp');
		  if (max_temp) {
			max_temp.innerHTML = result.max_temp;
		  }
  
		  const wind_speed = document.getElementById('wind_speed');
		  if (wind_speed) {
			wind_speed.innerHTML = result.wind_speed;
		  }
  
		  const wind_degree = document.getElementById('wind_degree');
		  if (wind_degree) {
			wind_degree.innerHTML = result.wind_degrees;
		  }
		} catch (error) {
		  console.error(error);
		}
	  }
  
	  fetchData();
	}
  
	const Submit = document.getElementById("submit");
	const cityInput = document.getElementById("city");
  
	Submit.addEventListener("click", (e) => {
	  e.preventDefault();
	  getWeather(cityInput.value);
	});
  
	getWeather("Delhi");
});
