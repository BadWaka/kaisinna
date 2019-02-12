/**
 * 滚动 mixin
 */
export default {
    data() {
        return {
            scrollMixinLastScrollTop: -1
        }
    },
    mounted() {
        window.onscroll = this.scrollMixinOnWindowScroll;
    },
    methods: {
        scrollMixinOnWindowScroll() {
            // console.log('scrollMixinOnWindowScroll', document.body.scrollTop);
            if (this.scrollMixinLastScrollTop === -1) {
                this.scrollMixinLastScrollTop = document.body.scrollTop;
                return;
            }
            if (this.scrollMixinLastScrollTop < document.body.scrollTop) {
                this.scrollMixinScrollDown();
            }
            else {
                this.scrollMixinScrollUp();
            }
            this.scrollMixinLastScrollTop = document.body.scrollTop;
        },
        // 向上滑动
        scrollMixinScrollUp() {
            // console.log('向上滑动');
        },
        // 向下滑动
        scrollMixinScrollDown() {
            // console.log('向下滑动');
        }
    }
};