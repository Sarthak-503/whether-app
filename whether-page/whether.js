const apiKey = "";
    const cityBox = document.querySelector(".city-name");
    const weatherIcon = document.querySelector(".weather-icon");
    async function checkwhether(city) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
        const response = await fetch (apiUrl);
        var data = await response.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        if(data.weather[0].main=="Clouds"){
            weatherIcon.src = "../assets/images/clouds.png";
        } else if(data.weather[0].main=="Clear"){
            weatherIcon.src = "../assets/images/clear.png";
        } else  if(data.weather[0].main=="rain"){
            weatherIcon.src = "../assets/images/rain.png";
        } else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src = "../assets/images/drizzle.png";
        } else if(data.weather[0].main=="Mist"){
            weatherIcon.src = "../assets/images/mist.png";
        } 
    }
    checkwhether("Toronto");

    const cityElements = document.querySelectorAll(".city-name");
    cityElements.forEach(city => {
        city.addEventListener("click", () => {
            const cityName = city.textContent;
            checkwhether(cityName);
        });
    });