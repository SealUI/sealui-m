<template>
    <div class="page-rollnotice">
        <div class="page-rollnotice__group">
            <seal-rollnotice autoplay="3000">
                <seal-rollnotice-item><span style="color:#F00;">&nbsp;荐&nbsp;</span>荣耀V9 3月超级钜惠！</seal-rollnotice-item>
                <seal-rollnotice-item><span style="color:#F00;">&nbsp;荐&nbsp;</span>3.23京东超级品牌日格力盛典</seal-rollnotice-item>
                <seal-rollnotice-item><span style="color:#F00;">&nbsp;荐&nbsp;</span>京东服饰 早春新品低至7折</seal-rollnotice-item>
            </seal-rollnotice>

            <seal-rollnotice align="center" height="1" autoplay="2000" class="demo-small-pitch">
                <seal-rollnotice-item>
                    设置高度！设置高度！<br/>
                    内容居中！内容居中！<br/>
                </seal-rollnotice-item>
                <seal-rollnotice-item>
                    2.5秒自动切换！<br>
                    2.5秒自动切换！<br>
                </seal-rollnotice-item>
                <seal-rollnotice-item>
                    京东服饰 早春新品低至7折 <br>
                    京东服饰 早春新品低至7折 <br>
                </seal-rollnotice-item>
            </seal-rollnotice>

            <seal-rollnotice direction="down" align="right" height="1" autoplay="2000" class="demo-small-pitch">
                <seal-rollnotice-item>
                    向下滚动！向下滚动！<br/>
                    向下滚动！向下滚动！<br/>
                </seal-rollnotice-item>
                <seal-rollnotice-item>
                    内容居右！内容居右！<br>
                    内容居右！内容居右！<br>
                </seal-rollnotice-item>
                <seal-rollnotice-item>
                    京东服饰 早春新品低至7折 <br>
                    京东服饰 早春新品低至7折 <br>
                </seal-rollnotice-item>
            </seal-rollnotice>

        </div>
    </div>
</template>

<script>
export default {
    name: 'page-rollnotice',
    data () {
        return {

        }
    },
    mounted (){

    },
    methods : {

    }
};
</script>

<style lang="less" scoped>
    .page-rollnotice {
        padding: 0.3rem;
        & .page-rollnotice__group {
            margin-bottom: .3rem;
        }
        & .demo-small-pitch{
            margin:.2rem 0;
        }
    }
</style>
