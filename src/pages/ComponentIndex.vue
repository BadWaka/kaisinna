<!-- 组件首页 -->
<template>
    <div
        class="component-index"
    >
        <tree-select
            :options="treeSelect.options"
            class="tree-select"
        >
        </tree-select>
        <div
            class="right"
        >

        </div>
    </div>
</template>

<script>
import TreeSelect from '../components/TreeSelect/TreeSelect.vue';
import marked from 'marked';

console.log('marked', marked);

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
.component-index {
    display: flex;
    padding-top: 20px;
    .tree-select {
        flex: 1;
    }
    .right {
        flex: 3;
    }
}
</style>