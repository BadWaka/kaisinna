<template>
    <!-- test vue -->
    <div
        class="btn"
        @click="onClick"
        @touchstart="onTouchStart"
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
        /**
         * 测试方法1
         *
         * @param {string} a 参数1
         * @param {number} b 参数2
         * @param {boolean} c 参数3
         * @return {number} res 结果
         */
        func1(a, b, c) {
            return 0;
        },

        onClick(e) {

            /**
             * 点击事件
             *
             * @event click
             * @property {Event} e 事件对象
             */
            this.$emit('click', e);
        },

        onTouchStart() {

            /**
             * 触摸开始事件
             *
             * @event touchstart
             * @property {Event} e 事件对象
             */
            this.$emit('touchstart', e);
        }
    }
}
</script>

<style lang="less" scoped>
// 这是一个按钮
.btn {
}
</style>