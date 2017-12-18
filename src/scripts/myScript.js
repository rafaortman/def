$(document).ready(function(){
    $('body').on('click','.menu-bt', function(){
        $('.menu').toggleClass('show');
    });

    $('body').on('click','.sub-menu-bt', function(){
        $('.sub-menu').toggleClass('show');
    });

    $('body').on('click','.sub-menu a', function(){
        $('.sub-menu').removeClass('show');
    });

    $('body').on('click','.sub-menu a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top + 1)
        }, 1250, 'easeInOutExpo'); 
        event.preventDefault();
    })

    $('body').on('click', 'section, main, footer, .logo', function(){
        $('.sub-menu').removeClass('show');
        $('.menu').removeClass('show');
    });

    $('#cabecalho-principal').load('include/topo.html');
    $('#rodape-principal').load('include/rodape.html');
    
    //smoothscrolling
    $('a.page-scroll').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top + 1)
        }, 1250, 'easeInOutExpo'); 
        event.preventDefault();
    }); 


    //adjust height of .fullheight elements on window resize
    // var wheight = $(window).height(); //get the height of the window
    // $('.fullheight').css('height', wheight); //set to window tallness
    // $(window).resize(function() {
    //     wheight = $(window).height(); //get the height of the window
    //     $('.fullheight').css('height', wheight); //set to window tallness
    // });
    // console.log(wheight);

    //onscreen
    // $('header').onScreen({
    //     visible: function() {
    //         $('nav').addClass("hide");
    //     },
    //     hidden: function() {
    //         $('nav').removeClass("hide");
    //     }
    // });

    //scrollreveal
    // window.sr = ScrollReveal({ reset: true });
    // sr.reveal('h1'); 

    //fade slideshow
    // $("#slideshow > div:gt(0)").hide();
    // setInterval(function() {
    //     $('#slideshow > div:first')
    //     .fadeOut(1000)
    //     .next()
    //     .fadeIn(1000)
    //     .end()
    //     .appendTo('#slideshow');
    // }, 3000);

    // Initialize and Configure Magnific Popup Lightbox Plugin
    // $('.popup-gallery').magnificPopup({
    //     delegate: 'a',
    //     type: 'image',
    //     tLoading: 'Loading image #%curr%...',
    //     mainClass: 'mfp-img-mobile',
    //     gallery: {
    //         enabled: true,
    //         navigateByImgClick: true,
    //         preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    //     },
    //     image: {
    //         tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    //     }
    // });
    // $('.gallery').each(function() { // the containers for all your galleries
    //     $(this).magnificPopup({
    //         delegate: 'a', // the selector for gallery item
    //         type: 'image',
    //         gallery: {
    //           enabled:true
    //         }
    //     });
    // });
});










