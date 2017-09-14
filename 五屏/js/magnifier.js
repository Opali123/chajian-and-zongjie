var oNavList = document.getElementById('x_list');
var oSmaList = document.getElementById('s_list');
var aNavLi = oNavList.getElementsByTagName('li');
var aSmaLi = oSmaList.getElementsByTagName('li');
var oTNum = 0;
for(var i=0;i<aNavLi.length;i++){
    aNavLi[i].index = i;
    aNavLi[i].onmouseover = function(){
        for(var j=0;j<aNavLi.length;j++){
            aNavLi[j].className = '';
        }
        for(var k=0;k<aSmaLi.length;k++){
            aSmaLi[k].className = '';
        }
        this.className = 'checked';
        aSmaLi[this.index].className = 'checked';
        oTNum = this.index;
    }
}

window.onload=function ()
{
    var oMagniFier = document.getElementById('magnifier');
    var oMagnIimg = document.getElementById('magni_img');
    var oMark = document.getElementById('mark');
    var oFloat = document.getElementById('float_layer');
    var oBig = document.getElementById('b_list').getElementsByTagName('li');
    var oBigPic = document.getElementById('big_pic');

    for( var j=0;j<oBig.length;j++){oBig[j].style.display = 'none';}

    oMark.onmouseover=function ()
    {
        oFloat.style.display='block';
        oBig[oTNum].style.display='block';
        oBigPic.style.display='block';
        oMagnIimg.style.display='none';

    };

    oMark.onmouseout=function ()
    {
        oFloat.style.display='none';
        oBig[oTNum].style.display='none';
        oBigPic.style.display='none';
        oMagnIimg.style.display='block';
    };

    oMark.onmousemove=function (ev)
    {
        var oEvent=ev||event;

        if (document.documentElement && document.documentElement.scrollTop) {
            var l=oEvent.clientX-oMagniFier.offsetLeft-aSmaLi[0].offsetLeft-oFloat.offsetWidth/2;
            var t=oEvent.clientY+document.documentElement.scrollTop-oMagniFier.offsetTop-aSmaLi[0].offsetTop-oFloat.offsetHeight/2;
        }
        else if (document.body) {
             l=oEvent.clientX-oMagniFier.offsetLeft-aSmaLi[0].offsetLeft-oFloat.offsetWidth/2;
             t=oEvent.clientY+document.body.scrollTop-oMagniFier.offsetTop-aSmaLi[0].offsetTop-oFloat.offsetHeight/2;
        }
        if(l<0){l=0;}
        else if(l>oMark.offsetWidth-oFloat.offsetWidth){l=oMark.offsetWidth-oFloat.offsetWidth;}
        if(t<0){t=0;}
        else if(t>oMark.offsetHeight-oFloat.offsetHeight){t=oMark.offsetHeight-oFloat.offsetHeight;}

        oFloat.style.left=l+'px';
        oFloat.style.top=t+'px';
        var percentX=l/(oMark.offsetWidth-oFloat.offsetWidth);
        var percentY=t/(oMark.offsetHeight-oFloat.offsetHeight);
        oBig[oTNum].style.left=-percentX*(oBig[oTNum].offsetWidth-oBigPic.offsetWidth)+'px';
        oBig[oTNum].style.top=-percentY*(oBig[oTNum].offsetHeight-oBigPic.offsetHeight)+'px';
    };
};