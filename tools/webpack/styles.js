import ExtractTextPlugin from 'extract-text-webpack-plugin'
import StyleLintPlugin from 'stylelint-webpack-plugin'
import PurifyCSSPlugin from 'purifycss-webpack'
import glob from 'glob'

export const run = (include) => {
  return {
    module: {
      rules: [
        {
          test: /\.sass$/,
          use: [
            'style-loader',
            'css-loader?sourceMap',
            'postcss-loader?sourceMap=inline',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                data: `$env: ${process.env.NODE_ENV};`
              }
            }
          ],
          include
        }
      ]
    },
    plugins: [
      new StyleLintPlugin({
        syntax: 'sugarss',
        files: './modules/**/*.sass'
      })
    ]
  }
}

export const production = (include, purifyPath) => {
  return {
    module: {
      rules: [
        {
          test: /\.sass$/,
          loader: ExtractTextPlugin.extract({
            fallbackLoader: 'style-loader',
            loader: 'css-loader?sourceMap!postcss-loader?sourceMap=inline!sass-loader?sourceMap',
            publicPath: process.env.CDN_URL + '/' + process.env.CDN_VERSION + '/'
          }),
          include
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('stylesheets/[name].css'),
      new PurifyCSSPlugin({
        paths: glob.sync(purifyPath),
        purifyOptions: {
          minify: true,
          info: true
        }
      }),
      new StyleLintPlugin({
        syntax: 'sugarss',
        files: './modules/**/*.sass'
      })
    ]
  }
}
