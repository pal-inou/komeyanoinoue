// SP-header
// ハンバーガーボタン
$('.sp-btn').on('click',function(){
    $('.header-inner').fadeToggle(300);
    $(this).toggleClass('js-cross');
    $('body').toggleClass('js-noscroll');
});

// mv過ぎたらsp-header-logoを隠す
$(function(){
    var $win = $(window),
    $mv = $('.mv'),
    $logo = $('.sp-header-logo'),
    mvHeight = $mv.outerHeight();
    hideClass = 'js-hide';

    $win.on('load scroll',function(){
        var value = $(this).scrollTop();
        if($win.width() < 1024){
            if( value > mvHeight){
                $logo.addClass(hideClass);
            }else{
                $logo.removeClass(hideClass);
            }
        }
    });
});