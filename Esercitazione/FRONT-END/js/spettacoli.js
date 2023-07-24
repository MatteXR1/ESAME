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
  let title = shopProducts.get
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
