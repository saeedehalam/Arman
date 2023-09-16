// BY ALIREZA_AHMADI@LIVE.COM
$(document).ready(function () {
    var firstscroll = 0;
    $('.Top').slideUp();
    if (!($.browser.msie || $.browser.webkit)) {
        $("#sectionone").mousewheel(function (objEvent, intDelta) {
            if (intDelta > 0) {

            }
            else if (intDelta < 0) {
                Gotosectiontwo();
               

            }
        });
        $("#sectiontwo").mousewheel(function (objEvent, intDelta) {
            if (intDelta > 0) {
                Gotosectionone();
                firstscroll = 0;
            }
            else if (intDelta < 0) {
                if (firstscroll == 0) {
                    Gotosectiontree()
                    firstscroll = 1;

                }
                else {
                    Gotosectiontree();

                }
            }
        });
        $("#sectiontree").mousewheel(function (objEvent, intDelta) {
            if (intDelta > 0) {
                Gotosectiontwo();

            }
            else if (intDelta < 0) {
                Gotosectionfour();

            }
        });
        $("#sectionfour").mousewheel(function (objEvent, intDelta) {
            if (intDelta > 0) {
                Gotosectiontree();

            }
            else if (intDelta < 0) {
                Gotosectionfive();
            }
        });
        $("#sectionfive").mousewheel(function (objEvent, intDelta) {
            if (intDelta > 0) {
                Gotosectionfour();

            }
            else if (intDelta < 0) {
                Gotosectionsix();
            }
        });
        $("#sectionsix").mousewheel(function (objEvent, intDelta) {
            if (intDelta > 0) {
                Gotosectionfive();

            }
            else if (intDelta < 0) {
                GotoFooter();
            }
        });

    }
    else {
        var firstscrolll = 0;
        $('#sectionone').bind('mousewheel  DOMMouseScroll', function (e) {
            e.stopImmediatePropagation();
            e.stopPropagation();
            e.preventDefault();
            var theEvent = e.originalEvent.wheelDelta || e.originalEvent.detail * -1
            if (theEvent / 20 > 0) {

            }
            else {
                Gotosectiontwo();
                firstscrolll = 1;

            }
        });
        $('#sectiontwo').bind('mousewheel  DOMMouseScroll', function (e) {
            e.stopImmediatePropagation();
            e.stopPropagation();
            e.preventDefault();
            var theEvent = e.originalEvent.wheelDelta || e.originalEvent.detail * -1
            if (theEvent / 20 > 0) {
                Gotosectionone();
                firstscrolll = 0;
            }
            else {
                if (firstscrolll == 0) {
                    Gotosectionone();
                    firstscrolll = 1;
                }
                else {
                    Gotosectiontree();
                }
            }
        });
        $('#sectiontree').bind('mousewheel  DOMMouseScroll', function (e) {
            e.stopImmediatePropagation();
            e.stopPropagation();
            e.preventDefault();
            var theEvent = e.originalEvent.wheelDelta || e.originalEvent.detail * -1
            if (theEvent / 20 > 0) {
                Gotosectiontwo();

            }
            else {
                Gotosectionfour();

            }
        });
        $('#sectionfour').bind('mousewheel  DOMMouseScroll', function (e) {
            e.stopImmediatePropagation();
            e.stopPropagation();
            e.preventDefault();
            var theEvent = e.originalEvent.wheelDelta || e.originalEvent.detail * -1
            if (theEvent / 120 > 0) {
                Gotosectiontree();

            }
            else {
                Gotosectionfive();

            }
        });
        $('#sectionfive').bind('mousewheel  DOMMouseScroll', function (e) {
            e.stopImmediatePropagation();
            e.stopPropagation();
            e.preventDefault();
            var theEvent = e.originalEvent.wheelDelta || e.originalEvent.detail * -1
            if (theEvent / 120 > 0) {
                Gotosectionfour();

            }
            else {
                Gotosectionsix();
            }
        });
        $('#sectionsix').bind('mousewheel  DOMMouseScroll', function (e) {
            e.stopImmediatePropagation();
            e.stopPropagation();
            e.preventDefault();
            var theEvent = e.originalEvent.wheelDelta || e.originalEvent.detail * -1
            if (theEvent / 120 > 0) {
                Gotosectionfive();

            }
            else {
                GotoFooter();
            }
        });
        $('footer').bind('mousewheel  DOMMouseScroll', function (e) {
            e.stopImmediatePropagation();
            e.stopPropagation();
            e.preventDefault();
            var theEvent = e.originalEvent.wheelDelta || e.originalEvent.detail * -1
            if (theEvent / 120 > 0) {
                Gotosectionsix();

            }
            else {
                GotoFooter();
            }
        });
    }
});
/*//////////////////////////////////*/
function Gotosectionone() {
    $('html,body').dequeue().stop().animate({ scrollTop: $("#sectionone").offset().top }, 1500);
    $('nav ul li a').removeClass("selected");
}
function Gotosectiontwo() {
    $('html,body').dequeue().stop().animate({ scrollTop: $("#sectiontwo").offset().top }, 1500);
    $('nav ul li a').removeClass("selected");
    $('nav  ul li a').eq(0).addClass("selected");
}
function Gotosectiontree() {
    $('html,body').dequeue().stop().animate({ scrollTop: $("#sectiontree").offset().top }, 1500);
    $('nav ul li a').removeClass("selected");
    $('nav  ul li a').eq(1).addClass("selected");
}
function Gotosectionfour() {
    $('html,body').dequeue().stop().animate({ scrollTop: $("#sectionfour").offset().top }, 1500);
    $('nav ul li a').removeClass("selected");
    $('nav  ul li a').eq(2).addClass("selected");
}
function Gotosectionfive() {
    $('html,body').dequeue().stop().animate({ scrollTop: $("#sectionfive").offset().top }, 1500);
    $('nav ul li a').removeClass("selected");
    $('nav  ul li a').eq(3).addClass("selected");
}
function Gotosectionsix() {
    $('html,body').dequeue().stop().animate({ scrollTop: $("#sectionsix").offset().top }, 1500);
    $('nav ul li a').removeClass("selected");
    $('nav  ul li a').eq(4).addClass("selected");
}
function GotoFooter() {
    $('html,body').dequeue().stop().animate({ scrollTop: $("footer").offset().top }, 1500);
    $('nav ul li a').removeClass("selected");
    $('nav  ul li a').eq(5).addClass("selected");
}


/////////////////////////////////////////////
$(document).ready(function () {
    $('#A').click(function () {
         var ind=$(this).index();
        Gotosectiontwo();
        $('nav ul li a').removeClass("selected");
        $('nav  ul li a').eq(ind).addClass("selected");
    });
    $('#B').click(function () {
        var ind = $(this).index();
        $('nav ul li a').removeClass("selected");
        $('nav  ul li a').eq(ind).addClass("selected");
        Gotosectiontree();
    });
    $('#C').click(function () {
        var ind = $(this).index();
        $('nav ul li a').removeClass("selected");
        $('nav  ul li a').eq(ind).addClass("selected");
        Gotosectionfour();
    });
    $('#D').click(function () {
        var ind = $(this).index();
        $('nav ul li a').removeClass("selected");
        $('nav  ul li a').eq(ind).addClass("selected");
        Gotosectionfive();
    });
    $('#E').click(function () {
        var ind = $(this).index();
        $('nav ul li a').removeClass("selected");
        $('nav  ul li a').eq(ind).addClass("selected");
        Gotosectionsix();
    });
    

});