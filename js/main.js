
/*

const eta= parseInt(prompt('Inserire età'));
const distanza= parseInt(prompt('Inserire distanza'));
const prezzo= 0.21;
const scontoMinori=20;
const scontoOver=40;
const prezzoBiglietto=(distanza * prezzo); 



if(eta < 18) {
    // calcolo 20%
    let sconto = prezzoBiglietto * 20  / 100; 
    let prezzoFinale = prezzoBiglietto - sconto;
    let prezzoFinaleFormattato =prezzoFinale.toFixed(2);
    alert(prezzoFinaleFormattato);
} else if (eta > 65) {
    // calcolo 40%

    let sconto = prezzoBiglietto * 40  / 100; 
    let prezzoFinale = prezzoBiglietto - sconto;
    let prezzoFinaleFormattato =prezzoFinale.toFixed(2);
    alert(prezzoFinaleFormattato);
} else {
    // nessuna operazione
    alert(prezzoBiglietto);
}


/* if( età >= 18 && età <= 65);{

    alert('prezzobiglietto');

} else if (età < 18){
    
    alert('prezzobiglietto - scontominori');
} else if (eta > 65) {

} */
