<template>
    <div class="page-list">
        <div class="page-list__group">
            <seal-list :type="type" title="列表">
                 <seal-list-item v-for="item in list" :key="item.id">
                     <img slot="img" :src="type != 5 ? item.img + '_220x220.jpg' : item.img">
                     <span slot="title">{{item.title}}</span>
                     <div slot="other" class="sealui-list__other">
                        <div>
                            <span class="sealui-list__price"><em>¥</em>{{item.price}}</span>
                            <span class="sealui-list__del-price">¥{{item.w_price}}</span>
                        </div>
                        <div>content</div>
                    </div>
                 </seal-list-item>
            </seal-list>
        </div>
    </div>
</template>

<script>
export default {
    name: 'page-list',
    data () {
        return {
            //type:1
        }
    },
    mounted (){

    },
    methods : {

    },
    computed : {
        type() {
            return this.$route.params.id;
        },
        list() {
            const arr = [
                {img: "http://img1.shikee.com/try/2016/06/23/14381920926024616259.jpg", title: "标题标题标题标题标题", price: 56.23, w_price: 89.36},
                {img: "http://img1.shikee.com/try/2016/06/21/10172020923917672923.jpg", title: "骆驼男装2016夏装男士短袖T恤 圆领衣服 印花男装体恤 半袖打底衫", price: 56.23, w_price: 89.36},
                {img: "http://img1.shikee.com/try/2016/06/23/15395220917905380014.jpg", title: "条纹短袖T恤男士韩版衣服大码潮流男装夏季圆领体恤2016新款半袖", price: 56.23, w_price: 89.36},
                {img: "http://img1.shikee.com/try/2016/06/25/14244120933639105658.jpg", title: "夏季青少年衣服男生潮牌t恤 男士 夏秋学生 日系棉短袖半袖男小衫", price: 56.23, w_price: 89.36},
                {img: "http://img1.shikee.com/try/2016/06/26/12365720933909085511.jpg", title: "2016夏装新款时尚潮流短袖T恤男纯棉V领日系青少年韩版夏季上衣服", price: 56.23, w_price: 89.36},
                {img: "http://img1.shikee.com/try/2016/06/19/09430120929215230041.jpg", title: "男装衣服男夏t恤 男士短袖t恤圆领夏季潮牌宽松原宿风半截袖男", price: 56.23, w_price: 89.36}
            ];
            if (this.$route.params.id == 3) {
                const imgs = [
                    "http://img1.shikee.com/lottery/2016/06/24/15421120925701980627.jpg",
                    "http://img1.shikee.com/lottery/2016/06/14/20403320925701986993.jpg",
                    "http://img1.shikee.com/lottery/2016/06/12/13411720925701982313.jpg",
                    "http://img1.shikee.com/lottery/2016/06/12/12460220925701986563.jpg",
                    "http://img1.shikee.com/lottery/2016/06/08/23124920925701986316.jpg",
                    "http://img1.shikee.com/lottery/2016/06/07/23270520925701982715.jpg"
                ];
                arr.forEach(function (item, key) {
                    item.img = imgs[key];
                });
            }
            return arr;
        }
    }
};
</script>

<style lang="less" scoped>
    .page-list {
        padding: 0.3;
        & .page-list__group {
            margin-bottom: .15rem;
        }
    }
</style>
