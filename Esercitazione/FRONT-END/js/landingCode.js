let codice = document.querySelector(".card-title");
fetch("http://localhost:9001/api/clienti")
  .then((data) => data.json())
  .then((response) => {
    const ultimoCodCliente = response[response.length - 1].cod_cliente;
    codice.textContent = ultimoCodCliente;
  });
