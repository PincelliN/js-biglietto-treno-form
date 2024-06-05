/*
- Il numero di chilometri da percorrere - Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole: - il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
*/
//Variabili Globali
const prezzoKm = 0.21;
//Creo la variabile del Bottone

const Genera = document.getElementById("work");

console.log(Genera);
// Creo un evento al click

Genera.addEventListener("click", function () {
 //Variabile per le classi che devono apparire
  const ticket = document.getElementById("tik");
        ticket.classList.remove("d-none");

   // Variabile nome
  let UserName = document.getElementById("username").value;
  UserName = UserName.toUpperCase();

  console.log(UserName);
  //Creo varibile km da percorrere
  let Percorso = document.getElementById("userdistance").value;

  console.log(Percorso);
  // Calcolo il prezzo del bigletto senza standar
  let priceTicket = prezzoKm * Percorso;

  //Creo  variabile età
  let Age = document.getElementById("userage").value;

  console.log(Age);
  //Controllo se il soggetto ha diritto ad uno sconto
  if (Age == 2) {
    priceTicket = (priceTicket * 0.4).toFixed(2);
    Age = "Pensionato";
  } else if (Age == 0) {
    priceTicket = (priceTicket * 0.2).toFixed(2);
    Age = "Studente";
  } else {
    priceTicket = priceTicket.toFixed(2);
    Age = "";
  }

  console.log(priceTicket);
  
  //stampo nome, prezzo ed offerta
  document.getElementById("passenger").innerHTML = UserName;
  document.getElementById("cut").innerHTML = Age;
  document.getElementById("price").innerHTML = priceTicket + "$";
  return UserName, Age, Percorso, priceTicket;
});
