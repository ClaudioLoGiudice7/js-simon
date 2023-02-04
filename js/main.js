// Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
// Ogni secondo il nostro countdown dovrà scalare fino alle 9: 30 di domani mattina!
// (In questo caso, non avendo completato l'esercizio ieri, metterò il timer per l'effettiva correzione: lunedì mattina alle 9:30).

// RICAVIAMOCI LA DATA DI OGGI
let now = new Date();

// RICAVIAMOCI LA DATA DI SCADENZA
let deadline = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 2, 9, 30, 0, 0);

// CALCOLIAMO LA DIFFERENZA TRA LE DUE DATE
let difference = deadline - now;

// COLLEGO ELEMENTI HTML ALLE VARIABILI
let clock = document.querySelector("#clock");
let days = clock.querySelector("#days");
let hours = clock.querySelector("#hours");
let minutes = clock.querySelector("#minutes");
let seconds = clock.querySelector("#seconds");

updateClock();

// AGGIORNIAMO L'OROLOGIO OGNI MILLE MILLISECONDI (OGNI SECONDO)
const myInterval = setInterval(updateClock, 1000);

function updateClock() {
    // CALCOLIAMO LA DIFFERENZA TRA LE DUE DATE (PT.2)
    let now = new Date();
    let difference = deadline - now;

    // AGGIORNIAMO I GIORNI, LE ORE, I MINUTI E I SECONDI NELL'HTML
    days.innerHTML = Math.floor(difference / (1000 * 60 * 60 * 24));
    hours.innerHTML = (Math.floor(difference / (1000 * 60 * 60) % 24) < 10 ? "0" : "") + Math.floor(difference / (1000 * 60 * 60) % 24);
    minutes.innerHTML = (Math.floor(difference / (1000 * 60) % 60) < 10 ? "0" : "") + Math.floor(difference / (1000 * 60) % 60);
    seconds.innerHTML = (Math.floor(difference / 1000 % 60) < 10 ? "0" : "") + Math.floor(difference / 1000 % 60);
}