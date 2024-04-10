"use strict";

document.addEventListener("click", function (event) {
  if (event.target.closest(".burger-menu-btn")) {
    document.body.classList.toggle("lock");
    document.querySelector(".header__main__nav").classList.toggle("_active");
    document.querySelector(".burger-menu__icon").classList.toggle("_active");
  }
});

// shopping cart counter on click

$(document).ready(function () {
  $(".minus").click(function () {
    var $input = $(this).parent().find("input");
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $(".plus").click(function () {
    var $input = $(this).parent().find("input");
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });

  // show all products on mobile
  $(".products-show-more").on("click", function () {
    $(".products__result__item").toggleClass("showContent");
});
});







