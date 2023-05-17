const tip_buttons = document.querySelectorAll(".tip-button");

const billNumber = document.querySelector("#bill");
const peopleNumber = document.querySelector("#people");

const errorPeople = document.querySelector(".errorPeople");

const resultXPerson = document.querySelector("#resultXPerson");
const resultXTotal = document.querySelector("#resultXTotal");

const tipP = document.querySelector("#tipP");

let tip = 0;
let people = 0;
let bill = 0;

let total = 0;
let totalXPerson = 0;

tip_buttons.forEach(element => {
    element.addEventListener('click', (event) => {
        tip = event.target.value;
        console.log(tip);
    });
});

billNumber.addEventListener('input', (event) => {
    bill = event.target.value;
    calculateTip();
    console.log(bill);
});


peopleNumber.addEventListener('input', (event) => {
    people = event.target.value;

    if(people == 0){
        errorPeople.style.display = "block";
    }else{
        errorPeople.style.display = "none";
    }
    

    calculateTip();
    console.log(people);
});


tipP.addEventListener('input', (event) => {
    tip = event.target.value;
    calculateTip();
    console.log(tip);
});

window.addEventListener('load', () => {
    calculateTip();
})

const calculateTip = () => {
    if(bill === 0 || tip === 0 || people === 0){
        resultXTotal.textContent = "Niente selezionato";
    }else{
        total = ((bill/100)*tip);
        resultXTotal.textContent = total;
        totalXPerson = total/people;
        resultXPerson.textContent = totalXPerson;
    }
};