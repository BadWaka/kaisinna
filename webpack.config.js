const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
// 分析 bundle.js 里的到底用了哪些玩意儿
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './static'),
        filename: '[name].bundle.js'
    },
    devtool: 'eval',
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            },
            {
                test: /\.vue$/,
                use: [
                    'vue-loader'
                ]
            },
            // 图片
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            // 字体
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '网页',
            template: 'src/index.html'
        }),
        new VueLoaderPlugin(),
        // new CleanWebpackPlugin(['dist']),
        new ManifestPlugin(),
        new BundleAnalyzerPlugin()
    ],
    // 代码分离，将公共的依赖模块提取到已有的入口 chunk 中，或者提取到一个新生成的 chunk
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all'
    //     }
    // },
    // 外部 js，全局引入 js，减少 bundle.js 的体积
    externals: {
        lodash: '_',
        lottie: 'lottie',
        vue: 'Vue'
    }

};