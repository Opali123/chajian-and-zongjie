/**
 *配置config信息 
 */
wx.config({
	debug: false,
	appId: pdmi_appid,
	timestamp: pdmi_timestamp,
	nonceStr: pdmi_nonceStr,
	signature: pdmi_signature,
	jsApiList: [
	    'checkJsApi',
	    'onMenuShareTimeline',
	    'onMenuShareAppMessage',
	    'onMenuShareQQ',
	    'onMenuShareWeibo'
	]
});
var wx_data = {
	title : "分享标题",
	link : "",
	imgUrl : "http://www.pdmi.cn/images/logo1.png",
	desc :"分享描述"
};
/**
 * 获取分享链接
 * @param url
 * @returns {String}
 */
function getURL(url){
	return 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + pdmi_appid + '&redirect_uri='+url+'&response_type=code&scope=snsapi_base&state=123#wechat_redirect';
}
/**
 * 分享到朋友圈
 * @param data
 */
function shareTimeline(data){
	wx.onMenuShareTimeline({
		title : data.title,
		link : data.link,
		imgUrl : data.imgUrl,
		fail : function(res) {
			alert(JSON.stringify(res));
		}
	});
}
/**
 * 分享给朋友
 * @param data
 */
function shareAppMessage(data){
	wx.onMenuShareAppMessage({
		title : data.title,
		link : data.link,
		imgUrl : data.imgUrl,
		desc : data.desc,
		fail : function(res) {
			alert(JSON.stringify(res));
		}
	});
}
/**
 * 分享到QQ
 * @param data
 */
function shareQQ(data){
	wx.onMenuShareQQ({
		title : data.title,
		link : data.link,
		imgUrl : data.imgUrl,
		desc : data.desc,
		fail : function(res) {
			alert(JSON.stringify(res));
		}
	});
}
/**
 * 分享到微博
 */
function shareWeibo(data){
	wx.onMenuShareWeibo({
		title : data.title,
		link : data.link,
		imgUrl : data.imgUrl,
		desc : data.desc,
		fail : function(res) {
			alert(JSON.stringify(res));
		}
	});
}