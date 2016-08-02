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
        //register scrollfire if it's not a mobile
        //注册滚轮事件，如果不是手机
        if (!mobilecheck()) {
            registerScrollFire();
        }
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

        $([$('#self'), $('#ncepu'), $('#ibm')]
            .concat($('#skillBar').children()).concat($('#gallery').children())
            .concat($('#gallery1').children()).concat($('#gallery2').children()))
            .each(function (i, p) {
                p.css({opacity: 0});
            });

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
            if ($(this).hasClass('sidebar')) {
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
            } else if (currentScroll < previousScroll && isUp) {
                $nav.removeClass('nav-hide');
                isUp = false;
            }
            previousScroll = currentScroll;
        });
    }

    // check if it is a mobile
    // 检测是否为手机
    function mobilecheck() {
        var check = false;
        (function (a) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))check = true
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    }
})(jQuery);