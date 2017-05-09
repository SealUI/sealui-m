<template>
    <div>
        <div class="sealui-mask" v-show="show" @click.stop="close"></div>
        <div class="sealui-keyboard" :class="show ? 'sealui-keyboard__active' : ''">
            <div class="sealui-keyboard__head">
                <strong ref="laoxu">输入数字密码</strong>
            </div>
            <div class="sealui-keyboard__error">{{error}}</div>
            <ul class="sealui-keyboard__password">
                <li v-for="n in 6"><i v-show="nums.length >= n"></i></li>
            </ul>
            <div class="sealui-keyboard__content">
                <div class="sealui-keyboard__title">{{title}}</div>
                <ul class="sealui-keyboard__numbers">
                    <li v-for="i in 4">
                        <a href="javascript:;" v-if="i == 4" @click.stop="close">取消</a>
                        <template v-if="isMobile">
                            <a href="javascript:;" v-for="n in numsArr.slice((i - 1) * 3, i * 3)" @touchstart.stop="numclick(n)">{{n}}</a>
                        </template>
                        <template v-else>
                            <a href="javascript:;" v-for="n in numsArr.slice((i - 1) * 3, i * 3)" @click.stop="numclick(n)">{{n}}</a>
                        </template>
                        <a href="javascript:;" v-if="i == 4" @click.stop="backspace"></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    //import $ from 'sealui-m/src/utils/util';
    import {addClass, removeClass, getScrollview} from 'sealui-m/src/utils/dom';
    export default {
        name: 'seal-keyboard',
        data() {
            return {
                nums: '',
                show: this.value,
                error: '',
                numsArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
            }
        },
        props: {
            inputDone: {
                type: Function
            },
            disorder: {
                type: Boolean,
                default: false
            },
            value: {
                type: Boolean,
                default: true
            },
            title: {
                type: String,
                default: 'SealUI安全键盘'
            }
        },
        watch: {
            value(val) {
                if (this.isIOS) {
                    if (val) {
                        addClass(this.scrollView, 'g-fix-ios-overflow-scrolling-bug');
                        //$(this.scrollView).addClass('g-fix-ios-overflow-scrolling-bug');
                    } else {
                        //$(this.scrollView).removeClass('g-fix-ios-overflow-scrolling-bug');
                        removeClass(this.scrollView, 'g-fix-ios-overflow-scrolling-bug');
                    }
                }
                this.nums = '';
                this.error = '';
                this.show = val;
                if (this.show && this.disorder) {
                    this.numsArr = this.upsetOrder(this.numsArr);
                }
            },
            nums(val) {
                if (val.length >= 6) {
                    this.inputDone && typeof this.inputDone == 'function' && this.inputDone(val);
                }
            }
        },
        methods: {
            init() {
                //console.log(this.$device.isIOS);
                this.scrollView = getScrollview(this.$el);
                const ua = window.navigator && window.navigator.userAgent || '';
                this.isIOS = this.$device.isIOS;
                this.isMobile = !!ua.match(/AppleWebKit.*Mobile.*/) || 'ontouchstart' in document.documentElement;
                this.$on('keyboard.error', (error) => {
                    this.setError(error);
                });
                this.$on('keyboard.close', this.close);
            },
            numclick(num) {
                this.error = '';
                if (this.nums.length >= 6)return;
                this.nums += num;
            },
            backspace() {
                const nums = this.nums;
                if (nums) {
                    this.nums = nums.substr(0, nums.length - 1);
                }
            },
            upsetOrder(arr) {
                const floor = Math.floor;
                const random = Math.random;
                const len = arr.length;
                let i, j, temp, n = floor(len / 2) + 1;
                while (n--) {
                    i = floor(random() * len);
                    j = floor(random() * len);
                    if (i !== j) {
                        temp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = temp;
                    }
                }
                return arr;
            },
            close() {
                this.isIOS && removeClass(this.scrollView,'g-fix-ios-overflow-scrolling-bug');
                this.$emit('input', false);
            },
            setError(error) {
                this.error = error;
                this.nums = '';
            }
        },
        created() {
            this.init();
        },
        destroyed() {
            this.close();
        }
    }
</script>
