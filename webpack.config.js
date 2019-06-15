var webpack          = require('webpack');
const path           = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    output            : {
        filename      : '[name].js',
        path          : path.resolve(__dirname, 'dist', 'js')
    },
    entry             : {
        'content'     : './src/js/content.js',
        'background'  : './src/js/background.js'
    },
    resolve           : {
        alias         : {
            'lib'     : path.resolve(__dirname, 'src', 'js', 'lib.js'),
            'constant': path.resolve(__dirname, 'src', 'js', 'constant.js'),
        }
    },
    optimization: {
        minimizer: [new UglifyJsPlugin({
            uglifyOptions: {
                output: {
                    comments: false
                }
            }
        })]
    }
};