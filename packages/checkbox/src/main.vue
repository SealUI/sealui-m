<template>
    <div class="sealui-checkbox">
        <div v-show="title" class="sealui-cells__title">{{title}}</div>
        <slot name="after-title"></slot>
        <div class="sealui-cells weui-cells_checkbox">
            <label class="sealui-cell sealui-check__label" :for="`checkbox_${uuid}_${index}`" v-for="(one, index) in currentOptions" :key="one.id">
            <div class="sealui-cell__hd">
                <input type="checkbox" class="sealui-check"  :class="[type ? 'is-'+type : '']" :name="`sealui-checkbox-${uuid}`" :value="getKey(one)" v-model="currentValue" :id="`checkbox_${uuid}_${index}`" :disabled="ifDisable(getKey(one))">
                <i class="sealui-icon sealui-check-icon-checked"></i>
            </div>
            <div class="sealui-cell__bd">
                <p v-html="getValue(one)"></p>
            </div>
        </label>
        </div>
        <p v-show="error" class="sealui-checkbox__error">{{ error }}</p>
    </div>
</template>

<script>
import Base from 'sealui-m/src/mixins/base'
import { getValue, getKey } from 'sealui-m/src/utils/object-filter'
import shuffle from 'array-shuffle'
export default {
    name: 'seal-checkbox',
    filters: {
        getValue,
        getKey
    },
    mixins: [Base],
    props: {
        name: String,
        showError: Boolean,
        title: String,
        type:String,
        required: {
            type: Boolean,
            default: false
        },
        options: {
            type: Array,
            required: true
        },
        value: {
            type: Array,
            default: () => []
        },
        max: Number,
        min: Number,
        fillMode: Boolean,
        randomOrder: Boolean,
        error:[Object,String]
    },
    data () {
        return {
          currentValue: [],
          currentOptions: this.options
        }
    },
    created () {
        this.handleChangeEvent = true
        if (this.value) {
          this.currentValue = this.value
        }
        if (this.randomOrder) {
          this.currentOptions = shuffle(this.options)
        } else {
          this.currentOptions = this.options
        }
    },
    methods: {
        getValue,
        getKey,
        ifDisable (key) {
          return this.currentValue.indexOf(key) === -1 && this.currentValue.length === this._max
        }
    },
    computed: {
        _total () {
          return this.fillMode ? (this.options.length + 1) : this.options.length
        },
        _min () {
          if (!this.required && !this.min) {
            return 0
          }
          if (!this.required && this.min) {
            return Math.min(this._total, this.min)
          }
          if (this.required) {
            if (this.min) {
              let max = Math.max(1, this.min)
              return Math.min(this._total, max)
            } else {
              return 1
            }
          }
        },
        _max () {
          if (!this.required && !this.max) {
            return this._total
          }
          if (this.max) {
            if (this.max > this._total) {
              return this._total
            }
            return this.max
          } else {
            return this._total
          }
        },
        valid () {
          return this.currentValue.length >= this._min && this.currentValue.length <= this._max
        }
      },
    watch: {
        value (newVal) {
          if (JSON.stringify(newVal) !== JSON.stringify(this.currentValue)) {
            this.currentValue = newVal
          }
        },
        options (val) {
          this.currentOptions = val
        },
        currentValue (newVal) {
          const val = pure(newVal)
          this.$emit('on-change', val)
          this.$emit('input', val)
          let err = {}
          if (this._min) {
            if (this.required) {
              if (this.currentValue.length < this._min) {
                err = {
                  min: this._min
                }
              }
            } else {
              if (this.currentValue.length && this.currentValue.length < this._min) {
                err = {
                  min: this._min
                }
              }
            }
          }
          if (!this.valid && this.dirty && Object.keys(err).length) {
            this.$emit('on-error', err)
          } else {
            this.$emit('on-clear-error')
          }
        }
    }
}
function pure (obj) {
  return JSON.parse(JSON.stringify(obj))
}
</script>
