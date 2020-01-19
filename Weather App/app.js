//Select Element
const notificationElement = document.querySelector('.notification');
const iconElement = document.querySelector('.weather-icon');
const tempElement = document.querySelector('.temperature-value p');
const descElement = document.querySelector('.temperature-description p');
const locationElement = document.querySelector('.location p');


//App Data
const weather ={}
console.log(weather);

weather.temperature = {
    unit : "celsius"
}

const KELVIN = 273;
// API KEY
const key = "82005d27a116c2880c8f0fcb866998a0";


function getWeather(latitude, longitude){
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
    
    fetch(api).then((response)=>{
        let data = response.json()
        console.log(data);
        return data
        
    }).then((data) =>{
        weather.temperature.value = Math.floor(data.main.temp - KELVIN)
        // console.log(weather.temperature.value);
        console.log(data);

        weather.description = data.weather[0].description;
        weather.iconId = data.weather[0].icon;
        weather.city = data.name;
        weather.country = data.sys.country
           
    }).then(()=>{
        displayWeather();
    })
}
getWeather()

//Check If Browser Support Geolocation
if('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(setPosition, showError);

}
else{
    notificationElement.style.display = 'block'
    notificationElement.innerHTML = "<p>Browser Doesn't Support Geolocation.</p>"
}

function displayWeather() {

    iconElement.innerHTML = `<img src='icons/${weather.iconId}.png' />`;
    
    tempElement.innerHTML = `${weather.temperature.value} ° <span>C</span>`;
    
    descElement.innerHTML = weather.description;
    
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}


function setPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    getWeather(latitude, longitude);
}

function showError(error) {
    notificationElement.style.display = "block"
}

// listening event to change celsius to fahrenheit
function celsiusToFahrenheit(temperature){
    return (temperature * 9/5) + 32;
}

tempElement.addEventListener('click', function(){
    if(weather.temperature.value === undefined) return;  //if the condition is true the function will return the value and will prevent to run further
    if(weather.temperature.unit === 'celsius'){
        let fahrenheit = celsiusToFahrenheit(weather.temperature.value)
        fahrenheit = Math.floor(fahrenheit);

        tempElement.innerHTML = `${fahrenheit}° <span>F</span>`;
        weather.temperature.unit = 'fahrenheit'
    }
    else{
        tempElement.innerHTML = `${weather.temperature.value}° <span>C</span>`;
        weather.temperature.unit = 'celsius';
    }
})