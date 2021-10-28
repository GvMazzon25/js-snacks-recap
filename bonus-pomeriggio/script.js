
/** Ogni volta che si clicca un bottone, il nostro programma chiederà un numero di 4 cifre all’utente.
Se l’utente ha inserito un numero corretto, allora il programma calcolerà la somma e le media di tutte 
le cifre che lo compongono stampandola nel DOM, altrimenti ripeterà la richiesta di inserimento finché
 non avrà inserito un numero corretto. */

 //Variabili
 const accessBtn = document.querySelector('.btn');  
 accessBtn.addEventListener('click', function(){
    let click = prompt('inserisci numero di 4 cifre');
    let somma = 0;
    let media = 0;

    while(click.length != 4 || isNaN(click)){
        alert('inserisci 4 cifre');
        click = prompt('Inserisci un numero di 4 cifre');
    }    
   
   for(let i = 0; i < click.length; i++){
       somma += parseInt(click[i]);
   }
   media = somma / click.length;

   console.log(somma, media)
})

 



