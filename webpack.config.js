module.exports = {
    module: {
        rules: [
            {
                test: /\.less$/,
                use: ['vue-style-loader', 'css-loader', 'less-loader']
            }
        ]
    }
};
