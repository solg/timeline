var path = require('path'),
    webpack = require('webpack'),

config = {
    context: path.join(__dirname, 'app'),
    entry: './index.js',
    output: {
        path: path.join(__dirname, 'app'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({riot: 'riot'})
    ],
    module: {
        preLoaders: [
            { test: /\.component$/, loader: 'riotjs', query: { type: 'none' }, exclude: /node_modules/ }
        ],
        loaders: [
            { test: /\.js$|\.component$/, loader: 'babel', exclude: /node_modules/ },
            { test: /\.css$/, loader: 'style!css', exclude: /node_modules/ },
            { test: /\.less$/, loader: 'style!css!less', exclude: /node_modules/ },
            {
                test: /\.(png|jpg|ttf|eot|woff|woff2|svg)([\?]?.*)$/,
                loader: 'url?limit=10000',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.component']
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
