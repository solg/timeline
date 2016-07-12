var path = require('path'),
    webpack = require('webpack'),

config = {
    context: path.join(__dirname, 'app'),
    entry: './index.js',
    output: {
        path: path.join(__dirname, 'app'),
        filename: 'bundle.js'
    },
    plugins: [],
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
            { test: /\.component$/, loader: 'tag', exclude: /node_modules/ },
            { test: /\.css$/, loader: 'style!css', exclude: /node_modules/ },
            { test: /\.less$/, loader: 'style!css!less', exclude: /node_modules/ },
            {
                test: /\.(png|jpg|ttf|eot|woff|woff2|svg)([\?]?.*)$/,
                loader: 'url?limit=10000',
                exclude: /node_modules/
            }
        ]
    }
};

if(process.env.NODE_ENV === 'production'){
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false
            }
        })
    );
    config.output.path = path.join(__dirname, 'dist');
}

module.exports = config;
