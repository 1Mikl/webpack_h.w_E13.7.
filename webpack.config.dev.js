const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devServer: {
        //contentBase: "../dist",
        static: './dist',
        open: true,
        hot: true,
        //port: 3001,
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',

        }),
        new CssMinimizerPlugin(),
        new TerserWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /.s?css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                }, 'css-loader'],

            },
            {
                test: /\.(png|jpe?g|svg|gif)$/i,
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 70
                            },
                        },
                    },
                ],

            }

        ],
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserWebpackPlugin(),
        ],

    }
};
