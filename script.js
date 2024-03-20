const apiKey = "03505afb2e965361297d74bbc2726af8"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
const weatherIcon = document.querySelector(".Whether-icon")

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWhether(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".whether").style.display = "none"
    }

    else{

        document.querySelector(".error").style.display = "none";
        
        var data = await response.json()
    
        console.log(data)
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "clouds.png"
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "clear.png"
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "drizzle.png"
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "mist.png"
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "rain.png"
        }
        else if(data.weather[0].main == "Smoke"){
            weatherIcon.src = "clear.png"
        }

        document.querySelector(".whether").style.display = "block";
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWhether(searchBox.value);
})