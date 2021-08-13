const path = require('path')
const {merge} = require('webpack-merge')
const common = require('./webpack.common')

const pathJoin = (targetPath) => path.join(__dirname, targetPath)

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval',

    devServer: {
        contentBase: pathJoin('dist'),
        port: 8000,
        open: true,
        hot: true,
        historyApiFallback: true,
        publicPath: '/',
    },
})
