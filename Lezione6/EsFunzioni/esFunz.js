//tellFortune - Veggente
let tellFortune = function (nFigli, nPartner, pGeo, tLavoro){
    return "Sarai una " + tLavoro + " in " + pGeo + " e sposato con " + nPartner + " con " + nFigli + " figli";
}

let tellFortuneWP = function (){
    document.querySelector('#resultVegg').innerHTML =  "Sarai una " + document.querySelector("input[name='tLavoro']").value + " in " + document.querySelector("input[name='pGeo']").value + " e sposato con " + document.querySelector("input[name='nPartner']").value + " con " + document.querySelector("input[name='nFigli']").value + " figli";
}

console.log(tellFortune(1,"Maggi","Italia","Cuoco"));
console.log(tellFortune(2,"Filippi","Libano","Avvocato"));
console.log(tellFortune(3,"Giovagnoli","Algeria","Giudice"));

//
console.log("/");
//

//calculateDogAge - Anni cane
let calculateDogAge = function (eCucciolo, tConv){
    if(Number.isInteger(eCucciolo)){
        return "Il tuo cagnolino ha "+(eCucciolo*tConv)+" anni in anni da cane!";
    }else{
        return "Non hai inserito una età corretta :(";
    }
}

let calculateDogAgeWP = function (){
    document.querySelector('#resulCane').innerHTML = "Il tuo cagnolino ha "+(document.querySelector('input[name="eCucciolo"]').value*document.querySelector('input[name="tConv"]').value)+" anni in anni da cane!";
}

console.log(calculateDogAge(10,7));
console.log(calculateDogAge(10,6));
console.log(calculateDogAge("Ciao",5));

//
console.log("/");
//

//calculateSupply - Fornitura a vita
let calculateSupply = function (eta, qtGiorno){
    const etaMAX = 80;
    if(eta < etaMAX){
        const day = (etaMAX - eta) * 365;
        return "Avrai bisogno di "+(Math.round(day * qtGiorno))+" per durare fino alla vecchiaia di "+etaMAX;
    }else{
        return "Attenzione, l'età da te inserita non è valida";
    }
}

console.log(calculateSupply(79,1));
console.log(calculateSupply(78,1.9));
console.log(calculateSupply(81,2));

//
console.log("/");
//

//calcCircumfrence/calcArea - Geometrizzatore

let calcCircumfrence = function(r){
    return "La circonferenza è " + ((r*2)*Math.PI);
}

let calcArea = function(r){
    return "La circonferenza è " + (Math.pow(r,2)*Math.PI);
}

let getRes = function(r){
    return "Circonferenza cerchio = "+calcCircumfrence(r)+" Area cerchio = " + calcArea(r);
}

console.log(getRes(5));
console.log(getRes(4));
console.log(getRes(3));

//
console.log("/");
//

//celsiusToFahrenheit/celsiusToFahrenheit - Convertitore Temperatura

let celsiusToFahrenheit = function (C){
    return ((C * 9/5) + 32)+"°F is "+C+"°C";
}

let fahrenheitToCelsius = function(F){
    return ((F - 32) * 5/9)+"°C is "+F+"°F";
}

console.log(celsiusToFahrenheit(15));
console.log(fahrenheitToCelsius(59));