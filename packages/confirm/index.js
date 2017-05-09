import $ from 'sealui-m/src/utils/util';
import msgbox from '../message-box/index';

/**
 * 确认弹窗
 * @param {string} content 弹窗内容
 * @param {function=} yes 点击确定按钮的回调
 * @param {function=} no  点击取消按钮的回调
 * @param {object=} options 配置项
 * @param {string=} options.title 弹窗的标题
 * @param {string=} options.className 自定义类名
 * @param {array=} options.buttons 按钮配置项，详情参考dialog
 *
 * @example
 * this.$confirm('普通的confirm');
 * this.$confirm('自定义标题的confirm', { title: '自定义标题' });
 * this.$confirm('带回调的confirm', function(){ console.log('yes') }, function(){ console.log('no') });
 * var confirmDom = this.$confirm('手动关闭的confirm', function(){
 *     return false; // 不关闭弹窗，可用confirmDom.hide()来手动关闭
 * });
 * this.$confirm('带回调的自定义标题的confirm', function(){ console.log('yes') }, function(){ console.log('no') }, {
 *     title: '自定义标题'
 * });
 * this.$confirm('自定义按钮的confirm', {
 *     title: '自定义按钮的confirm',
 *     buttons: [{
 *         label: 'NO',
 *         type: 'default',
 *         onClick: function(){ console.log('no') }
 *     }, {
 *         label: 'YES',
 *         type: 'primary',
 *         onClick: function(){ console.log('yes') }
 *     }]
 * });
 */
function confirm(content = '', yes = $.noop, no = $.noop, options) {
    if(typeof yes === 'object'){
        options = yes;
        yes = $.noop;
    }else if(typeof no === 'object'){
        options = no;
        no = $.noop;
    }

    options = $.extend({
        content: content,
        showCloseIcon:false,
        buttons: [{
            label: '取消',
            type: 'default',
            disabled:false,
            onClick: no
        }, {
            label: '确定',
            type: 'primary',
            disabled:false,
            onClick: yes
        }]
    }, options);

    return msgbox(options);
}
export default confirm;
