<template>
    <div>
        <k-header></k-header>
        <div
            class="margin-header"
        >
        </div>
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

<style scoped>
.margin-header {
    margin-top: 72px;
}
</style>

