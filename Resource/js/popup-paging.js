$(document).ready(function () {
    var curentnewslist = 0;
    var totalnews = $('.rows .parent .carousel .onerow').size();  
    var newsbulletsize = totalnews / 3;
    var Newsbulletlist = "";
    
    //////////////////////////////////////////////////////////////////////////////////////////
    for (var i = 0; i < newsbulletsize ; i++) {
        Newsbulletlist += "<li><a><span class='circle span-color-gray'></span></a></li>";
    }
    $('.Newslistbullets').html(Newsbulletlist);
    for (var i = 0; i < newsbulletsize ; i++) {
        $('.Newslistbullets span').eq(i).html(i+1);
    }
   
    $('.Newslistbullets li').live("click", function () {
        ind = $(this).index();
        loadNews(ind);
    });
    $('.Newslistbullets li').eq(0).click
    //////////////////////////////////
    $('.rows .parent .carousel .onerow').each(function () {
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

function loadNews(i) {
    $('.Newslistbullets a span').removeClass("span-color-gold");
    $('.Newslistbullets li').eq(i).find('a span').addClass("span-color-gold");  
    $('.rows .parent .carousel').animate({ "margin-top": i * (-1) * 150 });
}




