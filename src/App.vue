<template>
    <div>
        <!-- wakakak -->
        <k-header></k-header>
        <div
            class="margin-header"
        >
        </div>
        <router-view></router-view>
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

