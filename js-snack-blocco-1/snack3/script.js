//Variabile
let dispari = [];
let count = 0;

//ciclo do-while
do{
    let num = parseInt(prompt('Inserisci numero'));
    if (num % 2 !== 0){
        dispari.push(num);
    }

    count++
}while(count !== 6);

console.log(dispari);
