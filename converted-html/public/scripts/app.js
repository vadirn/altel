require.config({
    baseUrl: '/public/scripts/',
    paths: {
        // the left side is the module ID,
        // the right side is the path to
        // the jQuery file, relative to baseUrl.
        // Also, the path should NOT include
        // the '.js' file extension. This example
        // is using jQuery 1.9.0 located at
        // js/lib/jquery-1.9.0.js, relative to
        // the HTML page.
        jquery: 'bower_components/jquery/jquery.min',
        bootsrtap: 'app/bootstrap.min'
    }
});

require(['jquery'], function( $ ) {
    console.log( $ ); // OK
    require(['bootsrtap'], function() {
      $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this);
          $carousel.carousel($carousel.data());
        });
    });
    $('.drawer-title').bind('click', function(e) {
        e.preventDefault();
        console.log('click!');
        $(this).parents('.drawer').toggleClass('active');
    });

    var closeModal = function() {
        $('.modal.active').removeClass('active');
        $('body').removeClass('modal-open');
    };

    $('.modal, .modal-overlay').click(function(event) {
        modal = $(this);
        // if clicked anywhere else than modal body
        if (!$(event.target).closest('.box').length) {
            closeModal();
        }
    });
    $('.js-modal-close').bind('click', function(e) {
        closeModal();
    });
    $('.js-modal-open').bind('click', function(e) {
        e.preventDefault();
        // close previously opened modal
        $('.modal.active').removeClass('active');
        // which modal to show?
        var tgt = '#'+$(this).attr("data-target");
        $('body').toggleClass('modal-open');
        $(tgt).toggleClass('active');
    });
    $(document).keyup(function(e){
        var $bd = $("body");
        if(e.keyCode === 27 && $bd.hasClass('modal-open')) {
            closeModal();
        }
    });

    $(".js-acc-list .acc-list-item").bind('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
    });
});