//Snack 2 Blocco 2

//Variabili e Array

const nameList = ['Giorgio ','Martina ','Giuseppe ','Davide ','Massimo ','Federica ','Alessandra '];
const surnameList = ['Verdi','Russo','Rossi','Pesarin','Crepaldi','Di Trapani','Avellone'];

let invitedList = [''];

let completeName =('')

const startBtn = document.querySelector('.btn');

startBtn.addEventListener('click', function() {
    num1 = Math.round(Math.random() * 7);
    console.log(num1);
    num2 = Math.round(Math.random() * 7);
    console.log(num2)

    completeName = nameList[num1] + '' + surnameList[num2];
    invitedList.push(completeName);
    console.log(completeName);
})

alert(`Hai invitato ${completeName}`);


