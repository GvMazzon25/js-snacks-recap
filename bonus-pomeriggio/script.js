
/** Ogni volta che si clicca un bottone, il nostro programma chiederà un numero di 4 cifre all’utente.
Se l’utente ha inserito un numero corretto, allora il programma calcolerà la somma e le media di tutte 
le cifre che lo compongono stampandola nel DOM, altrimenti ripeterà la richiesta di inserimento finché
 non avrà inserito un numero corretto. */

 //Variabili
 const accessBtn = document.querySelector('.btn');
 let click = ('');
 let result = ('')
 //Ciclo do-whlile

 while(isNaN){
    accessBtn.addEventListener('click', function(){
        click = prompt('Digita un numero');
        if(click.length === 4){
            click[0] + click[1] + click[2] + click[3];
        }
    })
 }    

