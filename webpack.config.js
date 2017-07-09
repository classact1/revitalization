const path = require('path');

module.exports = {

    entry: path.resolve(__dirname,'views/app.js'),
    output: {
        path: path.resolve(__dirname, 'public/assets/js'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'views'),
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
};
