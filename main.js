console.log('Hi there');

const costoAlKm = 0.21

//Selezione DOM

const etàInput = document.getElementById ('passengerAge')
const kmInput= document.getElementById ('passengerKm')
const buttonEl = document.querySelector ('button')
const stampaOutput = document.getElementById ('output')

buttonEl.addEventListener ('click', function () {

    const età = Number (etàInput.value)
    const km = Number (kmInput.value)

    //calcolo prezzo biglietto

    let sconto = ""
    let biglietto = costoAlKm * passengerKm

if (età < 18) {
    sconto = biglietto * 0.20
    biglietto = biglietto - sconto
    console.log(biglietto);
    
    
} else if (età > 65) {
    sconto = biglietto * 0.40
    biglietto = biglietto - sconto
    console.log(biglietto);
    
} else {
    console.log(biglietto);
    
}
    
    console.log('Prezzo biglietto:', biglietto.toFixed(2));
})
 




