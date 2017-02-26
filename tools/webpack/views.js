import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'

export const run = () => {
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
        },
        {
          test: /\.html$/,
          loader: 'html-loader?pretty=true'
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve('./modules/client/pages/home/home.client.page.pug')
      })
    ]
  }
}
