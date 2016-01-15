var path = require('path');
var webpack = require('webpack');

module.exports = {
    // 入口
    entry: {
        app: './src/app'
    },
    // 输出
    output: {
        path: path.join(__dirname, './build'),
        filename: '[name].js',
        publicPath: '/build/'
    },
    module: {
        // 加载器
        loaders: [
            { test: /\.vue$/, loader: 'vue' },
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
            { test: /\.css$/, loader: 'style!css!autoprefixer'},
            { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=1024'},
            { test: /\.(html|tpl)$/, loader: 'html-loader' },
        ]
    },
    babel: {
        presets: ['es2015']
    },
    plugins: [
        new webpack.ProvidePlugin({
            // "$": "zepto.min" //直接从node_modules中获取
        })
    ],
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.vue'],
        // 别名
        alias: {
            filter: path.join(__dirname, './src/filters'),
            components: path.join(__dirname, './src/components')
        }
    },
    // 开启source-map，webpack有多种source-map，在官网文档可以查到
    devtool: '#source-map'

};
