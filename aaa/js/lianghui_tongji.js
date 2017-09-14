//久其统计代码
var  _numRegExt=/\d+/;

var _jqcode=document.getElementsByTagName('body')[0].getAttribute('jqcode');
var _maq = _maq||[];
_maq.push(["appkey", "APP_KEY"]);
if(!_numRegExt.test(_jqcode)){
    alert('请填写久其统计活动代码!');
}
_maq.push(["tid", _jqcode]);
_maq.push(["trackPV"]); 
(function() {
   
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') +'h5rcv.i-dataworks.com/js/tracker/ha.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);

})();

//秒针统计代码
(function(){
    
var  mzcode=document.getElementsByTagName('body')[0].getAttribute('mzcode');
if(!_numRegExt.test(mzcode)){
    alert("请填写秒针统计活动代码!");
    return;
}    
    
var ga = document.createElement('script'); ga.type = 'text/javascript';
ga.src = 'http://js.miaozhen.com/wx.1.0.js';
ga.onload=function(){
    _mwx=window._mwx||{};
     //秒针的活动id
	_mwx.siteId=parseInt(mzcode);
	_mz_wx_view(1,0);
	_mwx.debug=true;  
    }
var body = document.getElementsByTagName('body')[0]; body.appendChild(ga);
})();
