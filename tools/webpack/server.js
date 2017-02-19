import webpack from 'webpack'

export const run = (options) => {
  return {
    devServer: {
      historyApiFallback: true,
      contentBase: options.contentBase,
      stats: 'errors-only',
      port: options.port
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin({
        multiStep: false
      }),
      new webpack.NamedModulesPlugin()
    ]
  }
}
