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
      <div class="card mb-3 " style="max-width: 500px;max-width: 400px; background-color: rgba(127, 24, 24, 0.295);border-radius: 20px; text-align: center;">
        <img src="./img/tikSenzaBG.png" class="card-img-top" alt="...">
        <div class="card-body">
            <div class="text-section">
                <h5 class="card-title fw-bold mb-4">${spettacolo.titolo}</h5>
                <p class="card-text">Autore: ${spettacolo.autore}</p>
                <p class="card-text mb-3">Regista: ${spettacolo.regista}</p>
            </div>
            <div class="cta-section">
                <div>Prezzo: ${spettacolo.prezzo} €</div>
                <a href="#" class="btn btn-dark back">Compra Ora</a>
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
      <div class="card mb-3 " style="max-width: 500px;max-width: 400px; background-color: rgba(127, 24, 24, 0.295);border-radius: 20px; text-align: center;">
        <img src="./img/tikSenzaBG.png" class="card-img-top" alt="...">
        <div class="card-body">
            <div class="text-section">
                <h5 class="card-title fw-bold mb-4">${spettacolo.titolo}</h5>
                <p class="card-text">Autore: ${spettacolo.autore}</p>
                <p class="card-text mb-3">Regista: ${spettacolo.regista}</p>
            </div>
            <div class="cta-section">
                <div>Prezzo: ${spettacolo.prezzo} €</div>
                <a href="#" class="btn btn-dark back">Compra Ora</a>
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
      <div class="card mb-3 " style="max-width: 500px;max-width: 400px; background-color: rgba(127, 24, 24, 0.295);border-radius: 20px; text-align: center;">
      <img src="./img/tikSenzaBG.png" class="card-img-top" alt="...">
      <div class="card-body">
          <div class="text-section">
              <h5 class="card-title fw-bold mb-4">${spettacolo.titolo}</h5>
              <p class="card-text">Autore: ${spettacolo.autore}</p>
              <p class="card-text mb-3">Regista: ${spettacolo.regista}</p>
          </div>
          <div class="cta-section">
              <div>Prezzo: ${spettacolo.prezzo} €</div>
              <a href="#" class="btn btn-dark back">Compra Ora</a>
          </div>
      </div>
  </div>
    `;
      sectionAlfieri.append(div);
    });
  });
