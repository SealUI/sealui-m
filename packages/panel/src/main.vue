<template>
    <div class="sealui-panel sealui-panel_access">

        <!--type==='1' 图文组合列表-->
        <template v-if="type === '1'">
            <div class="sealui-panel__hd" v-if="header" v-html="header"></div>
            <div class="sealui-panel__bd">
                <a :href="getUrl(item.url)" v-for="item in list" @click.prevent="onItemClick(item)" class="sealui-media-box sealui-media-box_appmsg">
                    <div class="sealui-media-box__hd" v-if="item.img">
                        <img class="sealui-media-box__thumb" :src="item.img" alt="">
                    </div>
                    <div class="sealui-media-box__bd">
                        <h4 class="sealui-media-box__title" v-html="item.title"></h4>
                        <p class="sealui-media-box__desc" v-html="item.desc"></p>
                    </div>
                </a>
            </div>
        </template>

        <!--type==='2' 文字组合列表-->
        <template v-if="type === '2'">
            <div class="sealui-panel__hd" v-if="header" v-html="header"></div>
            <div class="sealui-panel__bd">
                <div class="sealui-media-box sealui-media-box_text" v-for="item in list" @click.prevent="onItemClick(item)">
                    <h4 class="sealui-media-box__title" v-html="item.title"></h4>
                    <p class="sealui-media-box__desc" v-html="item.desc"></p>
                </div>
            </div>
        </template>

        <!--type==='3' 小图文组合列表-->
        <template v-if="type === '3'">
            <div class="sealui-panel__hd" v-if="header" v-html="header"></div>
            <div class="sealui-media-box sealui-media-box_small-appmsg">
                <div class="sealui-cells">
                  <a class="sealui-cell sealui-cell__access" :href="getUrl(item.url)" v-for="item in list" @click.prevent="onItemClick(item)">
                    <div class="sealui-cell__hd">
                      <img :src="item.img">
                    </div>
                    <div class="sealui-cell__bd">
                      <p v-html="item.title"></p>
                    </div>
                    <span class="sealui-cell__ft"></span>
                  </a>
                </div>
            </div>
        </template>

        <!--type==='4' 文字列表附来源-->
        <template v-if="type === '4'">
             <div class="sealui-panel__hd" v-if="header" v-html="header"></div>
            <div class="sealui-panel__bd">
                <div class="sealui-media-box weui-media-box_text" :href="getUrl(item.url)" @click.prevent="onItemClick(item)" v-for="item in list">
                    <h4 class="sealui-media-box__title" v-html="item.title"></h4>
                    <p class="sealui-media-box__desc" v-html="item.desc"></p>
                    <ul class="sealui-media-box__info" v-if="item.info">
                        <li class="sealui-media-box__info__meta" v-for="infoItem in item.info" v-html="infoItem"></li>
                    </ul>
                </div>
            </div>
        </template>

        <div class="sealui-panel__ft" :href="getUrl(footer.url)" v-if="footer && type !== '3'" @click.prevent="onClickFooter">
            <a href="javascript:void(0);" class="sealui-cell sealui-cell__access sealui-cell__link">
                <div class="sealui-cell__bd">查看更多</div>
                <span class="sealui-cell__ft"></span>
            </a>
        </div>

    </div>
</template>

<script>
import { router, getUrl } from 'sealui-m/src/router'
export default {
    name: 'seal-panel',
    props: {
        header: String,
        footer: Object,
        list: Array,
        type: {
            type: String,
            default: '1'
        }
    },
    methods: {
        getUrl (url) {
            return getUrl(url, this.$router)
        },
        onClickFooter () {
            this.$emit('on-click-footer')
            router(this.footer.url, this.$router)
        },
        onClickHeader () {
            this.$emit('on-click-header')
        },
        onItemClick (item) {
            this.$emit('on-click-item', item)
            router(item.url, this.$router)
        }
    }
};
</script>
