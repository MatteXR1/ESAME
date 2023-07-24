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
              <button id="button${spettacolo.cod_Spettacolo}" class="btn btn-dark" type="button" data-mdb-toggle="collapse" data-mdb-target="#collapsedElement${spettacolo.cod_Spettacolo}" aria-expanded="false" aria-controls="collapsedElement${spettacolo.cod_Spettacolo}">Compra Ora</button>
              <div class="collapse mt-3" id="collapsedElement${spettacolo.cod_Spettacolo}">
              </div>
            </div>
          </div>
        </div>
      `;
      sectionRegio.append(div);
      let btn = document.querySelector(`#button${spettacolo.cod_Spettacolo}`);
      btn.addEventListener("click", function () {
        let divCollapsed = document.getElementById(
          `collapsedElement${spettacolo.cod_Spettacolo}`
        );
        let currentDisplayStyle = window.getComputedStyle(divCollapsed).display;
        if (currentDisplayStyle === "none") {
          divCollapsed.style.display = "flex";
          divCollapsed.style.flexDirection = "column";
          divCollapsed.style.alignItems = "center";
        } else {
          divCollapsed.style.display = "none";
        }
      });
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
          <button id="button${spettacolo.cod_Spettacolo}" class="btn btn-dark" type="button" data-mdb-toggle="collapse" data-mdb-target="#collapsedElement${spettacolo.cod_Spettacolo}" aria-expanded="false" aria-controls="collapsedElement${spettacolo.cod_Spettacolo}">Compra Ora</button>
          <div class="collapse mt-3" id="collapsedElement${spettacolo.cod_Spettacolo}">
           
          </div>
        </div>
      </div>
    </div>
    `;
      sectionCarignano.append(div);
      let btn = document.querySelector(`#button${spettacolo.cod_Spettacolo}`);
      btn.addEventListener("click", function () {
        let divCollapsed = document.getElementById(
          `collapsedElement${spettacolo.cod_Spettacolo}`
        );
        let currentDisplayStyle = window.getComputedStyle(divCollapsed).display;
        if (currentDisplayStyle === "none") {
          divCollapsed.style.display = "flex";
          divCollapsed.style.flexDirection = "column";
          divCollapsed.style.alignItems = "center";
        } else {
          divCollapsed.style.display = "none";
        }
      });
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
          <button id="button${spettacolo.cod_Spettacolo}" class="btn btn-dark" type="button" data-mdb-toggle="collapse" data-mdb-target="#collapsedElement${spettacolo.cod_Spettacolo}" aria-expanded="false" aria-controls="collapsedElement${spettacolo.cod_Spettacolo}">Compra Ora</button>
          <div class="collapse mt-3" id="collapsedElement${spettacolo.cod_Spettacolo}">
            
          </div>
        </div>
      </div>
    </div>
    `;
      sectionAlfieri.append(div);
      let btn = document.querySelector(`#button${spettacolo.cod_Spettacolo}`);
      btn.addEventListener("click", function () {
        let divCollapsed = document.getElementById(
          `collapsedElement${spettacolo.cod_Spettacolo}`
        );
        let currentDisplayStyle = window.getComputedStyle(divCollapsed).display;
        if (currentDisplayStyle === "none") {
          divCollapsed.style.display = "flex";
          divCollapsed.style.flexDirection = "column";
          divCollapsed.style.alignItems = "center";
        } else {
          divCollapsed.style.display = "none";
        }
      });
    });
  });

 fetch("http://localhost:9001/api/repliche")
  .then((data) => {
    return data.json();
  })
  .then((response) => {
    response.forEach((replica) => {
      let collapsedDiv = document.querySelector(
        `#collapsedElement${replica.cod_spettacolo}`
      );
      switch (replica.cod_spettacolo) {
        case "S001":
          let div1 = document.createElement("div");
          div1.innerHTML = `
          <div class="cArd mb-5">
           <div class="cArd-details">
            <p class="tExt-title product-title">Codice Replica: ${replica.cod_replica}</p>
            <p class="tExt-body">Data Replica: ${replica.data_replica}</p>
            </div>
            <button class="cArd-button add-cart">Aggiungi al Carrello</button>
          </div>
          `;
          collapsedDiv.append(div1);
          break;
        case "S002":
          let div2 = document.createElement("div");
          div2.innerHTML = `
          <div class="cArd mb-5">
           <div class="cArd-details">
            <p class="tExt-title product-title">Codice Replica: ${replica.cod_replica}</p>
            <p class="tExt-body">Data Replica: ${replica.data_replica}</p>
            </div>
            <button class="cArd-button add-cart">Aggiungi al Carrello</button>
          </div>
          `;
          collapsedDiv.append(div2);
          break;
        case "S003":
          let div3 = document.createElement("div");
          div3.innerHTML = `
          <div class="cArd mb-5">
           <div class="cArd-details">
            <p class="tExt-title product-title">Codice Replica: ${replica.cod_replica}</p>
            <p class="tExt-body">Data Replica: ${replica.data_replica}</p>
            </div>
            <button class="cArd-button add-cart">Aggiungi al Carrello</button>
          </div>
          `;
          collapsedDiv.append(div3);
          break;
        case "S004":
          let div4 = document.createElement("div");
          div4.innerHTML = `
          <div class="cArd mb-5">
           <div class="cArd-details">
            <p class="tExt-title product-title">Codice Replica: ${replica.cod_replica}</p>
            <p class="tExt-body">Data Replica: ${replica.data_replica}</p>
            </div>
            <button class="cArd-button add-cart">Aggiungi al Carrello</button>
          </div>
          `;
          collapsedDiv.append(div4);
          break;
        case "S005":
          let div5 = document.createElement("div");
          div5.innerHTML = `
          <div class="cArd mb-5">
           <div class="cArd-details">
            <p class="tExt-title product-title">Codice Replica: ${replica.cod_replica}</p>
            <p class="tExt-body">Data Replica: ${replica.data_replica}</p>
            </div>
            <button class="cArd-button add-cart">Aggiungi al Carrello</button>
          </div>
          `;
          collapsedDiv.append(div5);
          break;
        case "S006":
          let div6 = document.createElement("div");
          div6.innerHTML = `
          <div class="cArd mb-5">
           <div class="cArd-details">
            <p class="tExt-title product-title">Codice Replica: ${replica.cod_replica}</p>
            <p class="tExt-body">Data Replica: ${replica.data_replica}</p>
            </div>
            <button class="cArd-button add-cart">Aggiungi al Carrello</button>
          </div>
          `;
          collapsedDiv.append(div6);
          break;

        default:
          break;
      }
    });
  });

