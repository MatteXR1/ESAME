fetch("http://localhost:9001/api/spettacoli/T001")
  .then((data) => {
    return data.json();
  })
  .then((response) => {
    let sectionRegio = document.querySelector("#teatroRegioSpettacoli");
    response.forEach((spettacolo) => {
      let div = document.createElement("div");
      div.setAttribute("class", "centro");
      div.innerHTML = `
      <div class="card mb-3  text-dark" style="max-width: 540px;min-height: 200px">
      <div class="row g-0">
        <div class="col-md-4 d-flex align-items-center">
          <img src="./img/Ticket.png" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${spettacolo.titolo}</h5>
            <p class="card-text">Autore: ${spettacolo.autore}</p>
            <p class="card-text">Regista: ${spettacolo.regista}</p>
            <div class="d-flex flex-row-reverse justify-content-center">
            <button class="btn btn-primary" type="submit">Compra Biglietti</button>
          </div>
          </div>
        </div>
      </div>
    </div>
    `;
      sectionRegio.append(div);
    });
  });

fetch("http://localhost:9001/api/spettacoli/T002")
  .then((data) => {
    return data.json();
  })
  .then((response) => {
    let sectionCarignano = document.querySelector("#teatroCarignanoSpettacoli");
    response.forEach((spettacolo) => {
      let div = document.createElement("div");
      div.setAttribute("class", "centro");
      div.innerHTML = `
      <div class="card mb-3  text-dark" style="max-width: 540px;min-height: 200px">
      <div class="row g-0">
        <div class="col-md-4 d-flex align-items-center">
          <img src="./img/Ticket.png" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${spettacolo.titolo}</h5>
            <p class="card-text">Autore: ${spettacolo.autore}</p>
            <p class="card-text">Regista: ${spettacolo.regista}</p>
            <div class="d-flex flex-row-reverse justify-content-center">
            <button class="btn btn-primary" type="submit">Compra Biglietti</button>
          </div>
          </div>
        </div>
      </div>
    </div>
    `;
      sectionCarignano.append(div);
    });
  });

fetch("http://localhost:9001/api/spettacoli/T003")
  .then((data) => {
    return data.json();
  })
  .then((response) => {
    let sectionAlfieri = document.querySelector("#teatroAlfieriSpettacoli");
    response.forEach((spettacolo) => {
      let div = document.createElement("div");
      div.setAttribute("class", "centro");
      div.innerHTML = `
      <div class="card mb-3 text-dark" style="max-width: 540px;min-height: 200px">
      <div class="row g-0">
        <div class="col-md-4 d-flex align-items-center">
          <img src="./img/Ticket.png" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${spettacolo.titolo}</h5>
            <p class="card-text">Autore: ${spettacolo.autore}</p>
            <p class="card-text">Regista: ${spettacolo.regista}</p>
            <div class="d-flex flex-row-reverse justify-content-center">
            <button class="btn btn-primary" type="submit">Compra Biglietti</button>
          </div>
          </div>
        </div>
      </div>
    </div>
    `;
      sectionAlfieri.append(div);
    });
  });
