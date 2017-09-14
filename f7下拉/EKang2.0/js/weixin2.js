/**
 * Created by Administrator on 2016/3/22.
 *
 */
$(function(){
    var wechat = wx;
    var nowUrl = location.href
    $.ajax({
        type: 'GET',
        url: 'http://ekang.ren/wish/index/getWechatToken',
        data: {
            url:nowUrl
        },
        dataType: 'jsonp',
        jsonp: 'callback',
        success: function (result) {
            if (result.ret == 0) {
                appId_val = result.data.appId;
                nonceStr_val= result.data.nonceStr;
                timestamp_val = result.data.timestamp;
                signature_val = result.data.signature;

                wechat.config({
                    debug: false,
                    appId:appId_val,
                    timestamp:timestamp_val,
                    nonceStr: nonceStr_val,
                    signature:signature_val,
                    jsApiList: [
                        "onMenuShareTimeline",
                        "onMenuShareAppMessage",
                        "onMenuShareQQ",
                        "onMenuShareWeibo",
                        "onMenuShareQZone",
                    ]
                });
                wechat.ready(function(){

                    wechat.onMenuShareTimeline({
                        title: '易康医疗，一站式就医服务平台。 医疗健康，就选易康',
                        link: 'http://www.ekangjiuyi.net/EKang2.0/index.html',
                        imgUrl: 'http://www.ekangjiuyi.net/EKang2.0/img/hand-right.png',
                        success: function () {
                            //alert('success')
                        },
                        cancel: function () {
                           // alert('cancel');
                        }
                    });
                    wechat.onMenuShareAppMessage({
                        title: '易康医疗，一站式就医服务平台。 医疗健康，就选易康',
                        desc: '易康医疗，诊疗方案，预约转诊，国际医疗，定制体检，还有尊贵的会员服务10万家庭医生入住！',
                        link: 'http://www.ekangjiuyi.net/EKang2.0/index.html',
                        imgUrl: 'http://www.ekangjiuyi.net/EKang2.0/img/hand-right.png',
                        type: '',
                        dataUrl: '',
                        success: function () {
                             // 用户确认分享后执行的回调函数
                            //alert(12)
                        },
                        cancel: function () {
                            // 用户取消分享后执行的回调函数
                            //alert(12)
                        }
                    });
                    wechat.onMenuShareQQ({
                        title: '易康医疗，一站式就医服务平台。 医疗健康，就选易康',
                        desc: '易康医疗，诊疗方案，预约转诊，国际医疗，定制体检，还有尊贵的会员服务10万家庭医生入住！', // 分享描述
                        link: 'http://www.ekangjiuyi.net/EKang2.0/index.html', // 分享链接
//            link: 'http://ekang.ren/wechat/index/coupon/', // 分享链接
                        imgUrl: 'http://www.ekangjiuyi.net/EKang2.0/img/hand-right.png', // 分享图标
                        success: function () {
                            // 用户确认分享后执行的回调函数
                        },
                        cancel: function () {
                            // 用户取消分享后执行的回调函数
                        }
                    });
                    wechat.onMenuShareWeibo({
                        title: '易康医疗，一站式就医服务平台。 医疗健康，就选易康',
                        desc: '易康医疗，诊疗方案，预约转诊，国际医疗，定制体检，还有尊贵的会员服务10万家庭医生入住！',// 分享描述
                        link: 'http://www.ekangjiuyi.net/EKang2.0/index.html', // 分享链接
//            link: 'http://ekang.ren/wechat/index/coupon/', // 分享链接
                        imgUrl: 'http://www.ekangjiuyi.net/EKang2.0/img/hand-right.png', // 分享图标
                        success: function () {
                            // 用户确认分享后执行的回调函数
                        },
                        cancel: function () {
                            // 用户取消分享后执行的回调函数
                        }
                    });
                    wechat.onMenuShareQZone({
                        title: '易康医疗，一站式就医服务平台。 医疗健康，就选易康',
                        desc: '易康医疗，诊疗方案，预约转诊，国际医疗，定制体检，还有尊贵的会员服务10万家庭医生入住！',// 分享描述
                        link: 'http://www.ekangjiuyi.net/EKang2.0/index.html', // 分享链接
//            link: 'http://ekang.ren/wechat/index/coupon/', // 分享链接
                        imgUrl: 'http://www.ekangjiuyi.net/EKang2.0/img/hand-right.png', // 分享图标
                        success: function () {
                            // 用户确认分享后执行的回调函数
                        },
                        cancel: function () {
                            // 用户取消分享后执行的回调函数
                        }
                    });
                });
                wechat.error(function(res){
                    //alert(333)
                    //alert(res.errMsg);
                });
            }else{
                //alert(result.msg)
            }
        }
    });
});
