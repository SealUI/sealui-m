let device = {};
const ua = navigator.userAgent;

const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
const ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
const iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);
const isWechat =  /micromessenger/i.test(ua);
const wechatInfo = ua.match(/MicroMessenger\/([\d\.]+)/i) ;
const isDingTalk = /com.laiwang.DingTalk/i.test(ua)
const isUCBrowser = /UCBrowser/i.test(ua)
const isMQQBrowser = /MQQBrowser/i.test(ua)
const isSogouMobileBrowser = /SogouMobileBrowser/i.test(ua)
const isBaiduBrowser = /Baidubrowser/i.test(ua)
const isIOSChorme = /CriOS/i.test(ua)

device.isIOS = device.isAndroid = device.isIphone = device.isIpad = device.isAndroidChrome = device.isWechat = false;
device.isWechat       = isWechat;
if(isWechat){
    device.wechatVersion  = wechatInfo[1];
}
device.isDingTalk     = isDingTalk;
device.isUCBrowser    = isUCBrowser;
device.isMQQBrowser   = isMQQBrowser;
device.isSogouBrowser = isSogouMobileBrowser;
device.isBaiduBrowser = isBaiduBrowser;
device.isIOSChorme    = isIOSChorme;
// Android
if (android) {
    device.osName     = 'Android';
    device.osVersion  = android[2];
    device.isAndroid  = true;
    device.isAndroidChrome = ua.toLowerCase().indexOf('chrome') >= 0;
}
if (ipad || iphone || ipod) {
    device.osName = 'IOS';
    device.isIOS  = true;
}
// iOS
if (iphone && !ipod) {
    device.osVersion = iphone[2].replace(/_/g, '.');
    device.isIphone = true;
}
if (ipad) {
    device.osVersion = ipad[2].replace(/_/g, '.');
    device.isIpad = true;
}
if (ipod) {
    device.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
    device.isIphone = true;
}
// iOS 8+ changed UA
if (device.isIOS && device.osVersion && ua.indexOf('Version/') >= 0) {
    if (device.osVersion.split('.')[0] === '10') {
        device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0];
    }
}

// Webview
device.webView = (iphone || ipad || ipod) && ua.match(/.*AppleWebKit(?!.*Safari)/i);

// Pixel Ratio
device.pixelRatio = window.devicePixelRatio || 1;


export default {
    install (Vue, opts) {
        if (!Vue.$device) {
            Vue.$device = device
        }else{
            this.$device = device
        }
        Vue.mixin({
          created: function () {
            this.$device = Vue.$device
          }
        })
    }
}


// export default function (Vue) {
//   Vue.mixin({
//     created: function () {
//       this.$device = device
//     }
//   })
// }
