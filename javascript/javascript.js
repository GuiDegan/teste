/*----------------------------ANIMAÇÃO LIQUIDAÇÃO-----------------------*/
var root = document.documentElement;
root.className += ' js';

function boxTop(idBox) {
    var boxOffset = $(idBox).offset().top;
    return boxOffset;
}

$(document).ready(function () {
    var $target = $('.anim-liquidacao'),
        animationClass = 'anim-liquidacao-init',
        windowHeight = $(window).height(),
        offset = windowHeight - (windowHeight / 4);

    function animeScroll() {
        var documentTop = $(document).scrollTop();
        $target.each(function () {
            if (documentTop > boxTop(this) - offset) {
                $(this).addClass(animationClass);
            } else {
                $(this).removeClass(animationClass);
            }
        });
    }
    animeScroll();

    $(document).scroll(function () {
        setTimeout(function () { animeScroll() }, 0);
    });
});

/*--------------------------ANIMAÇÃO SOMOS/TECNOLOGIA--------------------*/
var root = document.documentElement;
root.className += ' js';

function boxTop(idBox) {
    var boxOffset = $(idBox).offset().top;
    return boxOffset;
}

$(document).ready(function () {
    var $target = $('.anim-somos_tec'),
        animationClass = 'anim-somos_tec-init',
        windowHeight = $(window).height(),
        offset = windowHeight - (windowHeight / 4);

    function animeScroll() {
        var documentTop = $(document).scrollTop();
        $target.each(function () {
            if (documentTop > boxTop(this) - offset) {
                $(this).addClass(animationClass);
            } else {
                $(this).removeClass(animationClass);
            }
        });
    }
    animeScroll();

    $(document).scroll(function () {
        setTimeout(function () { animeScroll() }, 0);
    });
});
