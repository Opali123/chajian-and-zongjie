var getdom = function(element) {
    var el;
    if(typeof element == 'string') el = document.getElementById(element);
    else el = element;
    if(!el) return null;
    else return el;
};
var getdomE = {
    //事件绑定
    bind:function(ele,ename,fn) {
        if(document.addEventListener) return getdom(ele).addEventListener(ename,fn,false);
        else if(document.attachEvent) return getdom(ele).attachEvent("on"+ename,fn);
        else return null;
    },
    //是否为CSS
    isCss:function(ele,c) {
        var classes = getdom(ele).className;
        if(!classes) return false;
        if(classes == c) return true;
    },
    //CSS添加
    addCss:function(ele,c) {
        if(getdomE.isCss(ele,c)) return ;
        if(getdom(ele).className) c = " " + c;
        ele.className +=c;
    },
    //CSS删除
    removeCss:function(ele,c) {
        getdom(ele).className = getdom(ele).className.replace(new RegExp("\\b"+c+"\\b\\s*","g"),"");
    }
};
/*标签切换
 *参数说明:orpF切换父对象ul，切换对象li的排号，其他参数
 -----------------------------------*/
function switchTab(oprF,num,parameter) {
    var parent = getdom(oprF);
    var p = parameter || {};
    var conObj = p.tabname?p.tabname:(oprF+'_con');
    if(String(parent.tagName).toLowerCase()=='ul') {
        var lilist = parent.getElementsByTagName('li');
        var remark = false;
        for(var i=0;i<lilist.length;i++) {
            if(i+1 == parseInt(num)) {
                lilist[i].className = 'checked';
                doshow(i+1);
                remark = true;
            }
            else {
                lilist[i].className = (p.next && i+1!=3)?'unclicked':'';
                dohide(i+1);
                remark = false;
            }
            if(p.whendo) hpageTab(lilist[i],remark);
        }
    }
    /*显示*/
    function doshow(n) {
        var obj = conObj+n;
        var moreObj = p.more?(p.more+n):'';
        if(getdom(obj)) {
            getdomE.removeCss(getdom(obj),'hide');
            getdomE.addCss(getdom(obj),'show');
        }
        if(p.more && getdom(moreObj)) {
            getdomE.removeCss(getdom(moreObj),'hide');
            getdomE.addCss(getdom(moreObj),'show');
        }
    }
    /*隐藏*/
    function dohide(n) {
        var obj = conObj+n;
        var moreObj = p.more?(p.more+n):'';
        if(getdom(obj)) {
            getdomE.removeCss(getdom(obj),'show');
            getdomE.addCss(getdom(obj),'hide');
        }
        if(p.more && getdom(moreObj)) {
            getdomE.removeCss(getdom(moreObj),'show');
            getdomE.addCss(getdom(moreObj),'hide');
        }
    }
}
