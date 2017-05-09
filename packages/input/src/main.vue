<template>
    <div class="sealui-cell sealui-input-warp" :class="{'sealui-cell__warn': !valid}">
        <div class="sealui-cell__hd">
            <!-- <label class="sealui-label" :style="{width: $parent.labelWidth || (labelWidth + 'em'), textAlign: $parent.labelAlign, marginRight: $parent.labelMarginRight}" v-if="title" v-html="title"></label> -->
            <div :style="labelStyles" v-if="hasRestrictedLabel">
                <slot name="restricted-label"></slot>
            </div>
            <slot name="label">
                <label class="sealui-label" :style="{width: $parent.labelWidth || (labelWidth + 'em'), textAlign: $parent.labelAlign, marginRight: $parent.labelMarginRight}" v-if="title" v-html="title"></label>
            </slot>

        </div>
        <div class="sealui-cell__bd" :class="placeholderAlign ? `sealui-input-placeholder-${placeholderAlign}` : ''">
            <input
              v-if="!type || type === 'text'"
              class="sealui-input"
              :maxlength="max"
              :autocomplete="autocomplete"
              :autocapitalize="autocapitalize"
              :autocorrect="autocorrect"
              :spellcheck="spellcheck"
              :style="inputStyle"
              type="text"
              :name="name"
              :pattern="pattern"
              :placeholder="placeholder"
              :readonly="readonly"
              :disabled="disabled"
              v-model="currentValue"
              @focus="focusHandler"
              @blur="blur"
              ref="input"/>
              <input
              v-if="type === 'number'"
              class="sealui-input"
              :maxlength="max"
              :autocomplete="autocomplete"
              :autocapitalize="autocapitalize"
              :autocorrect="autocorrect"
              :spellcheck="spellcheck"
              :style="inputStyle"
              type="number"
              :name="name"
              :pattern="pattern"
              :placeholder="placeholder"
              :readonly="readonly"
              :disabled="disabled"
              v-model="currentValue"
              @focus="focusHandler"
              @blur="blur"
              ref="input"/>
              <input
              v-if="type === 'email'"
              class="sealui-input"
              :maxlength="max"
              :autocomplete="autocomplete"
              :autocapitalize="autocapitalize"
              :autocorrect="autocorrect"
              :spellcheck="spellcheck"
              :style="inputStyle"
              type="email"
              :name="name"
              :pattern="pattern"
              :placeholder="placeholder"
              :readonly="readonly"
              :disabled="disabled"
              v-model="currentValue"
              @focus="focusHandler"
              @blur="blur"
              ref="input"/>
              <input
              v-if="type === 'password'"
              class="sealui-input"
              :maxlength="max"
              :autocomplete="autocomplete"
              :autocapitalize="autocapitalize"
              :autocorrect="autocorrect"
              :spellcheck="spellcheck"
              :style="inputStyle"
              type="password"
              :name="name"
              :pattern="pattern"
              :placeholder="placeholder"
              :readonly="readonly"
              :disabled="disabled"
              v-model="currentValue"
              @focus="focusHandler"
              @blur="blur"
              ref="input"/>
              <input
              v-if="type === 'tel'"
              class="sealui-input"
              :maxlength="max"
              :autocomplete="autocomplete"
              :autocapitalize="autocapitalize"
              :autocorrect="autocorrect"
              :spellcheck="spellcheck"
              :style="inputStyle"
              type="tel"
              :name="name"
              :pattern="pattern"
              :placeholder="placeholder"
              :readonly="readonly"
              :disabled="disabled"
              v-model="currentValue"
              @focus="focusHandler"
              @blur="blur"
              ref="input"/>
        </div>
        <div class="sealui-cell__ft">
            <seal-icon type="clear" v-show="!equalWith && showClear && currentValue && !readonly && !disabled" @click.native="clear"></seal-icon>

            <seal-icon type="warn" :title="!valid ? firstError : ''" v-show="!novalidate && !equalWith && ((touched && !valid && firstError) || (forceShowError && !valid && firstError))"></seal-icon>
            <seal-icon type="warn" v-if="!novalidate && hasLengthEqual && dirty && equalWith && !valid"></seal-icon>
            <seal-icon type="success" v-show="!novalidate && equalWith && equalWith === currentValue && valid"></seal-icon>

            <seal-icon type="success" v-show="novalidate && iconType === 'success'"></seal-icon>
            <seal-icon type="warn" v-show="novalidate && iconType === 'error'"></seal-icon>

            <slot name="right"></slot>

        </div>
    </div>
</template>

