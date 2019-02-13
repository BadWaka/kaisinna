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
            class="right"
        >
            <div
                v-for="(nav, navIndex) in navs"
                :key="navIndex"
                class="mg-r nav-item"
                @click="navItemClick({
                    nav,
                    navIndex
                })"
            >
                {{ nav.text }}
            </div>
            <!-- 动效 -->
            <div
                ref="lottie"
                :style="{
                    width: '100px'
                }"
            >
            </div>
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
            top: 0,
            navs: [
                {
                    text: '主页',
                    route: '/'
                },
                {
                    text: '组件',
                    route: '/components'
                }
            ]
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
        },
        navItemClick(obj) {
            this.$router.push(obj.nav.route);
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
    .right {
        display: flex;
        align-items: center;
        color: #fff;
        .nav-item {
            cursor: pointer;
        }
    }
}
</style>