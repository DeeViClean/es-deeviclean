"use strict";

// Sticky Header
$(window).scroll(function () {
  if ($(window).scrollTop() > 200) {
    $('.main_h').addClass('sticky');
  } else {
    $('.main_h').removeClass('sticky');
  }
}); // Mobile Navigation

$('.mobile-toggle').click(function () {
  if ($('.main_h').hasClass('open-nav')) {
    $('.main_h').removeClass('open-nav');
  } else {
    $('.main_h').addClass('open-nav');
  }
});
$('.main_h li a').click(function () {
  if ($('.main_h').hasClass('open-nav')) {
    $('.navigation').removeClass('open-nav');
    $('.main_h').removeClass('open-nav');
  }
}); // Navigation Scroll - ljepo radi materem

$('nav a').click(function (event) {
  var id = $(this).attr("href");
  var offset = 70;
  var target = $(id).offset().top - offset;
  $('html, body').animate({
    scrollTop: target
  }, 500);
  event.preventDefault();
}); // swiper

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  slidesPerGroup: 2,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "fraction"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
var swipper_cont = document.querySelector('.swiper-wrapper');
var url = "https://deevi-backend.herokuapp.com/api/user/getComments";
fetch(url).then(function (response) {
  return response.json();
}).then(function (data) {
  var resultado = document.querySelector('#resultado');
  var res_a_dividir = 0;

  for (var index = 0; index < data.length; index++) {
    var input_select = "";

    if (data[index].comment[1][0] === "4" || data[index].comment[1][0] === "5") {
      switch (data[index].comment[1][0]) {
        case "4":
          res_a_dividir += 4;
          input_select = "<input id=\"radio1\" type=\"radio\" name=\"estrellas\" value=\"5\" disabled>\n                                    <label for=\"radio1\">\u2605</label>\n                                    <input id=\"radio2\" type=\"radio\" name=\"estrellas\" value=\"4\" checked>\n                                    <label for=\"radio2\">\u2605</label>\n                                    <input id=\"radio3\" type=\"radio\" name=\"estrellas\" value=\"3\" disabled>\n                                    <label for=\"radio3\">\u2605</label>\n                                    <input id=\"radio4\" type=\"radio\" name=\"estrellas\" value=\"2\" disabled>\n                                    <label for=\"radio4\">\u2605</label>\n                                    <input id=\"radio5\" type=\"radio\" name=\"estrellas\" value=\"1\" disabled>\n                                    <label for=\"radio5\">\u2605</label>";
          break;

        case "5":
          res_a_dividir += 5;
          input_select = "<input id=\"radio1\" type=\"radio\" name=\"estrellas\" value=\"5\" checked>\n\n                                    <label for=\"radio1\">\u2605</label>\n                                    <input id=\"radio2\" type=\"radio\" name=\"estrellas\" value=\"4\" disabled>\n                                    <label for=\"radio2\">\u2605</label>\n                                    <input id=\"radio3\" type=\"radio\" name=\"estrellas\" value=\"3\" disabled>\n                                    <label for=\"radio3\">\u2605</label>\n                                    <input id=\"radio4\" type=\"radio\" name=\"estrellas\" value=\"2\" disabled>\n                                    <label for=\"radio4\">\u2605</label>\n                                    <input id=\"radio5\" type=\"radio\" name=\"estrellas\" value=\"1\" disabled>\n                                    <label for=\"radio5\">\u2605</label>";
          break;

        default:
          res_a_dividir += 5;
          input_select = "<input id=\"radio1\" type=\"radio\" name=\"estrellas\" value=\"5\" checked>\n\n                                    <label for=\"radio1\">\u2605</label>\n                                    <input id=\"radio2\" type=\"radio\" name=\"estrellas\" value=\"4\" disabled>\n                                    <label for=\"radio2\">\u2605</label>\n                                    <input id=\"radio3\" type=\"radio\" name=\"estrellas\" value=\"3\" disabled>\n                                    <label for=\"radio3\">\u2605</label>\n                                    <input id=\"radio4\" type=\"radio\" name=\"estrellas\" value=\"2\" disabled>\n                                    <label for=\"radio4\">\u2605</label>\n                                    <input id=\"radio5\" type=\"radio\" name=\"estrellas\" value=\"1\" disabled>\n                                    <label for=\"radio5\">\u2605</label>";
          break;
      }

      swipper_cont.innerHTML += "\n                    <div class=\"swiper-slide\">\n                            <div class=\"texty\">\n                            ".concat(data[index].comment[0][0], "\n                            </div>\n                            <div class=\"Author\">\n                                ").concat(data[index].name, "\n                            </div>\n                            <div id=\"form\">\n                                <form action=\"\">\n                                    <p class=\"clasificacion\" style=\"font-size: 20px;\">\n                                        ").concat(input_select, "\n                                    </p>\n                                </form>\n                            </div>\n                        </div>\n                ");
    }
  }

  res_a_dividir += 9 + 9;
  swipper_cont.innerHTML += "\n        <div class=\"swiper-slide\">\n                        <div class=\"texty\">\n                            Estoy encantada con la limpiezas express. No puedo decir nada malo, me han parecido super profesionales. me han dejado\n                            estupendamente todo y de verdad recomiendo a todos.\n                        </div>\n                        <div class=\"Author\">\n                            Antonella Castro\n                        </div>\n                        <div id=\"form\">\n                            <form action=\"\">\n                                <p class=\"clasificacion\" style=\"font-size: 20px;\">\n                                    <input id=\"radio1\" type=\"radio\" name=\"estrellas\" value=\"5\" checked>\n                                    <label for=\"radio1\">\u2605</label>\n                                    <input id=\"radio2\" type=\"radio\" name=\"estrellas\" value=\"4\" disabled>\n                                    <label for=\"radio2\">\u2605</label>\n                                    <input id=\"radio3\" type=\"radio\" name=\"estrellas\" value=\"3\" disabled>\n                                    <label for=\"radio3\">\u2605</label>\n                                    <input id=\"radio4\" type=\"radio\" name=\"estrellas\" value=\"2\" disabled>\n                                    <label for=\"radio4\">\u2605</label>\n                                    <input id=\"radio5\" type=\"radio\" name=\"estrellas\" value=\"1\" disabled>\n                                    <label for=\"radio5\">\u2605</label>\n                                </p>\n                            </form>\n                        </div>\n                    </div>";
  swipper_cont.innerHTML += "\n        <div class=\"swiper-slide\">\n                        <div class=\"texty\">\n                            Somos asiduos desde hace tiempo y siempre aciertan.\n                            He usado varias veces sus servicios y nos ha encantado la calidad de la limpieza.\n                        </div>\n                        <div class=\"Author\">\n                            Maria Rivadeneira\n                        </div>\n                        <div id=\"form\">\n                            <form action=\"\">\n                                <p class=\"clasificacion\" style=\"font-size: 20px;\">\n                                    <input id=\"radio1\" type=\"radio\" name=\"estrellas\" value=\"5\" disabledc>\n                                    <label for=\"radio1\">\u2605</label>\n                                    <input id=\"radio2\" type=\"radio\" name=\"estrellas\" value=\"4\" checked>\n                                    <label for=\"radio2\">\u2605</label>\n                                    <input id=\"radio3\" type=\"radio\" name=\"estrellas\" value=\"3\" disabled>\n                                    <label for=\"radio3\">\u2605</label>\n                                    <input id=\"radio4\" type=\"radio\" name=\"estrellas\" value=\"2\" disabled>\n                                    <label for=\"radio4\">\u2605</label>\n                                    <input id=\"radio5\" type=\"radio\" name=\"estrellas\" value=\"1\" disabled>\n                                    <label for=\"radio5\">\u2605</label>\n                                </p>\n                            </form>\n                        </div>\n                    </div>";
  swipper_cont.innerHTML += "\n        <div class=\"swiper-slide\">\n                        <div class=\"texty\">\n                            Todos son muy profesionales y respetuosos, el servicio que brindan me ha gustado.\n                        </div>\n                        <div class=\"Author\">\n                            Mario Bustamante\n                        </div>\n                        <div id=\"form\">\n                            <form action=\"\">\n                                <p class=\"clasificacion\" style=\"font-size: 20px;\">\n                                    <input id=\"radio1\" type=\"radio\" name=\"estrellas\" value=\"5\" disabledc>\n                                    <label for=\"radio1\">\u2605</label>\n                                    <input id=\"radio2\" type=\"radio\" name=\"estrellas\" value=\"4\" checked>\n                                    <label for=\"radio2\">\u2605</label>\n                                    <input id=\"radio3\" type=\"radio\" name=\"estrellas\" value=\"3\" disabled>\n                                    <label for=\"radio3\">\u2605</label>\n                                    <input id=\"radio4\" type=\"radio\" name=\"estrellas\" value=\"2\" disabled>\n                                    <label for=\"radio4\">\u2605</label>\n                                    <input id=\"radio5\" type=\"radio\" name=\"estrellas\" value=\"1\" disabled>\n                                    <label for=\"radio5\">\u2605</label>\n                                </p>\n                            </form>\n                        </div>\n                    </div>";
  swipper_cont.innerHTML += "\n        <div class=\"swiper-slide\">\n                        <div class=\"texty\">\n                            Me gusto el servicio y la puntualidad que ofrece DeeViClean.\n                        </div>\n                        <div class=\"Author\">\n                            Federico Alarcon\n                        </div>\n                        <div id=\"form\">\n                            <form action=\"\">\n                                <p class=\"clasificacion\" style=\"font-size: 20px;\">\n                                    <input id=\"radio1\" type=\"radio\" name=\"estrellas\" value=\"5\" checked>\n                                    <label for=\"radio1\">\u2605</label>\n                                    <input id=\"radio2\" type=\"radio\" name=\"estrellas\" value=\"4\" disabled>\n                                    <label for=\"radio2\">\u2605</label>\n                                    <input id=\"radio3\" type=\"radio\" name=\"estrellas\" value=\"3\" disabled>\n                                    <label for=\"radio3\">\u2605</label>\n                                    <input id=\"radio4\" type=\"radio\" name=\"estrellas\" value=\"2\" disabled>\n                                    <label for=\"radio4\">\u2605</label>\n                                    <input id=\"radio5\" type=\"radio\" name=\"estrellas\" value=\"1\" disabled>\n                                    <label for=\"radio5\">\u2605</label>\n                                </p>\n                            </form>\n                        </div>\n                    </div>";
  swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "fraction"
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      // when window width is >= 320px
      900: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 50
      }
    }
  });
  resultado.innerHTML = "".concat(res_a_dividir / 4);
  setTimeout(function () {
    console.log(res_a_dividir / 4);
  }, 500);
});
var mediaqueryList = window.matchMedia("(max-width: 500px)"); //swiper

if (mediaqueryList.matches) {
  swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "fraction"
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
} // dropdown


$(document).ready(function () {
  $('#dropDown').click(function () {
    $('.drop-down').toggleClass('drop-down--active');
  });
});