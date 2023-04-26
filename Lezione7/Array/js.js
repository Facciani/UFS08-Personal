//es Calcolatrice
class calculator{
    
    diz = [];

    addMethod(calc, fun){
        this.diz.push({
            key:   calc,
            value: fun
        });   
    }

    calculate(fun1){
        fun1 = fun1.split(" "); 

        //let res = this.diz.find((item)=>{return item.key === fun1[1]});
        //return res.value(parseInt(fun1[0]),parseInt(fun1[2]));
        for (let index = 0; index < this.diz.length; index++) {
            if(this.diz[index].key === fun1[1]){
                return this.diz[index].value(parseInt(fun1[0]),parseInt(fun1[2]));
            }
        }
    }
}

calc();

function calc(){
    let powerCalc = new calculator;
    powerCalc.addMethod("*", (a, b) => a * b);
    powerCalc.addMethod("/", (a, b) => a / b);
    powerCalc.addMethod("**", (a, b) => a ** b);
    
    alert( powerCalc.calculate("7 * 8") ); 
    alert( powerCalc.calculate("4 / 2") ); 
    alert( powerCalc.calculate("2 ** 3") ); 
}


//es Shuffle Array

shuffleArray();

function shuffleArray(){
    let arr = [1, 2, 3];
    console.log(shuffle(arr));
}

function shuffle(arr){
    let shuffleArr = []

    while(arr.length != 0){
        let random = Math.floor(Math.random() * arr.length);
        

        shuffleArr.push(arr[random]);

        arr.splice(random,1);
    }

    return shuffleArr;
}


//es Eta media
getAVEta();

function getAVEta(){
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 29 };
    
    let arr = [ john, pete, mary ];
    
    console.log(getAverageAge(arr));
}

function getAverageAge(arr){
    let somma = 0;
    for (let i = 0; i < arr.length; i++) {
        somma += arr[i].age;
    }
    return somma / arr.length;
    
}