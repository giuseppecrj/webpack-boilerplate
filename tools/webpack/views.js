import HtmlWebpackPlugin from 'html-webpack-plugin'

export const run = () => {
  return {
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Webpack Demo'
      })
    ]
  }
}

export const views = (include) => {
  return {
    module: {
      rules: [
        {
          test: /\.pug$/,
          use: [
            {
              loader: 'apply-loader'
            },
            {
              loader: 'pug-loader',
              query: {
                doctype: 'html',
                plugins: ['pug-plugin-ng']
              }
            }
          ]
        }
      ]
    }
  }
}
