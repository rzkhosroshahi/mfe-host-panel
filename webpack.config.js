const DotenvWebpack = require('dotenv-webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin');
const path = require('path');
require('dotenv').config({path: path.join(__dirname, '.env')});

const deps = require("./package.json").dependencies;
const ASSET_PATH = process.env.ASSET_PATH || 'http://localhost:8080/';
console.log('process.env.ECC_REMOTE >>', process.env.ECC_REMOTE);
console.log('process.env.ASSET_PATH >>', process.env.ASSET_PATH);
module.exports = {
  output: {
    publicPath: ASSET_PATH,
    clean: true,
  },

  devServer: {
    port: 8080,
    historyApiFallback: true,
    client: {
      progress: true,
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },

  resolve: {
    extensions: [".tsx", ".ts", ".vue", ".jsx", ".js", ".json"],
    alias: {
      vue: "vue/dist/vue.js",
    },
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "mfe_host_panel",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {},
      shared: {
        ...deps,
        vue: {
          singleton: true,
          eager: false,
          version: deps.vue,
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
    new CleanTerminalPlugin({
      message: `🚀 mfe panel running on http://localhost:8080/`,
      onlyInWatchMode: false
    }),
    new DotenvWebpack({
      systemvars: true,
    }),
  ],
};
