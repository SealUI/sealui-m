<template>
    <transition :name="transitionName">
    <div class="sealui-toptips" :class="customClass" v-if="visible">
        <div :class="className">
            <seal-icon class="sealui-icon_toptips" :type="iconType" v-if="type !== ''"></seal-icon>
            {{ message }}
        </div>
    </div>
    </transition>

</template>

<script>
import uuid from 'sealui-m/src/utils/uuid';
export default {
    name: 'seal-toptips',
    mixins: [uuid],
    props: {
        message: String,
        className: {
            type: String,
            default: ''
        },
        position: {
            type: String,
            default: 'top'
        },
        type: {
            type: String,
            default: ''
        }
    },
    data() {
      return {
        transitionName: 'sealui-toptips-top-fade',
        visible: false
      };
    },
    computed: {
        iconType(){
            let _iconType = '';
            switch (this.type) {
                case 'error':
                    _iconType = 'ios-close'
                break;
                case 'success':
                    _iconType = 'ios-checkmark'
                break;
                case 'info' :
                    _iconType = 'ios-information'
                break;
                 case 'warn':
                    _iconType = 'alert-circled'
                break;
            }
            return _iconType;
        },
        customClass() {
            var classes = [];
            switch (this.type) {
                case 'error':
                    classes.push('is-error');
                break;
                case 'warn':
                    classes.push('is-warn');
                break;
                case 'success' :
                    classes.push('is-success');
                break;
                case 'info' :
                    classes.push('is-info');
                break;
            }
            switch (this.position) {
                case 'top':
                    classes.push('is-placetop');
                break;
                case 'bottom':
                    classes.push('is-placebottom');
                break;
                default:
                    classes.push('is-placetop');
            }
            //classes.push(this.className);
            return classes.join(' ');
        }
    },
    watch : {
        position (val){
            if(val == 'bottom'){
                this.transitionName = "sealui-toptips-bottom-fade"
            }else{
                this.transitionName = "sealui-toptips-top-fade"
            }
        }
    }
};
</script>
