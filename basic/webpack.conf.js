var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: __dirname + '/src/app.js'
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/', // serve to root
        filename: "[name].js",
        sourceMapFilename: "[name].js.map"
    },
    stats: {
        colors: true,
        reasons: true
    },
    debug: true, // switch loaders to debug mode
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/index.html',
            filename: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.OccurenceOrderPlugin()
    ],
    module: {
        preLoaders: [
            {
                test: /\.json$/,
                exclude: /node_modules/,
                loader: 'json loader'
            }
        ],
        loaders: [
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$|\.html$/,
                loader: 'file'
            }
        ]
    },
    externals: {},
    resolve: {
        extensions: ['', '.js', '.jsx', 'index.js', 'index.jsx', '.json', 'index.json']
    },
    node: {},
    browser: {
        //"console": false,
        //"net": false,
        //"tls": false
    },
    eslint: {
        configFile: __dirname + '/../.eslintrc'
    }
};
