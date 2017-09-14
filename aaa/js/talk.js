$(function () {

  
    //预加载图片
    function preLoadImg(url,callback){
        var img =new Image();
        img.src=url;
        img.onload=function(){
          callback.call(this);  
        };
    }
    
    //加载谈话的gif缓存起来到浏览器。
    preLoadImg('images/talk/lb.gif',function(){
    });
    
    
   
    $('body').on('touchend','.talk-voice',function(){
        var audioss = document.getElementsByTagName("audio");

        for(var i=0;i<audioss.length;i++){
            audioss[i].pause();
        }
        
        //$(this).find('img').attr('src','images/talk/lb.png');
        //设置播放声音的图标
         console.log($(this));
        var src=$(this).find('img').attr('src');
        var audio=$(this).find('audio').get()[0];
        if(src=="images/talk/lb.gif"){

          $(this).find('img').attr('src','images/talk/lb.png');
           //暂停声音    
            audio.pause();

        }else{
          $(".talk-voice > img").attr('src','images/talk/lb.png');
          $(this).find('img').attr('src','images/talk/lb.gif'); 
          //播放声音 
         
            audio.play();

        }
        //
        //设置不显示红点
        var display=$(this).next('.voice-time').find('.red-point').css('display');
        if(display!="none"){
            $(this).next('.voice-time').find('.red-point').css('display','none');
        }
    });
    
    $(".botbg").on("touchend",function(){
        $(".page-s").fadeIn(200);
    });
    
    
    $(".page-s").on("touchend",function(){
        $(this).fadeOut(200);
    });
    //遮罩上加载被采访的人员
//    $('body').on('touchend','.upload-img>img',function(){
//        var src=$(this).attr('src');
//        $('.load-mask').fadeIn(function(){
//             preLoadImg(src,function(){
//             $(".preview-img>img").attr('src',src);
//           });
//        });
//    });
    //退出遮罩
    $('.load-mask').on('touchend',function(){
         $(this).fadeOut();
    });
    
    //以聊天形式显示内容
    var container=$('.container');
    var currentPosition = 100;
    var records=$('.container>div').detach();
    var recordIndex=0;
    var ticker=null;
var current = null;
    function showTalkRecord(){
        if(current){$(current.find('.scrolls')[0]).css({
                 height: '0px'
             });}
         if(recordIndex<records.length){
             $(records[recordIndex]).css('display','block');
             current = $(records[recordIndex]);
             var offset = current.attr("offset");
             offset = parseInt(offset?offset:0)+60;
             var time = current.attr("time");
             container.append(records[recordIndex]);
             $(current.find('.scrolls')[0]).css({
                 height: offset+'px'
             });
             var thsH = $(records[recordIndex]).height();
//             window.scrollTo(0,document.body.
             $('html,body').scrollTop($(records[recordIndex]).offset().top+thsH+offset);//
             currentPosition+=300;
            // console.log($(records[recordIndex]).offset().top);
             ++recordIndex;
             ticker=setTimeout(function(){
                 showTalkRecord();
             },time?time:3000);
             
        }else{
            clearTimeout(ticker);
        }
        
    }
    
    
    window.onload=function(){
       $('body').css('visibility','visible');    
       showTalkRecord();    
        
    }
    
});
