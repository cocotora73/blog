'use strict'

function FixedAnime() {
    let headerH = $('#header').outerHeight(true);
    let scroll = $(window).scrollTop();

    if(scroll >= headerH) {
        $('.openbtn').addClass('fadeDown');
        $('#header').addClass('dnone');
    } else {
        $('.openbtn').removeClass('fadeDown');
        $('#header').removeClass('dnone');
    }
}

$(window).scroll(function() {
    FixedAnime();
});

$('.openbtn').click(function() {
    $(this).toggleClass('active');
    $('#header').toggleClass('panelactive');
});



