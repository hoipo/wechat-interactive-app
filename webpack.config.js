var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var UglifyJSPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
    entry: [
    'webpack/hot/dev-server', 
    'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname, './source/app.jsx')],
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
    },
    module: {
        rules: [{
            test: /\.js|jsx$/,
            exclude: /node_modules/,
            loaders: ['react-hot-loader', 'babel-loader?presets[]=react,presets[]=es2015']
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader', 'postcss-loader'],
        }, {
            test: /\.less$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
        }, {
            test: /\.(jpg|png)$/,
            exclude: /node_modules/,
            use: 'url-loader',
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.less'],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            title: 'PCauto大屏互动游戏',
            template: './source/template/index.html',
            inject: 'body'
        }), 
        // new UglifyJSPlugin()
    ],
     devtool: 'cheap-module-eval-source-map',
}
