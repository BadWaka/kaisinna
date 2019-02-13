<template>
    <div
        :style="{
            transform: 'translateY(' + translateY + 'px)',
            webkitTransform: 'translateY(' + translateY + 'px)'
        }"
        class="k-header"
    >
        KHeader
    </div>
</template>

<script>
import ScrollMixin from '../mixins/scrollMixin.js';

export default {
    mixins: [ScrollMixin],
    data() {
        return {
            translateY: 0
        }
    },
    mounted() {
        console.log('mounted');
    },
    methods: {
        scrollMixinScrollUp() {
            this.translateY = 0;
        },
        scrollMixinScrollDown() {
            this.translateY = -72;
        }
    }
}
</script>

<style lang="less" scoped>
.k-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 72px;
    background-color: #202124;
    transition: transform .3s cubic-bezier(.4,0,.2,1) .3s,opacity 0s .3s;
}
</style>