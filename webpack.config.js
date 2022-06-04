const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require('path');
require('dotenv').config({path: path.join(__dirname, '.env')});

const deps = require("./package.json").dependencies;
const ASSET_PATH = process.env.ASSET_PATH || 'http://localhost:8080/';

const ECC_REMOTE = process.env.ECC_REMOTE;
const STORAGE_REMOTE = process.env.STORAGE_REMOTE;

module.exports = {
  output: {
    publicPath: ASSET_PATH,
  },

  devServer: {
    port: 8080,
    historyApiFallback: true,
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
      remotes: {
        'ecc': ECC_REMOTE,
        'storage': STORAGE_REMOTE,
      },
      exposes: {},
      shared: {
        ...deps,
        vue: {
          singleton: true,
          eager: true,
          version: deps.vue,
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
