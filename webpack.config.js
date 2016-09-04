/* When we run webpack, it will transform our ES6 javascript to ES2015
 *  and create a new dist folder with a bundled , minified version of our scripts.
 *  HtmlWebpackPlugin will also take our html from app folder and inject it into
 *  our dist folder. Under module/loaders we then have a regex for what to
 *  to transform, what to exlude and which loaders to run.
 */
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: [
        './app/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'index_bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exlude: /node_modules/,
                loader: 'babel-loader'
            },
            // Used for Bootstrap Less Source Files
            { test: /\.less/, loader: 'style!css!less' },
            // Used for Bootstrap Glyphicon Fonts
            { test: /\.(woff2|woff|ttf|svg|eot)$/, loader: 'file' }
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
};
