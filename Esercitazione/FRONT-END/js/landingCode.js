let codice = document.querySelector(".card-title");
fetch("http://localhost:9001/api/clienti")
  .then((data) => data.json())
  .then((response) => {
    const ultimoCodCliente = localStorage.getItem("lastUser");
    codice.textContent = JSON.parse(ultimoCodCliente).cod_cliente;
  });
