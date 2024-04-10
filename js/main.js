"use strict";

document.addEventListener("click", function (event) {
  if (event.target.closest(".burger-menu-btn")) {
    document.body.classList.toggle("lock");
    document.querySelector(".header__main__nav").classList.toggle("_active");
    document.querySelector(".burger-menu__icon").classList.toggle("_active");
  }
});



let cart = {};

if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
}

updateCart();

let btns = document.querySelectorAll(".add-to-cart");

for (let i = 0; i < btns.length; i++) {
    let btn = btns[i];
    btn.addEventListener("click", add);
}

function add(event) {
    let price = Number(event.target.dataset.price);
    let img =  event.target.dataset.img;
    let title = event.target.dataset.title;
    let id = event.target.dataset.id;

if (id in cart) {
    cart[id].qty++;
} else {
    let cartItem = {
        title: title,
        img: img,
        price: price,
        qty: 1
    };
    cart[id] = cartItem
}
    console.log(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
}

function updateCart() {
  let count = 0,
    cart = {};
  if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
    count = Object.keys(cart).length;
  }
  document.getElementById("count").textContent = count;
}







