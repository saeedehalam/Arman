$(document).ready(function () {
    var curentMedialist = 0;
    var totalMedia = $('.Media-rows .parent .carousel .onerow').size();
    var Mediabulletsize = totalMedia / 3;
    var Mediabulletlist = "";
    for (var c = 0; c < Mediabulletsize ; c++) {
        Mediabulletlist += "<li><a><span class='circle span-color-gray'></span></a></li>";
    }
    $('.Medialistbullets').html(Mediabulletlist);
    for (var c = 0; c < Mediabulletsize ; c++) {
        $('.Medialistbullets span').eq(c).html(c + 1);
    }
    $('.Medialistbullets li').live("click", function () {
       M = $(this).index();
        loadMedia(M);
    });
    $('.Medialistbullets li').eq(0).click

    //////////////////////////////////
    $('.Media-rows .parent .carousel .onerow').each(function () {
        $(this).find('.viewmore').click(function () {
            $('.viewpopup').addClass('display');
            $('.viewpopup').find('.txt').html($(this).parent().find('p').html());
        });
    });
    $('.overlay-close2').click(function () {
        $('.viewpopup').removeClass('display');
        // $('.viewpopup .asset-txt').hide();

    });
});
//////////////////////////////////////////////
function loadMedia(M) {
    $('.Medialistbullets a span').removeClass("span-color-gold");
    $('.Medialistbullets li').eq(M).find('a span').addClass("span-color-gold");
    $('.Media-rows .parent .carousel').animate({ "margin-top": M * (-1) * 150 });
}
