let codice = document.querySelector(".card-title");
const ultimoCodCliente = localStorage.getItem("lastUser");
codice.textContent = JSON.parse(ultimoCodCliente).cod_cliente;
