module.exports = {
    lintOnSave: false,
    publicPath: '',
    chainWebpack: (config) => {
        const svgRule = config.module.rule('svg')

        svgRule.uses.clear()

        svgRule
            .use('babel-loader')
            .loader('babel-loader')
            .end()
            .use('vue-svg-loader')
            .loader('vue-svg-loader')
    },
    pages: {
        index: {
            entry: 'src/main.js',
            title: 'МаркетЦифра',
            template: 'public/index.html',
            filename: 'index.html'
        }
    }
}
