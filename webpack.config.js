/* 引入操作路径模块和webpack */
var path = require('path');
var webpack = require('webpack');
var baseUrl = './src/main/webapp';
var NODE_ENV = process.env.NODE_ENV || 'development';
var config = {
    /* 输入文件 */
    entry: {
        index:baseUrl+"/app/js/index.js",
        common:["jquery","vue","bootstrap","vue-router","vue-loading"]
    },
    output: {
        /* 输出目录，没有则新建 */
        path: path.resolve(__dirname, baseUrl+'/app/dist'),
        /* 静态目录，可以直接从这里取文件 */
        publicPath: './dist/',
        /* 文件名 */
        filename: '[name].js'
    },

    plugins: [new webpack.optimize.CommonsChunkPlugin(
        {
            name: "common",
            filename: "common.js",
            minChunks: Infinity
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
        }),
        new webpack.ProvidePlugin({
            $:"jquery",
            jQuery:"jquery"
        })
        // ,
        // new webpack.optimize.UglifyJsPlugin({//压缩文件
        //     compress: {
        //         warnings: false
        //     }
        // })
    ],
    module: {
        loaders: [
            /* 用来解析vue后缀的文件 */
            {
                test: /(\.vue$)|(\.vuex$)/,
                loader: 'vue'
            },
            /* 用babel来解析js文件并把es6的语法转换成浏览器认识的语法 */
            {
                test: /\.js$/,
                loader: 'babel',
                /* 排除模块安装目录的文件 */
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test:/\.html$/,
                loader:"html"
            },
            {
                test: /\.(png|jpg|gif|svg)(\?.*)?$/,
                loader: 'url-loader?limit=8192'
            },
            {test: /\.eot(\?.*)?$/, loader: "file"},
            {test: /\.(woff|woff2)(\?.*)?$/, loader: "url?prefix=font/&limit=5000"},
            {test: /\.ttf(\?.*)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
            {test: /\.svg(\?.*)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"},
            {
                test: /bootstrap[\\\/]js[\\\/]/,
                loader: "imports?jQuery=jquery"
            },
            {
                test: /bootstrap-table[\\\/]js[\\\/]/,
                loader: "imports?jQuery=jquery"
            }
        ]
    },
    // 转化成es5的语法
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.vue'],
    }
}

module.exports = config;