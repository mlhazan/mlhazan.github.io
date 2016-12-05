$(document).ready(function() {
    $("#test-circle").circliful({
        animationStep: 5,
        foregroundBorderWidth: 5,
        backgroundBorderWidth: 15,
        percent: 75
    });
});
$(document).ready(function() {

    $(window).scroll(function() {
        //if you hard code, then use console
        //.log to determine when you want the
        //nav bar to stick.
        console.log($(window).scrollTop())
        if ($(window).scrollTop() > 280) {
            $('#menu').addClass('nav');
        }
        if ($(window).scrollTop() < 281) {
            $('#menu').removeClass('nav');
        }
    });
});
