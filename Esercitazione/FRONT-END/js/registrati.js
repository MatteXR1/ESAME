const landingPageURL = "./landingCode.html";
let nomeCliente = document.querySelector("#nome");
let cognomeCliente = document.querySelector("#cognome");
let emailCliente = document.querySelector("#email");
let numTelCliente = document.querySelector("#numTel");

function creaCliente(event) {
  event.preventDefault();

  if (
    nomeCliente.value.trim() != "" &&
    cognomeCliente.value.trim() != "" &&
    emailCliente.value.trim() != "" &&
    numTelCliente.value.trim() != ""
  ) {
    let nuovoCliente = {
      cognome: cognomeCliente.value,
      nome: nomeCliente.value,
      telefono: numTelCliente.value,
      email: emailCliente.value,
    };
    fetch("http://localhost:9001/api/clienti", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(nuovoCliente),
    })
      .then((data) => {
        return data.json();
      })
      .then((response) => {
        console.log(response.statusCode, "Registrazione avvenuta con successo");
        saveLastUserToLocalstorage(response);
        console.log(response);
        window.location.href = landingPageURL;
      });
  }
}

function saveLastUserToLocalstorage(user) {
  if (typeof Storage !== "undefined") {
    localStorage.setItem("lastUser", JSON.stringify(user));
  } else {
    console.log("Local storage not supported by the browser.");
  }
}

let form = document.querySelector(".form");
form.addEventListener("submit", creaCliente);
