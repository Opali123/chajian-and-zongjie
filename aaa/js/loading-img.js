
$(function () {
    var loadingHtml=[
    ' <div class="loading-area">',
    '        <!--显示图片--->',
    '        <div class="loading-img">',
    '            <img src="images/page_fu.png">',
    '        </div>',
    '        <!--进度条-->',
    '        <div class="loading-progress">',
    '            <div class="init-progress-bar">',
    '                <div id="bar-percent"></div>',
    '            </div>',
    '            <div id="loading-txt">',
    '            </div>',
    '        </div>',
    ' </div>'];

     var lds=$('#loading-slide');
     lds.prepend(loadingHtml.join(''));   


     var ldp = $('.loading-progress')[0];
    
     $(ldp).on("touchstart touchmove touchend", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
    });
    
    lds.on('touchstart touchmove touchend',function(e){
        e.preventDefault();
        e.stopImmediatePropagation();
    });
    
    
    var percent = 10;
    var loadingTimeTick = setInterval(function () {
        if (++percent <= 95) {
            $('#bar-percent').css('width', percent + "%");
            $('#loading-txt').text("" + percent + "%");
           
        } else {
            clearInterval(loadingTimeTick);
           // $('#loading-slide').hide();
           // $('body').trigger('onsourceloaded');
        }
        
    }, 20); //更新进度的频率,以毫秒为单位
    
    window.onload=function(){
      $('#bar-percent').css('width', 100 + "%");
      $('#loading-txt').text("" + 100 + "%");
      $('#loading-slide').hide(30);
      $('body').trigger('onsourceloaded');
}
    
    
});




