console.log('Hi there');

const costoAlKm = 0.21

//Selezione DOM

const etàInput = document.getElementById ('passengerAge')
const kmInput= document.getElementById ('passengerKm')
const buttonEl = document.querySelector ('button')
const stampaOutput = document.getElementById ('output')

buttonEl.addEventListener ('click', function () {

    //al click prendi questi valori

    const età = Number (etàInput.value)
    const km = Number (kmInput.value)

    //calcolo prezzo biglietto

    let sconto = 0
    let biglietto = costoAlKm * km

    //calcolo sconto

if (età < 18) {
    sconto = biglietto * 0.20
    biglietto = biglietto - sconto
    console.log(biglietto.toFixed (2));
    
    
} else if (età >= 65) {
    sconto = biglietto * 0.40
    biglietto = biglietto - sconto
    console.log(biglietto.toFixed (2));
    
} else {
    console.log(biglietto.toFixed (2));
    
}
    stampaOutput.textContent = `Prezzo biglietto: € ${biglietto.toFixed(2)}`
    console.log('Prezzo biglietto:', biglietto.toFixed(2));
})
 




