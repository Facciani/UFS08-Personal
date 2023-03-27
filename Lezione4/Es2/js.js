// Race day registration
// Here’s how our registration works. There are adult runners (over 18 years of age) and youth runners (under 18 years of age). They can register early or late.
// Runners are assigned a race number and start time based on their age and registration.

// Race number:

// Early adults receive a race number at or above 1000.
// All others receive a number below 1000.
// Start time:

// Adult registrants run at 9:30 am or 11:00 am.
// Early adults run at 9:30 am.
// Late adults run at 11:00 am.
// Youth registrants run at 12:30 pm (regardless of registration).

// But we didn’t plan for runners that are exactly 18! We’ll handle that by the end of the project.

// 1. crea nell'html un elemento di tipo input di tipo testo per poter inserire il nome del runner, e l'età del runner, e un bottone di conferma
// 2. al click sul bottone di conferma, si deve mostrare un alert con il numero di partenza e l'orario di partenza del runner



function go(){
    let nome = document.getElementById('nome').value;
    let eta = document.getElementById('eta').value;

    let result;

    if(eta >= 18){
        result = "Numero = " + (Math.floor(Math.random() * (2000 - 1000) + 1000)) + " Partenza: 9:30";
    }else{
        result = "Numero = " + (Math.floor(Math.random() * (999 - 0) + 0)) + " Partenza: 12:30";
    }

    alert(result);
}
