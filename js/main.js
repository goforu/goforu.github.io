(function ($){
    $(window).on('load',function(){
        var baloon = $('.btn-floating');
        function runIt() {
            baloon.animate({top:'+=10'}, 500);
            baloon.animate({top:'-=10'}, 500, runIt);
        }
        runIt();
    })
})(jQuery);