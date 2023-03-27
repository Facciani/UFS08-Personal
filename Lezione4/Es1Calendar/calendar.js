const select = document.querySelector('select')
const list = document.querySelector('#month-view')
const h1 = document.querySelector('h1')


let selectColor = document.createElement("select");

let option1 = document.createElement("option");
option1.value = 'red';
option1.text = "Rosso";
selectColor.add(option1)

let option2 = document.createElement("option");
option2.value = 'blue';
option2.text = "Blu";
selectColor.add(option2)

let option3 = document.createElement("option");
option3.value = 'green';
option3.text = "Verde";
selectColor.add(option3)
document.body.appendChild(selectColor);

selectColor.addEventListener('change', function (event){
  document.body.style.backgroundColor = event.target.value;
})


let year = new Date().getFullYear();

function createCalendar(days, choice) {
  list.innerHTML = '';
  h1.textContent = choice
  let backcolor = randomColor();
  for (let i = 1; i <= days; i++) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(i));
    li.style.backgroundColor = backcolor;
    list.appendChild(li);
  }
}

function randomColor(){
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let bgColor;
  return bgColor = "rgb(" + x + "," + y + "," + z + ")";
}

select.addEventListener('change', function (event) {
  console.log('Change event fired!', event.target.value)
  let month = event.target.selectedIndex + 1;+
  createCalendar(daysInMonth(month,year),event.target.value);
})

function daysInMonth (month, year) {
  return new Date(year, month, 0).getDate();
}

// Tramite l'elemento select scegliete il mese e mostrare i giorni del mese scelto e il nome del mese in testa alla pagina
// Stilare ogni mese in maniera diversa (es. colori, sfondi, ecc.)
// Aggiungete un bottone che permette di cambiare il colore di sfondo della pagina
