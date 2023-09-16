$(document).ready(function () {
    var curentArticlelist = 0;
    var totalArticle = $('.article-rows .parent .carousel .onerow').size();
    var Articlebulletsize = totalArticle / 3;
    var Articlebulletlist = "";
    for (var b = 0; b < Articlebulletsize ; b++) {
        Articlebulletlist += "<li><a><span class='circle span-color-gray'></span></a></li>";
    }
    $('.Articlelistbullets').html(Articlebulletlist);
    for (var b = 0; b < Articlebulletsize ; b++) {
        $('.Articlelistbullets span').eq(b).html(b + 1);
    }
    $('.Articlelistbullets li').live("click", function () {
        R = $(this).index();
        loadArticle(R);
    });
    $('.Articlelistbullets li').eq(0).click

//////////////////////////////////
$('.article-rows .parent .carousel .onerow').each(function () {
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
function loadArticle(R) {
    $('.Articlelistbullets a span').removeClass("span-color-gold");
    $('.Articlelistbullets li').eq(R).find('a span').addClass("span-color-gold");
    $('.article-rows .parent .carousel').animate({ "margin-top":R * (-1) * 150 });
}
