<template>
    <div>
        <k-header></k-header>
        <div
            class="margin-header"
        >
        </div>
        <router-view></router-view>
        <!-- 占位 -->
        <!-- <div
            v-for="i in 100"
            :key="i"
        >
            {{ i }}
        </div> -->
    </div>
</template>

<script>
import KHeader from './components/KHeader.vue';

export default {
    data() {
        return {
        }
    },
    components: {
        KHeader
    }
}
</script>

<style lang="less" scoped>
.margin-header {
    margin-top: 72px;
}
</style>

