let typed = new Typed(".multiText", {
  strings: [
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
    "100",
  ],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1500,
  startDelay: 1000,
});


//Gestione login form

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const codiceCliente = document.querySelector(".codiceCliente").value;
  const URL = "http://localhost:9001/api/clienti";
  // Effettuo la chiamata alla mia API utilizzando fetch
  fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ cod_cliente: codiceCliente }), // Invia il codice cliente al server come payload JSON con il nome corretto
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Errore nella risposta della richiesta!");
      }
      return response.json(); // Parsa la risposta JSON
    })
    .then((data) => {
      // Verifico se il campo cod_cliente è presente nella risposta
      if ("cod_cliente" in data) {
        // Se è presente, il codice cliente è valido
        window.location.href = "./spettacoli.html";
      } else {
        // Se non è presente, il codice cliente non esiste nel database
        alert(
          "Codice cliente non valido! Si prega di inserire un codice valido."
        );
      }
    })
    .catch((error) => {
      console.error("Errore durante la richiesta:", error);
    });
});
