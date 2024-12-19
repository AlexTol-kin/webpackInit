const { merge } = require("webpack-merge");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const commonConfig = require("./webpack.config.common");
const { split } = require("postcss/lib/list");
const { cache } = require("webpack");

module.exports = merge(commonConfig, {
  mode: "production",
  devtool: "source-map",
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,
        vendor: {
          chunks: "all",
          name: "vendors",
          test: /node_modules/,
        },
      },
    },
  },
});
