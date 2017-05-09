import $ from 'sealui-m/src/utils/util';
import tpl from './src/message-box.html';

let _sington;

/**
 * msgbox，弹窗，alert和confirm的父类
 *
 * @param {object=} options 配置项
 * @param {string=} options.title 弹窗的标题
 * @param {string=} options.content 弹窗的内容
 * @param {string=} options.className 弹窗的自定义类名
 * @param {array=} options.buttons 按钮配置项
 *
 * @param {string} [options.buttons[].label=确定] 按钮的文字
 * @param {string} [options.buttons[].type=primary] 按钮的类型 [primary, default]
 * @param {function} [options.buttons[].onClick=$.noop] 按钮的回调
 *
 * @example
 * this.$msgbox({
 *     title: 'msgbox标题',
 *     content: 'msgbox内容',
 *     className: 'custom-classname',
 *     buttons: [{
 *         label: '取消',
 *         type: 'default',
 *         onClick: function () { alert('取消') }
 *     }, {
 *         label: '确定',
 *         type: 'primary',
 *         onClick: function () { alert('确定') }
 *     }]
 * });
 */
let msgbox = function(options = {}) {
    if(_sington) return _sington;

    const isAndroid = $.os.android;
    options = $.extend({
        title: null,
        content: '',
        className: '',
        showCloseIcon:false,
        closeOnClickModal:false,
        open :$.noop,
        buttons: [{
            label: '确定',
            type: 'primary',
            disabled:false,
            onClick: $.noop
        }],
        isAndroid: isAndroid
    }, options);

    const $msgboxWrap = $($.render(tpl, options));
    const $msgbox = $msgboxWrap.find('.sealui-message-box');
    const $mask = $msgboxWrap.find('.sealui-mask');

    function _hide(){
        _hide = $.noop; // 防止二次调用导致报错

        $mask.addClass('sealui-animate-fade-out');
        $msgbox
            .addClass('sealui-animate-fade-out')
            .on('animationend webkitAnimationEnd', function () {
                $msgboxWrap.remove();
                _sington = false;
            });
    }
    function hide(){ _hide(); }

    $('body').append($msgboxWrap);

    // 不能直接把.weui-animate-fade-in加到$msgbox，会导致mask的z-index有问题
    $mask.addClass('sealui-animate-fade-in');
    $msgbox.addClass('sealui-animate-fade-in');

    if(options.opened){
        options.opened.call();
    }

    let _closeOnClickModal = options.closeOnClickModal ? ' ,.sealui-mask' : '';
    $msgboxWrap.on('click', '.sealui-message-box__btn,.sealui-message-box__close' + _closeOnClickModal, function (evt) {
        const index = $(this).index();
        if (options.buttons[index].onClick) {
            if (options.buttons[index].onClick.call(this, evt) !== false) hide();
        } else {
            hide();
        }
    });

    _sington = $msgboxWrap[0];
    _sington.hide = hide;

    return _sington;
}
export default msgbox;

