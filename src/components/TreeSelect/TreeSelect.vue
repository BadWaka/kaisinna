<template>
    <div
        class="tree-select"
    >
        <div
            v-for="(option, optionIndex) in options"
            :key="optionIndex"
            :class="[
                option.selected
                    ? 'option-selected'
                    : ''
            ]"
            class="option"
            @click="onOptionClick({
                option,
                optionIndex,
                options
            })"
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
        onOptionClick(obj) {
            for (let i = 0; i < obj.options.length; i++) {
                let option = obj.options[i];
                this.$set(option, 'selected', false);
            }
            this.$set(obj.option, 'selected', true);
        }
    }
}
</script>

<style lang="less" scoped>
.option {
    padding: 10px 20px;
    cursor: pointer;
}
.option-selected {
    background-color: #999;
    color: #fff;
}
</style>