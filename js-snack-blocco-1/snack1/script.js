//Snack1 blocco 1

//Variabili
const firstWord = prompt('Digita la prima parola');
const secondWord = prompt('Digita la seconda parola')


if(firstWord.length > secondWord.length){
    console.log(`${firstWord} è più lunga di ${secondWord}`);
}else if(firstWord.length < secondWord.length){
    console.log(`${secondWord} è più lunga di ${firstWord}`)
}else{
    console.log('Le due parole hanno lo stesso numero di caratteri')
}