<template>
    <div class="page-grid">
        <div class="page-grid__group">

            <seal-group title="二列">
                <seal-grid :column="2">
                    <grid-item label="九宫格" v-for="i in 8" link="/demos" :key="i">
                        <img src="~examples/assets/img/icon_tabbar.png" slot="icon">
                    </grid-item>
                </seal-grid>
            </seal-group>

            <seal-group title="三列">
                <seal-grid :column="3">
                    <grid-item label="九宫格" v-for="i in 9"  @on-click="dd"  :key="i">
                        <img src="~examples/assets/img/icon_tabbar.png" slot="icon">
                    </grid-item>
                </seal-grid>
            </seal-group>

            <seal-group title="四列">
                <seal-grid :column="4">
                    <grid-item label="九宫格" v-for="i in 8"  :key="i">
                        <img src="~examples/assets/img/icon_tabbar.png" slot="icon">
                    </grid-item>
                </seal-grid>
            </seal-group>

        </div>
    </div>
</template>

<script>
export default {
    name: 'page-grid',
    data () {
        return {

        }
    },
    mounted (){

    },
    methods : {
        dd () {
            console.log('1');
        }
    }
};
</script>

<style lang="less" scoped>
    .page-grid {
        padding: 0rem;
        & .page-grid__group {
            margin-bottom: .3rem;
        }

    }
</style>
