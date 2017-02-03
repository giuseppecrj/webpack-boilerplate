import webpack from 'webpack'
import SvgStore from 'webpack-svgstore-plugin'

export const run = (include) => {
  return {
    module: {
      rules: [
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000,
                name: 'images/[name].[ext]'
              }
            },
            {
              loader: 'image-webpack-loader',
              query: {
                mozjpeg: {
                  progressive: true
                },
                gifsicle: {
                  interlaced: false
                },
                optipng: {
                  optimizationLevel: 4
                },
                pngquant: {
                  quality: '75-90',
                  speed: 3
                }
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new SvgStore({
        svgoOptions: {
          plugins: [
            { removeTitle: true }
          ]
        },
        prefix: ''
      }),
      new webpack.LoaderOptionsPlugin({
        responsiveLoader: {
          name: 'images/[name]-[width].'
        }
      })
    ]
  }
}
