<template>
    <div
        ref="index"
    >
        Index

        我要测试自己开发一个 loader
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    mounted() {
        let ref = this.$refs.index;
        console.log('ref', ref, 'refs', this.$refs);
    },
    methods: {
    }
}
</script>

<style lang="less" scoped>
.k-header {
}
</style>