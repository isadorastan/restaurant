module.exports = {
    css: {
        loaderOptions: {
            less: {
                additionalData: `@import "@/assets/css/variables.less";`
            }
        }
    },
    chainWebpack: (config) => {
        const svgRule = config.module.rule('svg');

        svgRule.uses.clear();

        svgRule
            .use('babel-loader')
            .loader('babel-loader')
            .end()
            .use('vue-svg-loader')
            .loader('vue-svg-loader');
    }
};
