/* Circle Progress */


$(window).scroll(function() {
    var windowWidth = $(this).width();
    var windowHeight = $(this).height();
    var windowScrollTop = $(this).scrollTop();

    if (windowScrollTop > 760 && $('#circle').is(':hidden')) {
        $('#circle').show('normal', function() {
            $(this).circleProgress({
                value: 0.75,
                size: 180,
                fill: {
                    gradient: ["lightblue", "grey"]
                }
            });
        });
    }
    if (windowScrollTop < 760 && $('#circle').is(':visible')) {
        $('#circle').hide();
    }
});
