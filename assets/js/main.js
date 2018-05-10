function windowResize() {
    screW = window.innerWidth;
    screH = window.innerHeight;
    screHH = (screH / 2);
    screHW = (screW / 2);
}
$(document).ready(function() {
    // pega o tamanho da janela ao carregar o documento
    windowResize();
    $(window).resize(function() {
        // pega tamanhos sempre que a tela for redimensionada
        windowResize();
    });



    // menu toggle

    $("#menu-toggle").click(function(e){
        e.preventDefault();
        $("#header").toggleClass('open');
    });

    
    // ajusta imagens as figures
    $("figure.fit").each(function(){
        var $img = $(this).children("img");
        if ($img) {
            $(this).css('background-image', 'url(\'' + $img.attr('src') + '\')');
            $img.hide();
        }
    });

     jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 50) {
            jQuery("header").addClass('top-fixed');
        } else {
         jQuery("header").removeClass('top-fixed');
     }

    });

      // carrossel banner home
    $("#home-banner-carousel").owlCarousel({
        items: 1,
        nav: false,
        dots: true,
        loop: true,

        responsive: {
            0: { items: 1, },
            450: { items: 1, },
            768: { items: 1, },
            992: { items: 1, },
        },
    });
    $('.jarallax').jarallax({
        speed: 0.2
    });
    
});