import $ from 'sealui-m/src/utils/util';
import tpl from './src/tpl.html';
let _sington;
let  popup = function(options = {}) {
    if(_sington) return _sington;
    options = $.extend({
        title: null,
        content: '',
        className: 'custom-classname',
        position:'center',
        showCloseIcon:false,
        closeOnClickModal:true,
        opened :$.noop,
        buttons: [{
            label: '确定',
            type: 'success',
            disabled:false,
            onClick: $.noop
        }]
    }, options);

    const $popupboxWrap = $($.render(tpl, options));
    const $popupbox = $popupboxWrap.find('.sealui-popup');
    const $mask = $popupboxWrap.find('.sealui-mask');
    function _hide(){
        _hide = $.noop; // 防止二次调用导致报错

        $mask.addClass('sealui-animate-fade-out');
        $popupbox
            .removeClass('sealui-popup__show')
            .on('webkitTransitionEnd transitionend', function () {
                $popupboxWrap[0].remove();
                _sington = false;
            });
    }
    function hide(){ _hide(); }
    $('body').append($popupboxWrap);
    $mask.addClass('sealui-animate-fade-in');
    setTimeout(function(){
        $popupbox.addClass('sealui-popup__show');
    },100)

    if(options.opened){
        options.opened.call();
    }

    let _closeOnClickModal = options.closeOnClickModal ? ' ,.sealui-mask' : '';
    $popupboxWrap.on('click', '.sealui-popup__btn,.sealui-popup__close' + _closeOnClickModal, function (evt) {
        const index = $(this).index();
        if (options.buttons && options.buttons[index].onClick) {
            if (options.buttons[index].onClick.call(this, evt) !== false) hide();
        } else {
            hide();
        }
    });

    _sington = $popupboxWrap[0];
    _sington.hide = hide;

    return _sington;
}
export default popup;
