export default {
    methods: {
        isDesktop() {
            const width = window.innerWidth;
            return width > 767;
        },
        isSmallScreens() {
            const width = window.innerWidth;
            return width < 767;
        }
    }
};
