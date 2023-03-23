// Nel mondo oggi ci sono queste temperature per Milano, Bangkok e Los Angeles in gradi Celsius.
const MilanCelsius = 20
const BangkokCelsius = 35
const LosAngelesCelsius = 15

var list = new Array(20,35,15);

// 1. Scrivi il codice che converte le temperature in gradi Fahrenheit e Kelvin
// 2. Aggiungi il valore delle varie temperature a ogni elemento dell'HTML che trovi con l'id temperatureItaly, temperatureThailand, temperatureUSA
// 3. Le temperature mostrate nell'HTML dovranno avere anche il relativo simbolo di misura (°C, °F, K)
// 4. Arrotonda per eccesso le temperature in gradi Fahrenheit e Kelvin (hint: usa la funzione Math.ceil())
// 5. Metti in evidenza con colori diversi le temperature nei vari gradi
// 6. Implementa al click della città il redirect sul sito della meteo di quella città (esempio: https://www.meteo.it/)
// ADVANCED
// 7. aggiungi un'immagine di sfondo che rappresenti la città selezionata
// 8. aggiungi un menù a tendina con cui mostrare in base alla scelta la temperatura in gradi Celsius, Fahrenheit o Kelvin


var imgMilano = new Image();
imgMilano.src ='milano.png';
imgMilano.width = 200;
imgMilano.height = 100;
document.getElementById('temperatureItaly').appendChild(imgMilano);

var imgBangkok = new Image();
imgBangkok.width = 200;
imgBangkok.height = 100;
imgBangkok.src ='bangkok.png';

document.getElementById('temperatureThailand').appendChild(imgBangkok);

var imgLosAngeles = new Image();
imgLosAngeles.width = 200;
imgLosAngeles.height = 100;
imgLosAngeles.src ='losangelse.png';
document.getElementById('temperatureUsa').appendChild(imgLosAngeles);



function getMilano(){
    window.location = ('https://www.meteo.it/meteo/milano-15146');
}

function getBangkok(){
    window.location = ('https://www.meteo.it/meteo/bangkok-2007845');
}

function getLosAngeles(){
    window.location = ('https://www.meteo.it/meteo/los-angeles-2002180');
}

var statC = true;
function showC(){
    if(statC){
        for (let index = 0; index < document.getElementsByClassName("temperatureCelsius").length; index++){
            document.getElementsByClassName("temperatureCelsius")[index].style.visibility = "visible";
        }
        statC = false;
    }else{
        for (let index = 0; index < document.getElementsByClassName("temperatureCelsius").length; index++){
            document.getElementsByClassName("temperatureCelsius")[index].style.visibility = "hidden";
        }
        statC = true;
    } 
}

var statK = true;
function showK(){
    if(statK){
        for (let index = 0; index < document.getElementsByClassName("temperatureKelvin").length; index++){
            document.getElementsByClassName("temperatureKelvin")[index].style.visibility = "visible";
        }
        statK = false;
    }else{
        for (let index = 0; index < document.getElementsByClassName("temperatureKelvin").length; index++){
            document.getElementsByClassName("temperatureKelvin")[index].style.visibility = "hidden";
        }
        statK = true;
    } 
}

var statF = true;
function showF(){
    if(statF){
        for (let index = 0; index < document.getElementsByClassName("temperatureFarenhait").length; index++){
            document.getElementsByClassName("temperatureFarenhait")[index].style.visibility = "visible";
        }
        statF = false;
    }else{
        for (let index = 0; index < document.getElementsByClassName("temperatureFarenhait").length; index++){
            document.getElementsByClassName("temperatureFarenhait")[index].style.visibility = "hidden";
        }
        statF = true;
    } 
}

for (let index = 0; index < document.getElementsByClassName("temperatureKelvin").length; index++) {
    document.getElementsByClassName("temperatureKelvin")[index].innerHTML = fromCelsiusToKelvin(list[index]);  
    document.getElementsByClassName("temperatureKelvin")[index].style.color = "red";
    document.getElementsByClassName("temperatureKelvin")[index].style.visibility = "hidden";
}

for (let index = 0; index < document.getElementsByClassName("temperatureFarenhait").length; index++) {
    document.getElementsByClassName("temperatureFarenhait")[index].innerHTML = fromCelsiusToFahrenheit(list[index]);  
    document.getElementsByClassName("temperatureFarenhait")[index].style.color = "green";
    document.getElementsByClassName("temperatureFarenhait")[index].style.visibility = "hidden";
}

for (let index = 0; index < document.getElementsByClassName("temperatureCelsius").length; index++) {
    document.getElementsByClassName("temperatureCelsius")[index].innerHTML = getCelsius(list[index]);  
    document.getElementsByClassName("temperatureCelsius")[index].style.color = "blue";
    document.getElementsByClassName("temperatureCelsius")[index].style.visibility = "hidden";
}




/*document.getElementById("temperatureItaly").getElementsByClassName("temperatureKelvin")[0].innerHTML = fromCelsiusToKelvin(MilanCelsius);
document.getElementById("temperatureItaly").getElementsByClassName("temperatureFarenhait")[0].innerHTML = fromCelsiusToFahrenheit(MilanCelsius);
document.getElementById("temperatureItaly").getElementsByClassName("temperatureCelsius")[0].innerHTML = getCelsius(MilanCelsius);   

document.getElementById("temperatureThailand").getElementsByClassName("temperatureKelvin")[0].innerHTML = fromCelsiusToKelvin(BangkokCelsius);
document.getElementById("temperatureThailand").getElementsByClassName("temperatureFarenhait")[0].innerHTML = fromCelsiusToFahrenheit(BangkokCelsius);
document.getElementById("temperatureThailand").getElementsByClassName("temperatureCelsius")[0].innerHTML = getCelsius(BangkokCelsius);

document.getElementById("temperatureUsa").getElementsByClassName("temperatureKelvin")[0].innerHTML = fromCelsiusToKelvin(LosAngelesCelsius);
document.getElementById("temperatureUsa").getElementsByClassName("temperatureFarenhait")[0].innerHTML = fromCelsiusToFahrenheit(LosAngelesCelsius);
document.getElementById("temperatureUsa").getElementsByClassName("temperatureCelsius")[0].innerHTML = getCelsius(LosAngelesCelsius);*/

function getCelsius(celsius){
    return (Math.ceil(celsius) + " °C");
}

function fromCelsiusToFahrenheit(celsius){
    return (Math.ceil(((celsius * 9/5) + 32)) + " °F");
}

function fromCelsiusToKelvin(celsius){
    return (Math.ceil((celsius + 273.15)) + " °K");
}

