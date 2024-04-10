"use strict";

// let cart = {};

if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
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

updateCart();

let tbody = document.getElementById("tbody");

for (let id in cart) {
    let item = cart[id];
    let cartRow = document.createElement('div');
    cartRow.innerHTML =  
            `
            <div class="shopping-cart__table__row">
                <div class="shopping-cart__col shopping-cart__name">
                    <div class="shopping-cart__name-product">
                        <div class="product-image">
                            <img src="` + item.img + `" alt="product img">
                        </div>
                        <a href="#">` + item.title + `</a>
                    </div>
                    <span class="btn-remove cart_item" data-id="` + id + `">×</span>
                </div>
                <div class="shopping-cart__col shopping-cart__price" data-th="মূল্য">
                    <span class="price">BDT ` + item.price + `</span>
                </div>
                <div class="shopping-cart__col shopping-cart__quantity" data-th="পরিমাণ">
                    <div class="shopping_cart__counter">
                        <span class="minus">-</span>
                        <input type="number" name="product_quantity" value="` + item.qty + `" min="1" >
                        <span class="plus">+</span>
                    </div>
                </div>
                <div class="shopping-cart__col shopping-cart__total" data-th="মোট">
                    <span class="total-price">BDT ` + item.price * item.qty + `</span>
                </div>
                <div class="shopping-cart__col shopping-cart__delete">
                    <span class="btn-remove cart_item" data-id="` + id + `">×</span>
                </div>
            </div>
            `;


    tbody.append(cartRow);
    qtyHandler(cartRow);
};

let btnsRemove = document.querySelectorAll(".btn-remove");

for (let i = 0; i < btnsRemove.length; i++) {
    let btnRemove = btnsRemove[i];
    btnRemove.addEventListener("click", removeItem);

}

function removeItem(event) {
    delete cart[event.target.dataset.id];
    event.target.closest('.shopping-cart__table__row').remove();
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
}

// shopping cart counter on click

function qtyHandler(cartRow) {
   
    $(cartRow).find(".minus").click(function () {
        var $input = $(this).parent().find("input");
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        let id = $(cartRow).find(".btn-remove").data("id");
        cart[id].qty = count;
        localStorage.setItem("cart", JSON.stringify(cart));
        $(cartRow).find(".total-price").text("BDT " + count * cart[id].price);
        return false;
    });
    $(cartRow).find(".plus").click(function () {
        var $input = $(this).parent().find("input");
        let qty = parseInt($input.val()) + 1;
        $input.val(qty);
        $input.change();
        let id = $(cartRow).find(".btn-remove").data("id");
        cart[id].qty = qty;
        localStorage.setItem("cart", JSON.stringify(cart));
        $(cartRow).find(".total-price").text("BDT " + qty * cart[id].price);
        return false;
    });  
    
}


