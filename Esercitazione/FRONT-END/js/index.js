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

const URL = "http://localhost:9001/api/clienti";

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const codiceClienteInput = document.querySelector(".codiceCliente");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Ottieni il valore inserito nell'input del codice cliente
    const codiceClienteInserito = codiceClienteInput.value;

    // Effettua una chiamata all'API dei clienti
    fetch(URL)
      .then((data) => data.json())
      .then((respnse) => {
        // Verifica se il codice cliente corrisponde a un cliente nell'API
        const clienteCorrispondente = response.find(
          (cliente) => cliente.cod_cliente === parseInt(codiceClienteInserito)
        );

        if (clienteCorrispondente) {
          // Se il cliente corrisponde, consenti l'invio del modulo
          form.submit();
        } else {
          // Altrimenti, mostra un messaggio di errore o adotta altre azioni
          alert(
            "Il codice cliente inserito non corrisponde a nessun cliente registrato."
          );
        }
      })
      .catch((error) => {
        console.error(
          "Si è verificato un errore durante la richiesta dell'API:",
          error
        );
        alert(
          "Si è verificato un errore durante la verifica del codice cliente."
        );
      });
  });
});
