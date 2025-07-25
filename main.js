console.log('Hi there');

const costoAlKm = 0.21

//Selezione DOM

const fullNameEl = document.getElementById ('fullName')
const passengerAgeEl = document.getElementById ('passengerAge')
const passengerKmEl= document.getElementById ('passengerKm')
const buttonEl = document.querySelector ('button')
const outputEl = document.getElementById ('output')
const formEl = document.querySelector ('form')

formEl.addEventListener ('submit', function (event) {

    event.preventDefault ()

    //al click prendi questi valori

    const passengerAgeValue = Number (passengerAgeEl.value)
    const passengerKmValue = Number (passengerKmEl.value)
    const fullNameValue = fullNameEl.value

    console.log(passengerAgeValue, passengerKmValue, fullNameValue);
    

    //calcolo prezzo biglietto

    let sconto = 0
    let biglietto = costoAlKm * passengerKmValue
    let Offerta = 'Biglietto Standard'

    //calcolo sconto

if (passengerAgeValue === 1) {
    sconto = biglietto * 0.20
    biglietto = biglietto - sconto
    Offerta = 'Sconto Minorenni'
    console.log(biglietto.toFixed (2));
    
    
} else if (passengerAgeValue === 3) {
    sconto = biglietto * 0.40
    biglietto = biglietto - sconto
    Offerta = 'Sconto Over 65'
    console.log(biglietto.toFixed (2));
    
} else {
    Offerta = 'Biglietto Standard'
    console.log(biglietto.toFixed (2));
    
}
    //outputEl.innerHTML = `Prezzo biglietto: € ${biglietto.toFixed(2)}`
    console.log('Prezzo biglietto:', biglietto.toFixed(2));


    function generaBiglietto (Offerta, biglietto, fullNameValue) {
        const container = document.createElement ('div')
        container.className = 'container card bg-light m-4 mx-auto p-5 shadow-lg'

        const coachNumber = getRandomNumber (1,9)
        const cpNumber = getRandomNumber (10000, 99999)

            container.innerHTML = `
            <h3 class="text-center fst-italic">IL TUO BIGLIETTO</h3>
        <div class="card-header">
                <h4>Dettagli Passeggero</h4>
            </div>
            
            <div class="card-body">
                <table class="table">
                    <thead>
                        <tr>
                        <th class="text-start">Nome Passeggero</th>
                        <th>Offerta</th>
                        <th>Carrozza</th>
                        <th>Codice CP</th>
                        <th>Costo biglietto</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td id="ticket-name" class="fw-bold bg-secondary-subtle text-start">${fullNameValue}</td>
                        <td id="ticket-offer">${Offerta}</td>
                        <td id="ticket-coach">${coachNumber}</td>
                        <td id="ticket-code">${cpNumber}</td>
                        <td id="ticket-price">${biglietto.toFixed(2)}</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div> `
    
            outputEl.appendChild (container)
    }
    generaBiglietto (Offerta, biglietto, fullNameValue)

    function getRandomNumber (min, max) {
      return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
})
 



