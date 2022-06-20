let celcius = document.getElementById("celcius");
let fahrenheit = document.getElementById("fahrenheit");
let kelvin = document.getElementById("kelvin");

console.log(celcius)
function celToFah(){

    let output = (parseFloat(celcius.value) * 9 / 5) + 32;
    let outputKelvin = (parseFloat(celcius.value) + 273.15)
    fahrenheit.value = parseFloat(output).toFixed(2);
    kelvin.value = parseFloat(outputKelvin).toFixed(2);
}

function fahToCel(){

    let output = (parseFloat(fahrenheit.value) - 32 ) * 5 / 9;
    let outputKelvin = (parseFloat(fahrenheit.value) - 32) * 5 / 9 + 273.15;
    celcius.value = parseFloat(output).toFixed(2);
    kelvin.value = parseFloat(outputKelvin).toFixed(2);
}

function kelToAll(){

    let outputCelcius = (parseFloat(kelvin.value) - 273.15);
    let outputFahrenheit = (parseFloat(kelvin.value) - 273.15) * 9 / 5 + 32;
    celcius.value = parseFloat(outputCelcius).toFixed(2);
    fahrenheit.value = parseFloat(outputFahrenheit).toFixed(2);
}