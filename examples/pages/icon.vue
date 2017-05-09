<template>
    <div class="page-icon">
        <div class="page-icon__group">
            <ul>
                <li  v-for="item in list">
                    <seal-icon :type="item"></seal-icon>
                    <span>{{ item }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import icon from '../icon.json';
const iconList = icon;
export default {
    name: 'page-icon',
    data () {
        return {
            list : iconList
        }
    },
    mounted (){

    },
    methods : {

    }
};
</script>

<style lang="less" scoped>
    .page-icon {3
        padding:.2rem  0.3rem;
        & .page-icon__group {
            margin-bottom: .3rem;
        }
        li{
            display: inline-block;
            background: #fff;
            width: ~"calc(25% - .1rem)";
            text-align: center;
            margin:.05rem;
            height:2.4rem;
            float: left;
            align-items: center;
            padding:.2rem;
            position: relative;
            & span{
                display: block;
                padding-top:.3rem;
                font-size: .24rem;
                position: absolute;
                bottom:0.1rem;
                left:0;
                width: 100%;
                text-align: center;
            }
        }
        .sealui-icon{
            &:before{
                color:hsl(0, 0%, 48%);
                font-size: 1rem
            }

        }
    }
</style>
