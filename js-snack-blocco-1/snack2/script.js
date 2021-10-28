//Snack 2 Blocco 2

//Variabile
let somma = 0;
let count= 0;

//ciclo for

for (let i = 0; i < 5; i++){
    const nuovoNum = parseInt(prompt(`Scrivi il tuo numero`));
    somma += nuovoNum;
}

console.log(`La somma dei numeri inseriti è ${somma}`);

//ciclo while
/**
 * 
while(count < 5){
    const nuovoNum = parseInt(prompt(`Scrivi il tuo numero`));
    somma += nuovoNum;

    count++;
}

console.log(`La somma dei numeri inseriti è ${somma}`); 
 */