$(document).ready(function () {
    var currentAsset = 0;
    var totalAsset = $('.asset-rows .parent .carousel .onerow').size();
    var Assetsbulletsize = totalAsset / 3;
    var Assetbulletlist = "";
    for (var a = 0; a < Assetsbulletsize ; a++) {
        Assetbulletlist += "<li><a><span class='circle span-color-gray'></span></a></li>";
    }
    $('.Assetlistbullets').html(Assetbulletlist);
    for (var a = 0; a < Assetsbulletsize ; a++) {
        $('.Assetlistbullets span').eq(a).html(a + 1);
    }
    $('.Assetlistbullets li').live("click", function () {
        inda = $(this).index();
        loadAsset(inda);
    });
    $('.Assetlistbullets li').eq(0).click
    //////////////////////////////////
    $('.asset-rows .parent .carousel .onerow').each(function () {
        $(this).find('.viewmore').click(function () {
            $('.viewpopup').addClass('display');
            $('.viewpopup').find('.txt').html($(this).parent().find('p').html());
        });
    });
    ////////////////////////////////////////////
    $('.overlay-close2').click(function () {
        $('.viewpopup').removeClass('display');
        // $('.viewpopup .asset-txt').hide();

    });
});
//////////////////////////////////////////////
function loadAsset(a) {
    $('.Assetlistbullets a span').removeClass("span-color-gold");
    $('.Assetlistbullets li').eq(a).find('a span').addClass("span-color-gold");
    $('.asset-rows .parent .carousel').animate({ "margin-top": a * (-1) * 150 });
}