window.onload = function(){
    var arrUrl = [ 'images/jdt_img01.jpg', 'images/banner_02.jpg', 'images/banner_03.jpg', 'images/banner_04.jpg', 'images/banner_05.jpg'];
    var arrUrla = [ 'http://image.baidu.com/', 'http://www.baidu.com/', 'http://news.baidu.com/', 'http://tieba.baidu.com/', 'http://tieba.baidu.com/'];
    var oSlideImg = document.getElementById("slideImg");
    var aSlideUl = oSlideImg.getElementsByTagName("ul");
    var oPre = document.getElementById("pre");
    var oNext = document.getElementById("next");
    var timer = play = null;
    var i = index = 0;
    //切换按钮
    for( var h=0; h<arrUrl.length; h++ ){
        aSlideUl[1].innerHTML += '<li></li>';
        var aListNum = aSlideUl[1].getElementsByTagName("li");
    }
    for( var k=0; k<arrUrl.length; k++ ){
        aSlideUl[0].innerHTML += '<li><a></a></li>';
        var aListImg = aSlideUl[0].getElementsByTagName("a");
    }
    for (i = 0; i < aListNum.length; i++)
    {
        aListNum[i].index = i;
        aListNum[i].innerHTML = index;
        aListNum[i].onmouseover = function (){show(this.index)}
    }
    //鼠标划过关闭定时器
    oSlideImg.onmouseover = function (){clearInterval(play);oPre.style.display = oNext.style.display = 'block'};
    //鼠标离开启动自动播放
    oSlideImg.onmouseout = function (){autoPlay();oPre.style.display = oNext.style.display = 'none'};
    //自动播放函数
    function autoPlay ()
    {
        clearInterval(play);
        play = setInterval(function () {
            index++;
            index >= aListImg.length && (index = 0);
            show(index);
        },5000);
    }
    oPre.onclick = function(){
        index--;
        index < 0 && (index = aListImg.length-1);
        show(index);
    };
    oNext.onclick = function(){
        index++;
        index >= aListImg.length && (index = 0);
        show(index);
    };
    clearInterval(play);
    autoPlay();//播放
    //图片切换, 淡入淡出效果
    function show (num)
    {
        index = num;
        var alpha = 0;
        for (i = 0; i < aListNum.length; i++)aListNum[i].className = "";
        aListNum[index].className = "current";
        clearInterval(timer);
        for (i = 0; i < aListImg.length; i++)
        {
            aListImg[i].style.opacity = 0;
            aListImg[i].style.filter = "alpha(opacity=0)";
            aListImg[i].parentNode.style.display = "none";
            aListImg[i].style.backgroundImage = 'url('+arrUrl[i]+')';
            aListImg[i].href = arrUrla[i];
        }
        timer = setInterval(function () {
            alpha += 2;
            alpha > 100 && (alpha =100);
            aListImg[index].style.opacity = alpha / 100;
            aListImg[index].parentNode.style.display = "block";
            aListImg[index].style.filter = "alpha(opacity = " + alpha + ")";
            alpha == 100 && clearInterval(timer)
        },10);
    }
    show(0);
}