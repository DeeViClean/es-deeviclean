// Sticky Header
$(window).scroll(function () {

    if ($(window).scrollTop() > 200) {
        $('.main_h').addClass('sticky');
    } else {
        $('.main_h').removeClass('sticky');
    }
});

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
});

// Navigation Scroll - ljepo radi materem
$('nav a').click(function (event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});
// swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 20,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true, type: "fraction",

    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swipper_cont = document.querySelector('.swiper-wrapper');
var url = "https://deevi-backend.herokuapp.com/api/user/getComments"
fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let resultado = document.querySelector('#resultado');

        let res_a_dividir = 0
        for (let index = 0; index < data.length; index++) {
            let input_select = "";
            if (data[index].comment[1][0] === "4" || data[index].comment[1][0] === "5") {
                switch (data[index].comment[1][0]) {
                    case "4":
                        res_a_dividir += 4;
                        input_select = `<input id="radio1" type="radio" name="estrellas" value="5" disabled>
                                    <label for="radio1">★</label>
                                    <input id="radio2" type="radio" name="estrellas" value="4" checked>
                                    <label for="radio2">★</label>
                                    <input id="radio3" type="radio" name="estrellas" value="3" disabled>
                                    <label for="radio3">★</label>
                                    <input id="radio4" type="radio" name="estrellas" value="2" disabled>
                                    <label for="radio4">★</label>
                                    <input id="radio5" type="radio" name="estrellas" value="1" disabled>
                                    <label for="radio5">★</label>`
                        break;
                    case "5":
                        res_a_dividir += 5;
                        input_select = `<input id="radio1" type="radio" name="estrellas" value="5" checked>

                                    <label for="radio1">★</label>
                                    <input id="radio2" type="radio" name="estrellas" value="4" disabled>
                                    <label for="radio2">★</label>
                                    <input id="radio3" type="radio" name="estrellas" value="3" disabled>
                                    <label for="radio3">★</label>
                                    <input id="radio4" type="radio" name="estrellas" value="2" disabled>
                                    <label for="radio4">★</label>
                                    <input id="radio5" type="radio" name="estrellas" value="1" disabled>
                                    <label for="radio5">★</label>`
                        break;


                    default:
                        res_a_dividir += 5;

                        input_select = `<input id="radio1" type="radio" name="estrellas" value="5" checked>

                                    <label for="radio1">★</label>
                                    <input id="radio2" type="radio" name="estrellas" value="4" disabled>
                                    <label for="radio2">★</label>
                                    <input id="radio3" type="radio" name="estrellas" value="3" disabled>
                                    <label for="radio3">★</label>
                                    <input id="radio4" type="radio" name="estrellas" value="2" disabled>
                                    <label for="radio4">★</label>
                                    <input id="radio5" type="radio" name="estrellas" value="1" disabled>
                                    <label for="radio5">★</label>`
                        break;
                }
                swipper_cont.innerHTML += `
                    <div class="swiper-slide">
                            <div class="texty">
                            ${data[index].comment[0][0]}
                            </div>
                            <div class="Author">
                                ${data[index].name}
                            </div>
                            <div id="form">
                                <form action="">
                                    <p class="clasificacion" style="font-size: 20px;">
                                        ${input_select}
                                    </p>
                                </form>
                            </div>
                        </div>
                `
            }

        }
        res_a_dividir += 9 + 9;
        swipper_cont.innerHTML += `
        <div class="swiper-slide">
                        <div class="texty">
                            Estoy encantada con la limpiezas express. No puedo decir nada malo, me han parecido super profesionales. me han dejado
                            estupendamente todo y de verdad recomiendo a todos que les llaméis.
                        </div>
                        <div class="Author">
                            Antonella Castro
                        </div>
                        <div id="form">
                            <form action="">
                                <p class="clasificacion" style="font-size: 20px;">
                                    <input id="radio1" type="radio" name="estrellas" value="5" checked>
                                    <label for="radio1">★</label>
                                    <input id="radio2" type="radio" name="estrellas" value="4" disabled>
                                    <label for="radio2">★</label>
                                    <input id="radio3" type="radio" name="estrellas" value="3" disabled>
                                    <label for="radio3">★</label>
                                    <input id="radio4" type="radio" name="estrellas" value="2" disabled>
                                    <label for="radio4">★</label>
                                    <input id="radio5" type="radio" name="estrellas" value="1" disabled>
                                    <label for="radio5">★</label>
                                </p>
                            </form>
                        </div>
                    </div>`;
        swipper_cont.innerHTML += `
        <div class="swiper-slide">
                        <div class="texty">
                            Somos asiduos desde hace tiempo y siempre aciertan.
                            He usado varias veces sus servicios y nos ha encantado la calidad de la limpieza.
                        </div>
                        <div class="Author">
                            Maria Rivadeneira
                        </div>
                        <div id="form">
                            <form action="">
                                <p class="clasificacion" style="font-size: 20px;">
                                    <input id="radio1" type="radio" name="estrellas" value="5" disabledc>
                                    <label for="radio1">★</label>
                                    <input id="radio2" type="radio" name="estrellas" value="4" checked>
                                    <label for="radio2">★</label>
                                    <input id="radio3" type="radio" name="estrellas" value="3" disabled>
                                    <label for="radio3">★</label>
                                    <input id="radio4" type="radio" name="estrellas" value="2" disabled>
                                    <label for="radio4">★</label>
                                    <input id="radio5" type="radio" name="estrellas" value="1" disabled>
                                    <label for="radio5">★</label>
                                </p>
                            </form>
                        </div>
                    </div>`;
        swipper_cont.innerHTML += `
        <div class="swiper-slide">
                        <div class="texty">
                            Todos son muy profesionales y respetuosos, el servicio que brindan me ha gustado.
                        </div>
                        <div class="Author">
                            Mario Bustamante
                        </div>
                        <div id="form">
                            <form action="">
                                <p class="clasificacion" style="font-size: 20px;">
                                    <input id="radio1" type="radio" name="estrellas" value="5" disabledc>
                                    <label for="radio1">★</label>
                                    <input id="radio2" type="radio" name="estrellas" value="4" checked>
                                    <label for="radio2">★</label>
                                    <input id="radio3" type="radio" name="estrellas" value="3" disabled>
                                    <label for="radio3">★</label>
                                    <input id="radio4" type="radio" name="estrellas" value="2" disabled>
                                    <label for="radio4">★</label>
                                    <input id="radio5" type="radio" name="estrellas" value="1" disabled>
                                    <label for="radio5">★</label>
                                </p>
                            </form>
                        </div>
                    </div>`;
        swipper_cont.innerHTML += `
        <div class="swiper-slide">
                        <div class="texty">
                            Estoy encantada con la limpiezas express. No puedo decir nada malo, me han parecido super profesionales. me han dejado
                            estupendamente todo y de verdad recomiendo a todos que les llaméis.
                        </div>
                        <div class="Author">
                            Antonella Castro
                        </div>
                        <div id="form">
                            <form action="">
                                <p class="clasificacion" style="font-size: 20px;">
                                    <input id="radio1" type="radio" name="estrellas" value="5" checked>
                                    <label for="radio1">★</label>
                                    <input id="radio2" type="radio" name="estrellas" value="4" disabled>
                                    <label for="radio2">★</label>
                                    <input id="radio3" type="radio" name="estrellas" value="3" disabled>
                                    <label for="radio3">★</label>
                                    <input id="radio4" type="radio" name="estrellas" value="2" disabled>
                                    <label for="radio4">★</label>
                                    <input id="radio5" type="radio" name="estrellas" value="1" disabled>
                                    <label for="radio5">★</label>
                                </p>
                            </form>
                        </div>
                    </div>`;
        swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 10,
            slidesPerGroup: 1,
            loop: true,
            loopFillGroupWithBlank: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true, type: "fraction",

            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
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

        resultado.innerHTML = `${res_a_dividir / 4}`
        setTimeout(() => {
            console.log(res_a_dividir / 4);
        }, 500);
    });

var mediaqueryList = window.matchMedia("(max-width: 500px)");
//swiper
if (mediaqueryList.matches) {
    swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true, type: "fraction",

        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

    });
}
// dropdown
$(document).ready(function () {
    $('#dropDown').click(function () {
        $('.drop-down').toggleClass('drop-down--active');
    });
});


