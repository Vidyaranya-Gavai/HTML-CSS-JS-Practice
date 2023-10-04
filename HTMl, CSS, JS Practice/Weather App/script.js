const apikey = "c9e4f24147d7bdd902a5d4e0c10a2859";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".city").innerHTML = "";
        document.querySelector(".temp").innerHTML = "";
        document.querySelector(".humidity").innerHTML = "";
        document.querySelector(".wind").innerHTML = "";

    }else{
        document.querySelector(".error").style.display = "none";

        var data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp;
        document.querySelector(".humidity").innerHTML = data.main.humidity;
        document.querySelector(".wind").innerHTML = data.wind.speed;

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "Images/clouds.png";
        }else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "Images/clear.png";
        }else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "Images/rain.png";
        }else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "Images/drizzle.png";
        }else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "Images/mist.png";
        }
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})