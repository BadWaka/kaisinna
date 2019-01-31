<template>
    <div class="k-header">
        KHeader
    </div>
</template>

<script>
import ScrollMixin from '../mixins/scrollMixin.js';

export default {
    mixins: [ScrollMixin],
    data() {
        return {
        }
    },
    mounted() {
        console.log('mounted');
    },
    methods: {
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
}
</style>