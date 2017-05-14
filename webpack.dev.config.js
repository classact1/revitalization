const path = require('path');
const webpack = require('webpack');

module.exports = {

    entry: [path.resolve(__dirname,'views/index.js'), 'webpack-hot-middleware/client', 'webpack/hot/dev-server'],
    output: {
        path: '/',
        filename: 'bundle.js',
        publicPath: 'http://localhost:4000/js/'
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'views'),
                loaders: ['react-hot', 'babel-loader?presets[]=react,presets[]=es2015']
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
};
