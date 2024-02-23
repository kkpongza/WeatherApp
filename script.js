const sButton = document.getElementById('search-button');
const textfield = document.getElementById('text-input');
const weatherIcon = document.querySelector(".weather-icon");
const humidIcon = document.querySelector('.humid-icon');
const windIcon = document.querySelector('.wind-icon');
const weatherCon = document.querySelector('.weather');


const apiKey = '0d9101448da3669c6d77c9f035a7d833'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather'

async function checkWeather(){
   
    const city = document.getElementById('text-input').value
    //fetch api
    const response = await fetch(apiUrl + `?q=${city}` + '&units=metric' + `&appid=${apiKey}`);
    //change to json
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°c'
    document.querySelector(".humidity").innerHTML = data.main.humidity + '%'
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + ' km/hr'
    textfield.value = ""
    

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = 'images/clouds.png';
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src = 'images/clear.png';
    }else if(data.weather[0].main == "Rain") {
        weatherIcon.src = 'images/rain.png';
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = 'images/drizzle.png';
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src = 'images/mist.png';
    }

    weatherCon.style.display = 'block'

    //update image
    // var img = document.createElement("img");
    // img.src = 
    // weatherIcon.value = img;
}

sButton.addEventListener('click', () => {
    checkWeather();
});