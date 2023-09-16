$(document).ready(function () {
    $('.searchicon').click(function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        }
        else {
            $(this).addClass('active');
        }
        $('.searchpanel').slideToggle(300);
    });
});


