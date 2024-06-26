/*
- Il numero di chilometri da percorrere - Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole: - il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
*/
//Variabili Globali
const PrezzoKm = 0.21;
//Creo la variabile del Bottone
const Clean = document.getElementById("reset");
const Genera = document.getElementById("work");

console.log(Genera);
// Creo un evento al click

Genera.addEventListener("click", function () {
  //Variabile per le classi che devono apparire
  const Ticket = document.getElementById("tik");
  Ticket.classList.remove("d-none");

  // Variabile nome
  let UserName = document.getElementById("username").value;
  UserName = UserName.toUpperCase();

  console.log(UserName);
  //Creo varibile km da percorrere
  let Percorso = document.getElementById("userdistance").value;

  console.log(Percorso);
  // Calcolo il prezzo del bigletto senza standar
  let PriceTicket = PrezzoKm * Percorso;

  //Creo  variabile età
  let Age = document.getElementById("userage").value;

  console.log(Age);
  //Controllo se il soggetto ha diritto ad uno sconto
  if (Age == 2) {
    let PriceCut = PriceTicket * 0.4;
    PriceTicket = (PriceTicket - PriceCut).toFixed(2);
    Age = "Pensionato";
  } else if (Age == 0) {
    let PriceCut = PriceTicket * 0.2;
    PriceTicket = (PriceTicket - PriceCut).toFixed(2);
    Age = "Studente";
  } else {
    PriceTicket = PriceTicket.toFixed(2);
    Age = "";
  }

  console.log(PriceTicket);
  // variabile per carrozza casuale
  let Car = Math.random() * 10;
  Car = Math.round(Car);
  console.log(Car);
  let CP = Math.random() * 100000;
  CP = Math.round(CP);
  //stampo nome, prezzo ed offerta
  document.getElementById("passenger").innerHTML = UserName;
  document.getElementById("cut").innerHTML = Age;
  document.getElementById("price").innerHTML = PriceTicket + "$";
  document.getElementById("carriage").innerHTML = Car;
  document.getElementById("cp").innerHTML = CP;
});

//funzione per resettare tutto
Clean.addEventListener("click", function () {
  //variabile del contenitore biglietto per aggiungere la classe d-none
  const Ticket = document.getElementById("tik");
  Ticket.classList.add("d-none");

  // Variabile nome
  document.getElementById("username").value = "";
  document.getElementById("userdistance").value = "";
  document.getElementById("userage").value = "";
});
