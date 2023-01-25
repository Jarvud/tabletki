$(document).ready(function () {
    function startTimer(duration) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            $("#time").html(minutes + ":" + seconds);

            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }
    startTimer(30 * 60);
});

$("#order-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#order-form").offset().top
    }, 1000);
});