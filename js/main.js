(function ($) {
    $(window).on('load', function () {
        //fade out preloader
        //渐隐加载器
        fadeOutPreloader();
    });
    $(document).ready(function () {
        //init mobile side bar
        //初始化手机导航栏
        $(".button-collapse").sideNav();
        //register scrollfire
        //注册滚轮事件
        registerScrollFire();
        //init skill width
        //初始化技能长度
        initSkillData();
        //register smooth scroll
        //注册平滑滚动
        registerSmoothScroll();
        //init modal
        //初始化弹出面板
        $('.modal-trigger').leanModal();
        //observe nav bar
        //监视导航栏
        observeNavBarHidden();
    });


    //register scroll fire
    //注册滚轮事件
    function registerScrollFire() {
        function calHeight(el) {
            return Math.min(Math.round($(el).css('height').replace('px', '')), $(window).height() * 0.5);
        }

        var options = [
            {
                selector: '#skillBar', offset: calHeight('#skillBar'), callback: function (el) {
                Materialize.showStaggeredList('#skillBar');
            }
            },
            {
                selector: '#self', offset: calHeight('#self'), callback: function (el) {
                $(el).addClass('slideInUp');
            }
            },
            {
                selector: '#ncepu', offset: calHeight('#ncepu'), callback: function (el) {
                setTimeout(function () {
                    $(el).addClass('slideInUp');
                }, 400);
            }
            },
            {
                selector: '#ibm', offset: calHeight('#ibm'), callback: function (el) {
                $(el).addClass('slideInUp');
            }
            },
            {
                selector: '#gallery', offset: calHeight('#gallery'), callback: function (el) {
                animChildrenBounceIn(el);
            }
            },
            {
                selector: '#gallery1', offset: calHeight('#gallery'), callback: function (el) {
                animChildrenBounceIn(el);
            }
            },
            {
                selector: '#gallery2', offset: calHeight('#gallery'), callback: function (el) {
                animChildrenBounceIn(el);
            }
            }
        ];
        Materialize.scrollFire(options);
    }

    //init skill width
    //初始化技能长度
    function initSkillData() {
        $('#skill').find('.determinate').each(function (i, p) {
            $(this).css('width', $(this).text());
        });
    }

    //register smooth scroll
    //注册平滑滚动
    function registerSmoothScroll() {
        $('a.guide').click(function (event) {
            event.preventDefault();
            var link = this;
            $.smoothScroll({
                scrollTarget: link.hash
            });
            if($(this).hasClass('sidebar')){
                $('.button-collapse').sideNav('hide');
            }
        })
    }

    function animChildrenBounceIn(el) {
        var delay = 0;
        $(el).children().each(function (i, p) {
            setTimeout(function () {
                $(p).addClass("bounceIn");
                $(p).css({opacity: 1});
            }, delay += 100);
        });
    }

    //fade out preloader
    //渐隐加载器
    function fadeOutPreloader() {
        $("#preloader").delay(450).fadeOut("slow").find('.preloader-container').fadeOut();
    }

    //observe nav bar
    //监视导航栏
    function observeNavBarHidden() {
        var $nav = $('#nav');
        var previousScroll = $(window).scrollTop();
        var isUp = false;
        $(window).scroll(function () {
            var currentScroll = $(this).scrollTop();
            if (currentScroll > previousScroll && !isUp) {
                $nav.addClass('nav-hide');
                isUp = true;
            } else if(currentScroll < previousScroll && isUp){
                $nav.removeClass('nav-hide');
                isUp = false;
            }
            previousScroll = currentScroll;
        });
    }
})(jQuery);