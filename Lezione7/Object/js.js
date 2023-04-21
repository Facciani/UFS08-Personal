//ricette

class ricetta{
    constructor(title, servings, ingredients){
        this.title = title;
        this.servings = servings;
        this.ingredients = ingredients;
    }

    getAll() {
        let allIng = "";
        this.ingredients.forEach(element => {
            allIng += element + " - ";
        });

        return "Nome ricetta: " + this.title + " - Porzioni ricetta: " + this.servings + " - Ingredienti ricetta: " + allIng;
    }
}

function insertRicetta(event){
    event.preventDefault();
    const titolo = document.querySelector("#titolo").value;
    const porzioni = document.querySelector("#porzioni").value;
    const ingredienti = document.querySelector("#ingredienti").value;

    const ric = new ricetta(titolo,porzioni,ingredienti.split(";"));

    document.querySelector("#result").innerHTML = ric.getAll();
}

//libri

let arrayLibri = [];

class libro{
    constructor(title, author,  alreadyRead){
        this.title = title;
        this.author = author;
        this.alreadyRead = alreadyRead;
    }

    getLibro(){
        if(this.alreadyRead === true){
            return "Il libro " + this.title + " scritto da " + this.author + " è gia stato letto";
        }else{
            return "Il libro " + this.title + " scritto da " + this.author + " deve essere letto";
        }
    }
}

function insertLibro(event){
    event.preventDefault();
    const titolo = document.querySelector("#titoloL").value;
    const autore = document.querySelector("#autoreL").value;
    const letto = document.querySelector("#read");

    let obj = null;
    if(letto.checked){
        obj = new libro(titolo,autore,true);
    }else{
        obj = new libro(titolo,autore,false);
    }

    arrayLibri.push(obj);

    console.log(arrayLibri);

    document.querySelector("#resultL").innerHTML = "Libro inserito";
}

function getAllLibri(event){
    event.preventDefault();
    let allLibri = "";

    arrayLibri.forEach(element => {
        allLibri += element.getLibro() + '<br>';
    });

    document.querySelector("#allLibri").innerHTML = allLibri;
}