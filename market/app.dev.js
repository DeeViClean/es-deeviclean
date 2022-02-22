"use strict";

// Mobile Navigation
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
});
var swiper = new Swiper('.product-slider', {
  spaceBetween: 30,
  effect: 'fade',
  // initialSlide: 2,
  loop: false,
  navigation: {
    nextEl: '.next',
    prevEl: '.prev'
  },
  // mousewheel: {
  //     // invert: false
  // },
  on: {
    init: function init() {
      var index = this.activeIndex;
      var target = $('.product-slider__item').eq(index).data('target');
      console.log(target);
      $('.product-img__item').removeClass('active');
      $('.product-img__item#' + target).addClass('active');
    }
  }
});
swiper.on('slideChange', function () {
  var index = this.activeIndex;
  var target = $('.product-slider__item').eq(index).data('target');
  console.log(target);
  $('.product-img__item').removeClass('active');
  $('.product-img__item#' + target).addClass('active');

  if (swiper.isEnd) {
    $('.prev').removeClass('disabled');
    $('.next').addClass('disabled');
  } else {
    $('.next').removeClass('disabled');
  }

  if (swiper.isBeginning) {
    $('.prev').addClass('disabled');
  } else {
    $('.prev').removeClass('disabled');
  }
});
var salidoooo = document.querySelector('.salidoooo');

function toggle_salidoooo() {
  salidoooo.classList.toggle('desapareciooo');
}

$(".js-fav").on("click", function () {
  $(this).find('.heart').toggleClass("is-active");
});
var pauseButton = document.querySelector('.pause');
var vid = document.getElementById("bgvid");
pauseButton.addEventListener("click", function () {
  vid.classList.toggle("stopfade");

  if (vid.paused) {
    vid.play();
    pauseButton.innerHTML = "Pause";
  } else {
    vid.pause();
    pauseButton.innerHTML = "Play";
  }
});