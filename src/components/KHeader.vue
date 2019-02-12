<template>
    <div
        :style="{
            top
        }"
        class="k-header"
    >
        <div class="title">
            Kaisinna
        </div>
        <div
            ref="lottie"
            :style="{
                width: '100px'
            }"
        >
        </div>
    </div>
</template>

<script>
import ScrollMixin from '../mixins/scrollMixin.js';
import Lottie from 'lottie';

export default {
    mixins: [ScrollMixin],
    data() {
        return {
            top: 0
        }
    },
    mounted() {
        console.log('mounted', Lottie);
        Lottie.loadAnimation({
            container: this.$refs.lottie,
            loop: true,
            path: 'https://labs.nearpod.com/bodymovin/demo/pancakes/data.json'
        });
    },
    methods: {
        // 向上滑动
        scrollMixinScrollUp() {
            this.top = 0;
        },
        // 向下滑动
        scrollMixinScrollDown() {
            this.top = '-72px';
        }
    }
}
</script>

<style lang="less" scoped>
.k-header {
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    height: 72px;
    background-color: #202124;
    transition: all .5s cubic-bezier(.4,0,.2,1);
    box-shadow: 2px 4px 10px rgba(0,0,0,.2);
    .title {
        color: #fff;
        font-size: 24px;
    }
}
</style>