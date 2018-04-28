var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: [
        // 'webpack/hot/dev-server',
        path.resolve(__dirname, './src/app/main.js')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/bundle.js'
    },
    devServer:{
        inline: true,
        port: 8181
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                include: path.resolve(__dirname,  'src'),
                loader: 'babel-loader',
                options:{
                    presets: ['es2015','react']
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.css$/,
                use:['style-loader','css-loader',{
                    loader: 'postcss-loader',
                    options:{
                        plugins:[
                            require('postcss-import'),
                            require('autoprefixer')({
                                browsers:['last 5 versions']
                            })
                        ]
                    }
                }]
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ]
}