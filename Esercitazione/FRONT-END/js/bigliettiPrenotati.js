let codiceUtente = JSON.parse(localStorage.getItem("lastUser")).cod_cliente;
let nomeUtente = JSON.parse(localStorage.getItem("lastUser")).nome;
let cognomeUtente = JSON.parse(localStorage.getItem("lastUser")).cognome;
const URL = `http://localhost:9001/api/biglietti/${codiceUtente}`;
fetch(URL)
  .then((data) => {
    return data.json();
  })
  .then((response) => {
    let container = document.querySelector(".container");
    response.forEach((biglietto) => {
      switch (biglietto.cod_replica) {
        case "R001":
        case "R002":
        case "R003":
        case "R004":
        case "R005":

          let row1 = document.createElement("div");

          row1.setAttribute("class", "row");
          row1.setAttribute("class", "mb-5");
          row1.setAttribute("class", "mt-5");
          row1.innerHTML = `
      <div class="coupon">
      <div  class="left" >
        <div> 
          <h2>Teatro Regio</h1>
       </div>
      </div>
      <div  class="center">
        <div>
          <h1>${nomeUtente} ${cognomeUtente}</h1>
         <br>
          <h2>Appunti per un <br> film  sulla lotta <br> di classe</h2>
         <br>
          <h4>Autore</h4> <p> Ascanio Celestini </p>
              
          <h4>Regista</h4> <p>Ascanio Celestini</p>
              
          <h5>Pagamento</h5> <p>${biglietto.tipo_pagamento}</p>
              
          <small>Valido il ${biglietto.data_ora}</small>
        </div>
      </div>
      <div  class="right">
        <div style="color:black">${biglietto.quantita}</div>
      </div>
    </div>
        `;
          container.appendChild(row1);

          break;
        case "R006":
        case "R007":
        case "R008":
        case "R009":
        case "R010":
          let row2 = document.createElement("div");
          row2.setAttribute("class", "row");
          row2.setAttribute("class", "mb-5");
          row2.setAttribute("class", "mt-5");
          row2.innerHTML = `
      <div class="coupon">
      <div  class="left" >
        <div> 
          <h2>Teatro Regio</h1>
       </div>
      </div>
      <div  class="center">
        <div>
          <h1>${nomeUtente} ${cognomeUtente}</h1>
         <br>
          <h2>Il birraio di Preston</h2>
         <br>
          <h4>Autore</h4> <p> Andrea Camilleri </p>
              <br>
          <h4>Regista</h4> <p>Giuseppe Dipasquale</p>
              <br>
          <h5>Pagamento</h5> <p>${biglietto.tipo_pagamento}</p>
              
          <small>Valido il ${biglietto.data_ora}</small>
        </div>
      </div>
      <div  class="right">
        <div style="color:black">${biglietto.quantita}</div>
      </div>
    </div>
        `;
          container.appendChild(row2);

          break;
        case "R011":
        case "R012":
        case "R013":
        case "R014":
        case "R015":
          let row3 = document.createElement("div");
          row3.setAttribute("class", "row");
          row3.setAttribute("class", "mb-5");
          row3.setAttribute("class", "mt-5");
          row3.innerHTML = `
      <div class="coupon">
      <div  class="left" >
        <div> 
          <h2>Teatro Carignano</h1>
       </div>
      </div>
      <div  class="center">
        <div>
          <h1>${nomeUtente} ${cognomeUtente}</h1>
         <br>
          <h2>La Traviata</h2>
         <br>
          <h4>Autore</h4> <p> Giuseppe Verdi </p>
              <br>
          <h4>Regista</h4> <p>Laurent Pelly</p>
              <br>
          <h5>Pagamento</h5> <p>${biglietto.tipo_pagamento}</p>
              
          <small>Valido il ${biglietto.data_ora}</small>
        </div>
      </div>
      <div  class="right">
        <div style="color:black">${biglietto.quantita}</div>
      </div>
    </div>
        `;
          container.appendChild(row3);
          break;
        case "R016":
        case "R017":
        case "R018":
        case "R019":
        case "R020":
          let row4 = document.createElement("div");
          row4.setAttribute("class", "row");
          row4.setAttribute("class", "mb-5");
          row4.setAttribute("class", "mt-5");
          row4.innerHTML = `
      <div class="coupon">
      <div  class="left" >
        <div> 
          <h2>Teatro Carignano</h1>
       </div>
      </div>
      <div  class="center">
        <div>
          <h1>${nomeUtente} ${cognomeUtente}</h1>
         <br>
          <h2>La Bohème</h2>
         <br>
          <h4>Autore</h4> <p> Giacomo Puccini </p>
              <br>
          <h4>Regista</h4> <p>Giuseppe Patroni Griffi</p>
              <br>
          <h5>Pagamento</h5> <p>${biglietto.tipo_pagamento}</p>
              
          <small>Valido il ${biglietto.data_ora}</small>
        </div>
      </div>
      <div  class="right">
        <div style="color:black">${biglietto.quantita}</div>
      </div>
    </div>
        `;
          container.appendChild(row4);
          break;
        case "R021":
        case "R022":
        case "R023":
        case "R024":
        case "R025":
          let row5 = document.createElement("div");
          row5.setAttribute("class", "row");
          row5.setAttribute("class", "mb-5");
          row5.setAttribute("class", "mt-5");
          row5.innerHTML = `
      <div class="coupon">
      <div  class="left" >
        <div> 
          <h2>Teatro Alfieri</h1>
       </div>
      </div>
      <div  class="center">
        <div>
          <h1>${nomeUtente} ${cognomeUtente}</h1>
         <br>
          <h2>Poveri, ma belli</h2>
         <br>
          <h4>Autore</h4> <p> Gianni Togni </p>
              <br>
          <h4>Regista</h4> <p>Massimo Ranieri</p>
              <br>
          <h5>Pagamento</h5> <p>${biglietto.tipo_pagamento}</p>
              
          <small>Valido il ${biglietto.data_ora}</small>
        </div>
      </div>
      <div  class="right">
        <div style="color:black">${biglietto.quantita}</div>
      </div>
    </div>
        `;
          container.appendChild(row5);
          break;
        case "R026":
        case "R027":
        case "R028":
        case "R029":
        case "R030":
          let row6 = document.createElement("div");
          row6.setAttribute("class", "row");
          row6.setAttribute("class", "mb-5");
          row6.setAttribute("class", "mt-5");
          row6.innerHTML = `
      <div class="coupon">
      <div  class="left" >
        <div> 
          <h2>Teatro Alfieri</h1>
       </div>
      </div>
      <div  class="center">
        <div>
          <h1>${nomeUtente} ${cognomeUtente}</h1>
         <br>
          <h2>Il sogno del <br> piccolo imperatore</h2>
         <br>
          <h4>Autore</h4> <p> Gian Mesturino </p>
              <br>
          <h4>Regista</h4> <p>Alberto Barbi</p>
              <br>
          <h5>Pagamento</h5> <p>${biglietto.tipo_pagamento}</p>
              
          <small>Valido il ${biglietto.data_ora}</small>
        </div>
      </div>
      <div  class="right">
        <div style="color:black">${biglietto.quantita}</div>
      </div>
    </div>
        `;
          container.appendChild(row6);
          break;
        default:
          break;
      }
    });
  });
