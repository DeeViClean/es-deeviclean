

// Sticky Header
$(window).scroll(function () {
    console.log($(window).scrollTop());
    if ($(window).scrollTop() >= 50) {
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


//vistas
const cls = ['_', 'alt']
let cs = []
let i = 0;
let hh = 0
const s = document.querySelector('.three');
const t = document.querySelector('.completas');
const ula = "https://deevi-backend.herokuapp.com/api/user/get_comentarios";
const publis = []
fetch(ula)
    .then(res => res.json())
    .then(res => {
        let data_push = [];
        res.forEach(element => {
            data_push = [
                `${element.titulo}`,
                `${element.url_image}`,
                `${element.fecha}`,
                []
            ];
            data_push[3].push(`${element.descripcion[0][0]}`);
            for (let index = 1; index < element.descripcion[0].length; index++) {
                data_push[3].push(`<br><br>${element.descripcion[0][index]}`);
            }
            publis.push(data_push);
            console.log(publis);
        });
    })
    .catch(err => console.log(err))



setTimeout(() => {
    publis.forEach(publi => {
        s.innerHTML += `
            <div class="blog-card ${cls[hh]}" style="background-image: url(${publi[1]})">
            <div class="meta">
                <ul class="details">
                    <li class="date">${publi[2]}</li>

                </ul>
            </div>
            <div class="description">
                <h1>${publi[0]}</h1>
                <p>${publi[3][0]}</p>
                <p class="read-more">
                    <span class="art a${i}">Read More</span>
                </p>
            </div>
        </div>
        `;

        cs.push(`a${i}`)
        t.innerHTML += `
        <div class="box ${cs[i]}">
            <div class="a" style="background: linear-gradient(
							rgba(0, 0, 0, 0.5),
							rgba(0, 0, 0, 0.15)
						), url(${publi[1]}) no-repeat;	background-size: cover;
			background-position: center;
			background-repeat: no-repeat;">
                <span class="close ${cs[i]}">X</span>
            </div>
            <div class=" b">
                <h2>${publi[0]}</h2>
                <div class="des">
                    
                    ${publi[3]}
                </div>
            </div>
        </div>
        `

        i++;
        if (hh == 0) {

            hh = 1;
        } else {
            hh = 0;
        }

    })
    let inputs = undefined
    const completas = document.querySelector('.completas');
    setTimeout(() => {
        inputs = document.querySelectorAll('span.art');
        function selectedInput(event) {
            let input = this.target;
            if (completas.classList.contains('act')) {
                completas.classList.remove('act');
            } else {
                completas.classList.add('act');
                const ff = document.querySelector(`.box.${this.classList.value.split(' ')[1]}`);
                ff.setAttribute('style', 'display: block !important;');

                const close = document.querySelector(`.close.${this.classList.value.split(' ')[1]}`);
                close.addEventListener('click', () => {
                    ff.setAttribute('style', 'display: none !important;');
                    completas.classList.remove('act');
                })
            }
        }
        inputs.forEach(input => input.addEventListener('click', selectedInput));
    }, 100);
}, 2000);
