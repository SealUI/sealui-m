<template>
    <div class="page-input">
        <div class="page-input__group">
            <seal-group title="默认用法">
              <seal-input title="标题" placeholder="占位符">
              </seal-input>
            </seal-group>

            <seal-group title="禁用内置验证及显示成功或者错误样式">
              <seal-input title="禁用验证" placeholder="I'm placeholder" novalidate :icon-type="iconType" :show-clear="false" @on-blur="onBlur" placeholder-align="right"></seal-input>
            </seal-group>

            <seal-group title="不显示清除按钮">
              <seal-input title="标题" required placeholder="I'm placeholder" :show-clear="false" autocapitalize="on"></seal-input>
            </seal-group>

            <seal-group title="focus事件">
              <seal-input title="focus" placeholder="focus事件" :show-clear="true" @on-focus="onFocus"></seal-input>
            </seal-group>

            <seal-group title="使用icon代替title">
              <seal-input placeholder="I'm placeholder">
                <img slot="label" style="display:block;" src="http://dn-placeholder.qbox.me/110x110/FF2D55/000" width="24" height="24">
              </seal-input>
            </seal-group>

            <seal-group title="is-type传入function">
              <seal-input title="必须输入2333" :is-type="be2333" placeholder="I'm placeholder"></seal-input>
            </seal-group>

            <seal-group title="设置type为数字">
              <seal-input title='电话' type="tel"></seal-input>
            </seal-group>
            <seal-group title="设置type为中文姓名">
              <seal-input title="姓名" name="username" placeholder="请输入姓名" is-type="china-name"></seal-input>
            </seal-group>
            <seal-group title="设置键盘为数字键 并且 type为中国手机号">
              <seal-input title="手机号码" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></seal-input>
            </seal-group>

             <seal-group title="设置type为email">
              <seal-input title="邮箱" name="email" placeholder="请输入邮箱地址" is-type="email"></seal-input>
            </seal-group>

            <seal-group title="确认输入">
              <seal-input title="请输入6位数字" type="text" placeholder="" v-model="password" :min="6" :max="6" @on-change="change"></seal-input>
              <seal-input title="请确认6位数字" v-model="password2" type="text" placeholder="" :equal-with="password"></seal-input>
            </seal-group>

            <seal-group title="设置区间">
              <seal-input title="2-5个字符" placeholder="" :min="2" :max="5"></seal-input>
            </seal-group>

            <seal-group title="禁用">
              <seal-input title='标题' disabled v-model="disabledValue"></seal-input>
            </seal-group>

        </div>
    </div>
</template>

<script>
export default {
    name: 'page-input',
    data () {
        return {
            iconType:'success',
            disabledValue: 'hello',
            password: '123465',
            password2: '',
            be2333: function (value) {
                return {
                  valid: value === '2333',
                  msg: 'Must be 2333'
                }
              },
        }
    },
    mounted (){

    },
    methods : {
        change (val) {
          console.log(val)
        },
        onBlur (val) {
          console.log('on blur', val)
        },
        onFocus (val) {
          console.log('on focus', val)
        }
    }
};
</script>

<style lang="less" scoped>
    .page-input {
        padding: 0rem;
        & .page-input__group {
            margin-bottom: .3rem;
        }
    }
</style>
