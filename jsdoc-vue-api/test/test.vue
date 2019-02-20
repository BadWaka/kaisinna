<template>
    <!-- test vue -->
    <div
        class="btn"
    >
        test
        <!-- @slot 容器 -->
        <slot/>
    </div>
</template>

<script>
export default {
    props: {
        /**
         * 选项数组
         *
         * @property {string} str='aaa' 测试字符串
         */
        options: {
            type: Array
        },
        /**
         * 按钮的文案
         */
        text: {
            type: String,
            default: '文案'
        }
    },
    data() {
        return {
        }
    },
    mounted() {
    },
    methods: {
    }
}
</script>

<style lang="less" scoped>
// 这是一个按钮
.btn {
}
</style>