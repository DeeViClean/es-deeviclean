"use strict";

// Sticky Header
$(window).scroll(function () {
  console.log($(window).scrollTop());

  if ($(window).scrollTop() >= 50) {
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
}); //vistas

var cls = ['_', 'alt'];
var cs = [];
var i = 0;
var hh = 0;
var s = document.querySelector('.three');
var t = document.querySelector('.completas');
var ula = "https://deevi-backend.herokuapp.com/api/user/get_comentarios";
var publis = [];
fetch(ula).then(function (res) {
  return res.json();
}).then(function (res) {
  var data_push = [];
  res.forEach(function (element) {
    data_push = ["".concat(element.titulo), "".concat(element.url_image), "".concat(element.fecha), []];
    data_push[3].push("".concat(element.descripcion[0][0]));

    for (var index = 1; index < element.descripcion[0].length; index++) {
      data_push[3].push("<br><br>".concat(element.descripcion[0][index]));
    }

    publis.push(data_push);
    console.log(publis);
  });
})["catch"](function (err) {
  return console.log(err);
});
setTimeout(function () {
  publis.forEach(function (publi) {
    s.innerHTML += "\n            <div class=\"blog-card ".concat(cls[hh], "\" style=\"background-image: url(").concat(publi[1], ")\">\n            <div class=\"meta\">\n                <ul class=\"details\">\n                    <li class=\"date\">").concat(publi[2], "</li>\n\n                </ul>\n            </div>\n            <div class=\"description\">\n                <h1>").concat(publi[0], "</h1>\n                <p>").concat(publi[3][0], "</p>\n                <p class=\"read-more\">\n                    <span class=\"art a").concat(i, "\">Read More</span>\n                </p>\n            </div>\n        </div>\n        ");
    cs.push("a".concat(i));
    t.innerHTML += "\n        <div class=\"box ".concat(cs[i], "\">\n            <div class=\"a\" style=\"background: linear-gradient(\n\t\t\t\t\t\t\trgba(0, 0, 0, 0.5),\n\t\t\t\t\t\t\trgba(0, 0, 0, 0.15)\n\t\t\t\t\t\t), url(").concat(publi[1], ") no-repeat;\tbackground-size: cover;\n\t\t\tbackground-position: center;\n\t\t\tbackground-repeat: no-repeat;\">\n                <span class=\"close ").concat(cs[i], "\">X</span>\n            </div>\n            <div class=\" b\">\n                <h2>").concat(publi[0], "</h2>\n                <div class=\"des\">\n                    \n                    ").concat(publi[3], "\n                </div>\n            </div>\n        </div>\n        ");
    i++;

    if (hh == 0) {
      hh = 1;
    } else {
      hh = 0;
    }
  });
  var inputs = undefined;
  var completas = document.querySelector('.completas');
  setTimeout(function () {
    inputs = document.querySelectorAll('span.art');

    function selectedInput(event) {
      var input = this.target;

      if (completas.classList.contains('act')) {
        completas.classList.remove('act');
      } else {
        completas.classList.add('act');
        var ff = document.querySelector(".box.".concat(this.classList.value.split(' ')[1]));
        ff.setAttribute('style', 'display: block !important;');
        var close = document.querySelector(".close.".concat(this.classList.value.split(' ')[1]));
        close.addEventListener('click', function () {
          ff.setAttribute('style', 'display: none !important;');
          completas.classList.remove('act');
        });
      }
    }

    inputs.forEach(function (input) {
      return input.addEventListener('click', selectedInput);
    });
  }, 100);
}, 2000);