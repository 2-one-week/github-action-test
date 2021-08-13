const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

const pathJoin = (targetPath) => path.join(__dirname, targetPath)

module.exports = {
    mode: 'development',
    resolve: {
        alias: {
            '@': pathJoin('src'),
        },
    },
    entry: ['@babel/polyfill', pathJoin('src/index.tsx')],
    output: {
        path: pathJoin('dist'),
        filename: '[name]-[chunkhash:10].min.js',
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['babel-loader', 'ts-loader'],
                exclude: '/node_modules/',
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new Dotenv(),
        new CleanWebpackPlugin(),
    ],
}
