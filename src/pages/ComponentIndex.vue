<template>
    <div
        class="component-index"
    >
        <div
            :style="{
                'height': '20px'
            }"
        >
        </div>
        <tree-select
            :options="treeSelect.options"
        >
        </tree-select>
    </div>
</template>

<script>
import TreeSelect from '../components/TreeSelect/TreeSelect.vue';

export default {
    data() {
        return {
            treeSelect: {
                options: [
                    {
                        nameCN: '按钮',
                        name: 'Button'
                    },
                    {
                        nameCN: '模态框',
                        name: 'Modal'
                    }
                ]
            }
        }
    },
    mounted() {
    },
    methods: {
    },
    components: {
        TreeSelect
    }
}
</script>

<style lang="less" scoped>
.k-header {
}
</style>