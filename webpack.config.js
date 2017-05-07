const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: __dirname + "/src/main.jsx",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.jsx$/,
            loader: "jsx-loader"
        }]
    }
};