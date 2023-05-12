const form = document.querySelector('form');
const input = document.querySelector('input[id="search"]');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(input.value === ""){
        const error = document.createElement("p");
        error.textContent = "Inserire un nome prima di proseguire";
        document.body.appendChild(error);
    }else{
        getAmiibo(input.value);
    }
});

const getAmiibo = async (value) => {
    let response = await fetch(`https://amiiboapi.com/api/amiibo/?character=${value}`);
    if(response.status === 404){
        const error = document.createElement("p");
        error.textContent = "Il nome da lei inserito non risulta esistente";
        document.body.appendChild(error);
    }else{
        const data = await response.json();
        if (data?.amiibo) {
            const { amiibo } = data;
            console.log(amiibo);
            setAmiiboImage(amiibo);
        }
    }
}

const setAmiiboImage = (amiibo) => {
    console.log(2, amiibo)
    if (document.querySelector('img')) {
        const images = document.querySelectorAll('img')
        images.forEach((element) => {
            element.remove()
        })
    }
    if (document.querySelector('p')) {
        const p = document.querySelector('p')
        p.remove()
    }
    amiibo.forEach((element) => {
        const imageElement = document.createElement('img')
        imageElement.src = element.image
        imageElement.alt = element.name
        document.body.appendChild(imageElement)
    })
}