<script>
import Base from 'sealui-m/src/mixins/base'
import isEmail from 'validator/lib/isEmail'
import isMobilePhone from 'validator/lib/isMobilePhone';
const validators = {
  'email': {
    fn: isEmail,
    msg: '邮箱格式'
  },
  'china-mobile': {
    fn (str) {
      return isMobilePhone(str, 'zh-CN')
    },
    msg: '手机号码'
  },
  'china-name': {
    fn (str) {
      return str.length >= 2 && str.length <= 6
    },
    msg: '中文姓名'
  }
}
export default {
  name: 'seal-input',
  created () {
    this.currentValue = this.value || ''
    if (!this.title && !this.placeholder && !this.currentValue) {
      console.warn('no title and no placeholder?')
    }
    if (this.required && !this.currentValue) {
      this.valid = false
    }
  },
  mixins: [Base],
  props: {
    required: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String,
    value: [String, Number],
    name: String,
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: Boolean,
    keyboard: String,
    inlineDesc: String,
    isType: [String, Function],
    min: Number,
    max: Number,
    showClear: {
      type: Boolean,
      default: true
    },
    equalWith: String,
    textAlign: String,
    // https://github.com/yisibl/blog/issues/3
    autocomplete: {
      type: String,
      default: 'off'
    },
    autocapitalize: {
      type: String,
      default: 'off'
    },
    autocorrect: {
      type: String,
      default: 'off'
    },
    spellcheck: {
      type: String,
      default: 'false'
    },
    novalidate: {
      type: Boolean,
      default: false
    },
    iconType: String,
    placeholderAlign: String
  },
  mounted () {
    if (this.$slots && this.$slots['restricted-label']) {
      this.hasRestrictedLabel = true
    }
  },
  beforeDestroy () {
    if (this._debounce) {
      this._debounce.cancel()
    }
  },
  computed: {
    pattern () {
      if (this.keyboard === 'number' || this.isType === 'china-mobile') {
        return '[0-9]*'
      }
    },
    labelWidth () {
      return this.title.replace(/[^x00-xff]/g, '00').length / 2 + 1
    },
    hasErrors () {
      return Object.keys(this.errors).length > 0
    },
    inputStyle () {
      if (this.textAlign) {
        return {
          textAlign: this.textAlign
        }
      }
    }
  },
  methods: {
    clear () {
      this.currentValue = ''
      this.$refs.input.focus()
    },
    focusHandler () {
      this.$emit('on-focus', this.currentValue)
    },
    blur () {
      this.setTouched()
      this.validate()
      this.$emit('on-blur', this.currentValue)
    },
    getError () {
      let key = Object.keys(this.errors)[0]
      this.firstError = this.errors[key]
    },
    validate () {
      if (this.equalWith) {
        this.validateEqual()
        return
      }
      this.errors = {}
      if (!this.currentValue && !this.required) {
        this.valid = true
        return
      }
      if (!this.currentValue && this.required) {
        this.valid = false
        this.errors.required = '必填哦'
        return
      }
      if (typeof this.isType === 'string') {
        const validator = validators[this.isType]
        if (validator) {
          this.valid = validator[ 'fn' ](this.currentValue)
          if (!this.valid) {
            this.errors.format = validator[ 'msg' ] + '格式不对哦~'
            return
          } else {
            delete this.errors.format
          }
        }
      }
      if (typeof this.isType === 'function') {
        const validStatus = this.isType(this.currentValue)
        this.valid = validStatus.valid
        if (!this.valid) {
          this.errors.format = validStatus.msg
          return
        } else {
          delete this.errors.format
        }
      }
      if (this.min) {
        if (this.currentValue.length < this.min) {
          this.errors.min = `最少应该输入${this.min}个字符哦`
          this.valid = false
          this.getError()
          return
        } else {
          delete this.errors.min
        }
      }
      if (this.max) {
        if (this.currentValue.length > this.max) {
          this.errors.max = `最多可以输入${this.max}个字符哦`
          this.valid = false
          this.forceShowError = true
          return
        } else {
          this.forceShowError = false
          delete this.errors.max
        }
      }
      this.valid = true
    },
    validateEqual () {
      let willCheck = this.dirty || this.currentValue.length >= this.equalWith.length
      // 只在长度符合时显示正确与否
      if (willCheck && this.currentValue !== this.equalWith) {
        this.valid = false
        this.errors.equal = '输入不一致'
        return
      } else {
        this.valid = true
        delete this.errors.equal
      }
    }
  },
  data () {
    let data = {
      firstError: '',
      forceShowError: false,
      hasLengthEqual: false,
      valid: true,
      currentValue: '',
      hasRestrictedLabel:false
    }
    return data
  },
  watch: {
    valid () {
      this.getError()
    },
    value (val) {
      this.currentValue = val
    },
    equalWith (newVal) {
      if (newVal && this.equalWith) {
        if (newVal.length === this.equalWith.length) {
          this.hasLengthEqual = true
        }
        this.validateEqual()
      } else {
        this.validate()
      }
    },
    currentValue (newVal) {
      if (newVal && this.equalWith) {
        if (newVal.length === this.equalWith.length) {
          this.hasLengthEqual = true
        }
        this.validateEqual()
      } else {
        this.validate()
      }
      this.$emit('input', newVal)
    }
  }
}
</script>
