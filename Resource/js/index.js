$(document).ready(function () {
    $('.preLoader').fadeOut(1200);
    // sectionone
    $('.sectionone .sectionbg').addClass('c');
    //$('.sectionone .sectionbg ss').addClass('cc');
    $('.sectionone .sectionbg').addClass('slide');
    $('.sectionone .biglogo').addClass('fadeIn');
    $('.sectionone .logo').addClass('logoslideup');
    $('.sectionone .searchicon').addClass('logoslideup');
    ////overlay-contactus
    $('.link--ilin').click(function () {
        $('.overlay-contactus').addClass('opencontact');
    });
    $('.overlay-contactus .overlay-close').click(function () {
        $('.overlay-contactus').removeClass('opencontact');
        //muted video
        var myVideo = iframe.getElementById('video1');
        myVideo.mute();
    });
});
$(window).scroll(function () {
    var topwindow = $(window).scrollTop();
    var pose = $('.sectiontwo').offset().top;
    if (pose < topwindow + 200) {
        // section2          
        $('.sectiontwo .bg2').addClass('bg2transformx');
        $('.sectiontwo .cmp2').addClass('cmp2transformx');
        $('.sectiontwo .Acharacter').addClass('fadeIn');
        $('.ourcompany li:nth-child(1)').addClass('li1');
        $('.ourcompany li:nth-child(2)').addClass('li2');
        $('.ourcompany li:nth-child(3)').addClass('li3');
        $('.ourcompany li:nth-child(4)').addClass('li4');
        $('.ourcompany li:nth-child(5)').addClass('li5');
        $('.ourcompany li a').addClass('acompany');
        $('.two-content p').addClass('logoslideup');
        $('.two-content .twotitle').addClass('stretchRight');
        $('.sectiontwo .logo').addClass('logoslideup');
        $('.sectiontwo .searchicon').addClass('logoslideup');
        ////overlay-company1
        $('.ourcompany li:nth-child(1) a').click(function () {
            $('.sectiontwo .overlay-company1').addClass('openn');
        });
        $('.sectiontwo .overlay-company1 .overlay-close').click(function () {
            $('.sectiontwo .overlay-company1').removeClass('openn');
        });
        //overlay-company2
        $('.ourcompany li:nth-child(2) a').click(function () {
            $('.sectiontwo .overlay-company2').addClass('openn');
        });
        $('.sectiontwo .overlay-company2 .overlay-close').click(function () {
            $('.sectiontwo .overlay-company2').removeClass('openn');
        });
        //overlay-company3
        $('.ourcompany li:nth-child(3) a').click(function () {
            $('.sectiontwo .overlay-company3').addClass('openn');
        });
        $('.sectiontwo .overlay-company3 .overlay-close').click(function () {
            $('.sectiontwo .overlay-company3').removeClass('openn');
        });
        //overlay-company4
        $('.ourcompany li:nth-child(4) a').click(function () {
            $('.sectiontwo .overlay-company4').addClass('openn');
        });
        $('.sectiontwo .overlay-company4 .overlay-close').click(function () {
            $('.sectiontwo .overlay-company4').removeClass('openn');
        });
        //overlay-company5
        $('.ourcompany li:nth-child(5) a').click(function () {
            $('.sectiontwo .overlay-company5').addClass('openn');
        });
        $('.sectiontwo .overlay-company5 .overlay-close').click(function () {
            $('.sectiontwo .overlay-company5').removeClass('openn');
        });
    }
    //section3
    var pose3 = $('.sectiontree').offset().top;
    if (pose3 < topwindow + 200) {
        $('.sectiontree .Rcharacter').addClass('fadeIn');
        var mySVG = document.querySelector('.services #Layer_1');
        mySVG.setAttribute('class', 'path');
        $('.services li:nth-child(1) span').addClass('fadeinspan');
        $('.services li:nth-child(2) span').addClass('fadeinspan');
        $('.services li:nth-child(3) span').addClass('fadeinspan');
        $('.services li:nth-child(4) span').addClass('fadeinspan');
        $('.services li:nth-child(5) span').addClass('fadeinspan');
        $('.sectiontree .bg3').addClass('bg3transformx');
        $('.sectiontree .cmp3').addClass('bg3transformx');
        $('.tree-content .treetitle').addClass('stretchRight');
        $('.sectiontree .logo').addClass('logoslideup');
        $('.sectiontree .searchicon').addClass('logoslideup');
        //overlay-door1
        $('.services li:nth-child(1) span').click(function () {
            $('.sectiontree .overlay-door1').addClass('open');
        });
        $('.sectiontree .overlay-door1 .overlay-close').click(function () {
            $('.sectiontree .overlay-door1').removeClass('open');
        });
        //overlay-door2
        $('.services li:nth-child(2) span').click(function () {
            $('.sectiontree .overlay-door2').addClass('open');
        });
        $('.sectiontree .overlay-door2 .overlay-close').click(function () {
            $('.sectiontree .overlay-door2').removeClass('open');
        });
        //overlay-door3
        $('.services li:nth-child(3) span').click(function () {
            $('.sectiontree .overlay-door3').addClass('open');
        });
        $('.sectiontree .overlay-door3 .overlay-close').click(function () {
            $('.sectiontree .overlay-door3').removeClass('open');
        });
        //overlay-door4
        $('.services li:nth-child(4) span').click(function () {
            $('.sectiontree .overlay-door4').addClass('open');
        });
        $('.sectiontree .overlay-door4 .overlay-close').click(function () {
            $('.sectiontree .overlay-door4').removeClass('open');
        });
        //overlay-door5
        $('.services li:nth-child(5) span').click(function () {
            $('.sectiontree .overlay-door5').addClass('open');
        });
        $('.sectiontree .overlay-door5 .overlay-close').click(function () {
            $('.sectiontree .overlay-door5').removeClass('open');
        });
    }
    //section4
    var pose4 = $('.sectionfour').offset().top;
    if (pose4 < topwindow + 450) {
        $('.sectionfour .bg4').addClass('bg4transform');
        $('.sectionfour .cmp4').addClass('bg4transform');
        $('.sectionfour .Mcharacter').addClass('fadeIn');
        $('.four-content p').addClass('logoslideup');
        $('.market li').addClass('stretchRight');
        $('.four-content .fourtitle').addClass('stretchRight');
        $('.sectionfour .logo').addClass('logoslideup');
        $('.sectionfour .searchicon').addClass('logoslideup');

        ////overlay-market1
        $('.market li:nth-child(1)').click(function () {
            $('.sectionfour .overlay-market1').addClass('opennn');
        });
        $('.sectionfour .overlay-market1 .overlay-close').click(function () {
            $('.sectionfour .overlay-market1').removeClass('opennn');
        });
        //overlay-market2
        $('.market li:nth-child(2)').click(function () {
            $('.sectionfour .overlay-market2').addClass('opennn');
        });
        $('.sectionfour .overlay-market2 .overlay-close').click(function () {
            $('.sectionfour .overlay-market2').removeClass('opennn');
        });
    }
    //section5
    var pose5 = $('.sectionfive').offset().top;
    if (pose5 < topwindow + 600) {
        $('.sectionfive .bg5').addClass('bg5transform');
        $('.sectionfive .cmp5').addClass('bg5transform');
        $('.sectionfive .A2character').addClass('fadeIn');
        $('.ourclients li').addClass('fadeIn');
        $('.five-content .fivetitle').addClass('stretchRight');
        $('.sectionfive .logo').addClass('logoslideup');
        $('.sectionfive .searchicon').addClass('logoslideup');
        ////overlay-clients1
        $('.ourclients li:nth-child(1) a').click(function () {
            $('.sectionfive .overlay-clients1').addClass('opennnn');
        });
        $('.sectionfive .overlay-clients1 .overlay-close').click(function () {
            $('.sectionfive .overlay-clients1').removeClass('opennnn');
        });
        //overlay-market2
        $('.ourclients li:nth-child(2) a').click(function () {
            $('.sectionfive .overlay-clients2').addClass('opennnn');
        });
        $('.sectionfive .overlay-clients2 .overlay-close').click(function () {
            $('.sectionfive .overlay-clients2').removeClass('opennnn');
        });
        //overlay-market3
        $('.ourclients li:nth-child(3) a').click(function () {
            $('.sectionfive .overlay-clients3').addClass('opennnn');
        });
        $('.sectionfive .overlay-clients3 .overlay-close').click(function () {
            $('.sectionfive .overlay-clients3').removeClass('opennnn');
        });
        //overlay-market4
        $('.ourclients li:nth-child(4) a').click(function () {
            $('.sectionfive .overlay-clients4').addClass('opennnn');
        });
        $('.sectionfive .overlay-clients4 .overlay-close').click(function () {
            $('.sectionfive .overlay-clients4').removeClass('opennnn');
        });
        //overlay-market5
        $('.ourclients li:nth-child(5) a').click(function () {
            $('.sectionfive .overlay-clients5').addClass('opennnn');
        });
        $('.sectionfive .overlay-clients5 .overlay-close').click(function () {
            $('.sectionfive .overlay-clients5').removeClass('opennnn');
        });
        //overlay-market5
        $('.ourclients li:nth-child(6) a').click(function () {
            $('.sectionfive .overlay-clients6').addClass('opennnn');
        });
        $('.sectionfive .overlay-clients6 .overlay-close').click(function () {
            $('.sectionfive .overlay-clients6').removeClass('opennnn');
        });
    }
    //section6
    var pose6 = $('.sectionsix').offset().top;
    if (pose6 < topwindow + 300) {
        $('.sectionsix .bg6').addClass('bg6transform');
        $('.sectionsix .cmp6').addClass('bg6transform');
        $('.sectionsix .Ncharacter').addClass('fadeIn');
        $('.resources li:nth-child(1)').addClass('fadeIn');
        $('.resources li:nth-child(2)').addClass('fadeIn');
        $('.resources li:nth-child(3)').addClass('fadeIn ');
        $('.six-content .sixtitle').addClass('stretchRight');
        $('.sectionsix .logo').addClass('logoslideup');
        $('.sectionsix .searchicon').addClass('logoslideup');
        ////overlay-resources1
        $('.resources li:nth-child(1)').click(function () {
            $('.sectionsix .overlay-resources1').addClass('opennnnn');
        });
        $('.sectionsix .overlay-resources1 .overlay-close').click(function () {
            $('.sectionsix .overlay-resources1').removeClass('opennnnn');
        });
        //overlay-resources2
        $('.resources li:nth-child(2)').click(function () {
            $('.sectionsix .overlay-resources2').addClass('opennnnn');
        });
        $('.sectionsix .overlay-resources2 .overlay-close').click(function () {
            $('.sectionsix .overlay-resources2').removeClass('opennnnn');
        });
        //overlay-resources3
        $('.resources li:nth-child(3)').click(function () {
            $('.sectionsix .overlay-resources3').addClass('opennnnn');
        });
        $('.sectionsix .overlay-resources3 .overlay-close').click(function () {
            $('.sectionsix .overlay-resources3').removeClass('opennnnn');
        });
    }
});

$(window).load(function () {
});