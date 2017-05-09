import $ from 'sealui-m/src/utils/util';
import tpl from './src/loading.html';

let _sington;

/**
 * loading
 * @param {string} content loading的文字
 * @param {object=} options 配置项
 * @param {string=} options.className 自定义类名
 *
 * @example
 * var loading = this.$loading('loading', {
 *     className: 'custom-classname'
 * });
 * setTimeout(function () {
 *     loading.hide();
 * }, 3000);
 */
function loading(content = '', options = {}) {
    if(_sington) return _sington;

    options = $.extend({
        content: content,
        className: ''
    }, options);

    const $loadingWrap = $($.render(tpl, options));
    const $loading = $loadingWrap.find('.sealui-loading');
    const $mask = $loadingWrap.find('.sealui-mask');

    function _hide() {
        _hide = $.noop; // 防止二次调用导致报错

        $mask.addClass('sealui-animate-fade-out');
        $loading
            .addClass('sealui-animate-fade-out')
            .on('animationend webkitAnimationEnd', function () {
                $loadingWrap.remove();
                _sington = false;
            });
    }
    function hide(){ _hide(); }

    $('body').append($loadingWrap);
    $loading.addClass('sealui-animate-fade-in');
    $mask.addClass('sealui-animate-fade-in');

    _sington = $loadingWrap[0];
    _sington.hide = hide;
    return _sington;
}
export default loading;
