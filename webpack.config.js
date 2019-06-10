const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports =(env, argv) => {
    return ({
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                { 
                    test: /\.(js|jsx)$/,
                    use: 'babel-loader',
                    exclude: '/node_modules/',
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
            ],
        },
        plugins: [
            new CopyPlugin([
                { from: './src/index.html', to: 'index.html'}
            ]),
            new webpack.HotModuleReplacementPlugin(),
            new CleanWebpackPlugin()
        ],
        devServer: {
            hot: true,
            port: 3000
        }
    });
}