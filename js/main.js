$('body').hide();
$('.player').hide()

let play = $('.play'),
    pause = $('.pause'),
    o = $('.o'),
    m = $('.m'),
    a = $('.a');

let runaway = new Howl({
        src: ['assets/done_it_again.mp3'],
        format: 'mp3',
        buffer: false,
        autoplay: false,
        html5: true,
        preload: true
    });

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/.test(navigator.userAgent) ) {
    $(document).ready( () => {
            $('body').fadeIn(1200);
            $('.player').fadeIn(1250);
            flicker(a);
            flicker(o);
    });
} else {
    $(document).ready( () => {
            $('body').fadeIn(1000);
            flicker(a);
            flicker(o);
            runaway.play();
    });
}

function getAmplitudeValue() {
    return Math.random(.5, .75);
}

function flicker(letter) {
    setInterval( () => {
        $(letter).addClass('flicker');
        setTimeout( () => {
            $(letter).removeClass('flicker');
        }, Math.random(550, 1500));
    }, Math.random(1250, 4500))
}

$(document).ready( () => {
        $('body').fadeIn(1000);
        flicker(a);
        flicker(o);
});

$('.resource').on('mouseover', (e) => {
    $(e.target).removeClass('hover-off');
    $(e.target).addClass('hover-on');
});

$('.resource').on('mouseleave', (e) => {
    $(e.target).addClass('hover-off');
    $(e.target).removeClass('hover-on');
});

$(play).on('click', () => {
    play.hide();
    pause.show();
    runaway.play();

});

$(pause).on('click', () => {
    pause.hide();
    play.show();
    runaway.pause();
});