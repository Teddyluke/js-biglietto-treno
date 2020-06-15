// creo un codice che chiede all'utente il numero di km che deve percorrere e la sua età e lascia come output il costo del biglietto considerando sconti e prezzo fisso al km.

// chiedo numero di km che percorrerà l'utente
var kmUtente = prompt ("inserire numero di km da percorrere");

// chiedo l'età dello stesso

var etaUtente = prompt ("inserire la propria età");

// //  imposto i valori del costo del biglietto e le interazioni con gli sconti
var costoBiglietto = 0.21;

var costolordo;
var valoreSconto;
var costofinale;

if (etaUtente < 18) {
  costolordo = costoBiglietto * kmUtente;
  valoreSconto = (costolordo * 20) / 100;
  costofinale = costolordo - valoreSconto;
} else if (etaUtente > 65) {
  costolordo = costoBiglietto * kmUtente;
  valoreSconto = (costolordo * 40) / 100;
  costofinale = costolordo - valoreSconto;
} else {
  costofinale = costoBiglietto * kmUtente;
}


// // output del costo finale del biglietto

document.getElementById('title').innerHTML = "Il costo del suo biglietto è di €: " + costofinale.toFixed(2);
