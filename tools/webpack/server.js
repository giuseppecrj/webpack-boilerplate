import webpack from 'webpack'

export const run = (options) => {
  return {
    devServer: {
      historyApiFallback: true,
      contentBase: options.contentBase,
      hot: true,
      hotOnly: true,
      stats: 'errors-only',
      port: options.port
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin({
        multiStep: true
      }),
      new webpack.NamedModulesPlugin()
    ]
  }
}
