<template>
    <div class="sealui-radio">
        <div class="sealui-cells_radio">
            <label class="sealui-cell sealui-cell_radio sealui-check__label" :for="`radio_${uuid}_${index}`" v-for="(one, index) in options">
              <div class="sealui-cell__bd">
                <p>
                  <img class="sealui-radio__icon" :src="one.icon" v-show="one && one.icon">
                  <span class="sealui-radio__label">{{one | getValue}}</span>
                </p>
              </div>
              <div class="sealui-cell__ft">
                <input type="radio" class="sealui-check" v-model="currentValue" :id="`radio_${uuid}_${index}`" :value="getKey(one)"  :class="[type ? 'is-'+type : '']">
                <i class="sealui-icon sealui-radio-icon-checked"></i>
              </div>
            </label>
            <div class="sealui-cell" v-show="fillMode">
              <div class="sealui-cell__hd"><label for="" class="sealui-label">{{fillLabel}}</label></div>
              <div class="sealui-cell__bd">
                <input class="sealui-radio__input needsclick" type="text" v-model="fillValue" :placeholder="fillPlaceholder" @blur="isFocus=false" @focus="onFocus()">
              </div>
              <div class="sealui-cell__ft" v-show="value==='' && !isFocus">
                <i class="sealui-icon-warn"></i>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import Base from 'sealui-m/src/mixins/base'
import { getValue, getKey } from 'sealui-m/src/utils/object-filter'

export default {
    name: 'seal-radio',
mixins: [Base],
  filters: {
    getValue,
    getKey
  },
  props: {
    options: {
      type: Array,
      required: true
    },
    value: String,
    fillMode: {
      type: Boolean,
      default: false
    },
    fillPlaceholder: {
      type: String,
      default: '其他'
    },
    fillLabel: {
      type: String,
      default: '其他'
    },
    type:String
  },
  mounted () {
    this.handleChangeEvent = true
  },
  methods: {
    getKey,
    onFocus () {
      this.currentValue = this.fillValue || ''
      this.isFocus = true
    }
  },
  watch: {
    currentValue (newVal) {
      var isOption = contains(this.options, newVal)
      if (newVal !== '' && isOption) {
        this.fillValue = ''
      }
      this.$emit('on-change', newVal)
      this.$emit('input', newVal)
    },
    fillValue (newVal) {
      if (this.fillMode && this.isFocus) {
        this.currentValue = newVal
      }
    }
  },
  data () {
    return {
      fillValue: '',
      isFocus: false,
      currentValue: this.value
    }
  }
}
function contains (a, obj) {
  var i = a.length
  while (i--) {
    if (a[i] === obj) {
      return true
    }
  }
  return false
}
</script>
