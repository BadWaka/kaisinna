<template>
    <div
        class="tree-select"
    >
        <div
            v-for="(option, optionIndex) in options"
            :key="optionIndex"
            class="option"
        >
            {{ option.nameCN }} {{ option.name }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        options: {
            type: Array
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
.option {
    padding: 10px 20px;
}
</style>