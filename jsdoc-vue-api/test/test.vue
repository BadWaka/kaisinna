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
         * 测试属性1
         */
        prop1: {
            type: String,
            default: '测试属性1111111',
            required: true
        },
        /**
         * 需要被被忽略的属性
         *
         * @ignore
         */
        prop2: {
            type: String,
            default: '测试属性22222222'
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
         * @param {string} a 参数a
         * @param {number} b 参数b
         * @param {boolean} c 参数c
         * @return {number} res 结果
         */
        func1(a, b, c) {
            return 0;
        },

        /**
         * 测试方法1
         *
         * @param {string} d 参数d
         * @param {number} e 参数e
         * @param {boolean} f 参数f
         * @return {string} res 结果
         */
        func2(d, e, f) {
            return 'demacia';
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