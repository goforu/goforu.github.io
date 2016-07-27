(function ($) {
    //$.material.init();
    $(window).on('load', function () {
        //var baloon = $('.btn-floating');
        //function runIt() {
        //    baloon.animate({top:'+=20'}, 500);
        //    baloon.animate({top:'-=20'}, 500, runIt);
        //}
        //runIt();
    });
    $(document).ready(function () {
        $(".button-collapse").sideNav();
        $('.collapsible').collapsible();
        //registerFire();
        skillInit();
        //registerSmoothScroll();
        new WOW().init();
        //$('.wrap-greeting-content').addClass('animated fadeInUp');
    });


    //register trigger fire
    function registerFire() {
        var options = [
            {
                selector: '#js', offset: 100, callback: function (el) {
                skillAnim(el);
            }
            },
            {
                selector: '#html', offset: 100, callback: function (el) {
                skillAnim(el);
            }
            },
            {
                selector: '#css', offset: 100, callback: function (el) {
                skillAnim(el);
            }
            },
            {
                selector: '#android', offset: 100, callback: function (el) {
                skillAnim(el);
            }
            },
            {
                selector: '#java', offset: 100, callback: function (el) {
                skillAnim(el);
            }
            }
        ];
        Materialize.scrollFire(options);
    }

    function skillInit(){
        $('#skill').find('.determinate').each(function(i,p) {
            $(this).css('width', $(this).text());
        });
    }

    //skill anim
    function skillAnim(el) {
        var percent = $(el).attr('data');
        $(el).animate({
            width: percent
        }, 1000, "linear", function () {
            $(el).find('.badge-tooltips').animate({
                opacity: 1
            }, 500);
        });
    }

    //smooth scroll
    function registerSmoothScroll() {
        $('a').click(function (event) {
            event.preventDefault();
            var link = this;
            $.smoothScroll({
                scrollTarget: link.hash
            });
        })
    }
})(jQuery);