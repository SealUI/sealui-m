<template>
  <div class="wepay-input">
    <div class="sealui-wepay-pay">
      <div class="sealui-wepay-pay__bd">
        <div class="sealui-wepay-pay__inner">
            <h1 class="sealui-wepay-pay__title" v-html="title"></h1>
            <div class="sealui-wepay-pay__inputs">
                <strong class="sealui-wepay-pay__strong" v-html="label || '￥'"></strong>
                <input class="sealui-wepay-pay__input" :placeholder="placeholder" v-model="currentValue" type="number" :name="name" max="10" />
            </div>
            <div class="sealui-wepay-pay__intro">
                <slot name="description"><div v-html="description"></div></slot>
            </div>
        </div>
      </div>
      <div class="sealui-wepay-pay__ft">
        <p class="sealui-wepay-pay__info" v-html="info"></p>
        <div class="sealui-wepay-pay__btn">
            <slot name="button"></slot>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
    name: 'wepay-input',
    props: ['title', 'description', 'placeholder', 'info', 'label', 'value','name'],
  created () {
    this.currentValue = this.value
  },
  data () {
    return {
      currentValue: ''
    }
  },
  watch: {
    value (newVal) {
      this.currentValue = newVal
    },
    currentValue (newVal) {
      this.$emit('input', newVal)
    }
  }
};
</script>
