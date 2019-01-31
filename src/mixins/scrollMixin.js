export default {
    mounted() {
        window.onscroll = this.scrollMixinOnWindowScroll;
    },
    methods: {
        scrollMixinOnWindowScroll() {
            console.log('scrollMixinOnWindowScroll', document.body.scrollTop);
        }
    }
};