"use strict";

const NODE_ENV = process.env.NODE_ENV || "deelopment";
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WebpackInfoPlugin = require('webpack-info-plugin');
const webpack = require("webpack");
const path = require("path");

module.exports = {
    context: path.join(__dirname, './public/src'),
    entry: "./js/script.js",
    output: {
        path: path.join(__dirname, './public/dist'),
        filename: "./js/[name].js"
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    watch: NODE_ENV == 'development',
    watchOptions: {
        aggregateTimeout: 100
    },
    devtool: NODE_ENV == "development" ? "cheap-inline-module-source-map" : null,
    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV:   JSON.stringify(NODE_ENV),
            LANG:       JSON.stringify("ru")
        }),
        new ExtractTextPlugin("./css/[name].css"),
        new WebpackInfoPlugin({
            stats: {
                colors: true,
                version: false,
                hash: false,
                timings: true,
                assets: false,
                chunks: false,
                chunkModules: false,
                modules: false
            },
            state: true
        })
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: [/node_modules/],
            loader: "babel-loader",
            query: {
                presets: ['es2015', 'react', 'stage-0', 'stage-1']
                }
        },
        {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        },
        {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
        }]
    }
};