function saluta() {
  let saluto = document.querySelector("#saluto");
  let user = localStorage.getItem("lastUser");
  let h3 = document.createElement("h3");
  h3.textContent = "Ciao" + " " + JSON.parse(user).nome;
  saluto.append(h3);
}
saluta();

let logOut = document.querySelector("#logOut");
logOut.addEventListener("click", RemoveFromLocalStorage);
function RemoveFromLocalStorage() {
  localStorage.clear();
}

//cart
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

cartIcon.onclick = () => {
  cart.classList.add("active");
};

closeCart.onclick = () => {
  cart.classList.remove("active");
};

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  let removeCartButtons = document.getElementsByClassName("cart-remove");
  for (let i = 0; i < removeCartButtons.length; i++) {
    let button = removeCartButtons[i];
    button.addEventListener("click", removeCartItem);
  }
  let quantityInputs = document.getElementsByClassName("cart-quantity");
  for (let i = 0; i < quantityInputs.length; i++) {
    let input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }

  let addcart = document.getElementsByClassName("add-cart");
  for (let i = 0; i < addcart.length; i++) {
    let button = addcart[i];
    console.log(button);
    button.addEventListener("click", addcartClicked);
  }
}

function removeCartItem(event) {
  let buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updateTotal();
  
}

function quantityChanged(event) {
  let input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateTotal();
}

function addcartClicked(event) {
  let button = event.target;
  let shopProducts = button.parentElement;
  console.log(shopProducts);
  let title = shopProducts.getElementsByClassName("product-title")[0].innerText;

}

function updateTotal() {
  let cartContent = document.getElementsByClassName("cart-content")[0];
  let cartBoxes = cartContent.getElementsByClassName("cart-box");
  let total = 0;
  for (let i = 0; i < cartBoxes.length; i++) {
    let cartBox = cartBoxes[i];
    let priceElement = cartBox.getElementsByClassName("cart-price")[0];
    let quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
    let price = parseFloat(priceElement.innerText.replace("€", ""));
    let quantity = quantityElement.value;
    total = total + quantity * price;

    total = Math.round(total * 100) / 100;

    document.getElementsByClassName("total-price")[0].innerText = "€" + total;
  }
}



const scrollToTopButton = document.getElementById("scrollToTopButton");

// Funzione per mostrare o nascondere il bottone in base allo scroll
function toggleScrollButton() {
  if (window.scrollY > window.innerHeight) {
    scrollToTopButton.classList.add("scrolled");
  } else {
    scrollToTopButton.classList.remove("scrolled");
  }
}

// Aggiungi l'evento scroll alla finestra
window.addEventListener("scroll", toggleScrollButton);

// Funzione per tornare all'inizio della pagina
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Aggiungi l'evento click al bottone per tornare all'inizio
scrollToTopButton.addEventListener("click", scrollToTop);