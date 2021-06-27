export default {
    methods: {
        isDesktop() {
            const width = window.innerWidth;
            return width > 1265;
        },
        isSmallScreens() {
            const width = window.innerWidth;
            return width < 767;
        }
    }
};
