// mobile menu 
let navs = document.querySelector('.primary-navs')
let menuIcon = document.querySelectorAll('.menu-toggle')
console.log(navs, menuIcon);
menuIcon.forEach(function (e) {
    e.addEventListener('click', function () {
        navs.classList.toggle('active');
    });
});
$(document).ready(function () {
    $("#search-btn").click(function () {
        $("#searchInput").toggle(500)
    })
})

let backToTop = $('.back-to-top');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        backToTop.addClass('show');
    } else {
        backToTop.removeClass('show');
    }
});

backToTop.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});