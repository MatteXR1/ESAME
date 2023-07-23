// Funzione per creare una singola card per uno spettacolo
function createCard(spettacolo) {
  const card = document.createElement("div");
  card.className = "card mb-3 text-dark";
  card.style.maxWidth = "540px";

  const cardRow = document.createElement("div");
  cardRow.className = "row g-0";
  card.appendChild(cardRow);

  const cardImageCol = document.createElement("div");
  cardImageCol.className = "col-md-4";
  cardRow.appendChild(cardImageCol);

  const cardImage = document.createElement("img");
  cardImage.src = "./img/Ticket.png";
  cardImage.className = "img-fluid rounded-start";
  cardImage.alt = "...";
  cardImageCol.appendChild(cardImage);

  const cardBodyCol = document.createElement("div");
  cardBodyCol.className = "col-md-8";
  cardRow.appendChild(cardBodyCol);

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";
  cardBodyCol.appendChild(cardBody);

  const cardTitle = document.createElement("h5");
  cardTitle.className = "card-title";
  cardTitle.textContent = spettacolo.titolo;
  cardBody.appendChild(cardTitle);

  const cardText = document.createElement("p");
  cardText.className = "card-text";
  cardText.textContent = `Autore: ${spettacolo.autore}\nRegista: ${spettacolo.regista}\nPrezzo: ${spettacolo.prezzo}€`;
  cardBody.appendChild(cardText);

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "d-flex flex-row-reverse";
  cardBody.appendChild(buttonContainer);

  const buyButton = document.createElement("button");
  buyButton.className = "btn btn-primary";
  buyButton.type = "submit";
  buyButton.textContent = "Compra Biglietti";
  buttonContainer.appendChild(buyButton);

  return card;
}

// Funzione per ottenere gli spettacoli di un singolo teatro
function getSpettacoliByTeatro(teatroCodice) {
  return fetch(`http://localhost:9001/api/spettacoli/${teatroCodice}`)
    .then((response) => response.json())
    .catch((error) => {
      console.error(
        `Errore durante la richiesta degli spettacoli del Teatro ${teatroCodice}:`,
        error
      );
      return []; // Restituisco un array vuoto in caso di errore
    });
}

// Funzione per aggiungere le card nella sezione specifica del teatro
function addSpettacoloCardToTeatroSection(spettacolo, teatro) {
  const sectionId = `${teatro.cod_Teatro}Spettacoli`;
  const teatroSection = document.getElementById(sectionId);
  if (teatroSection) {
    const card = createCard(spettacolo);
    teatroSection.appendChild(card);
  }
}

// Funzione per ottenere tutti i teatri e i relativi spettacoli
async function loadSpettacoli() {
  try {
    const responseTeatri = await fetch("http://localhost:9001/api/teatri");
    const teatri = await responseTeatri.json();

    for (const teatro of teatri) {
      const teatroCodice = teatro.cod_Teatro;
      const responseSpettacoli = await fetch(
        `http://localhost:9001/api/spettacoli/${teatroCodice}`
      );
      const spettacoli = await responseSpettacoli.json();

      spettacoli.forEach((spettacolo) => {
        addSpettacoloCardToTeatroSection(spettacolo, teatro);
      });
    }
  } catch (error) {
    console.error("Errore durante la richiesta dei dati:", error);
  }
}

// Chiamo la funzione per ottenere tutti i teatri e i relativi spettacoli
loadSpettacoli();
