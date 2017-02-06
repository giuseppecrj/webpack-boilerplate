import webpack from 'webpack'

export const extract = (bundles, options) => {
  const entry = {}
  const names = []

  // Setup
  bundles.forEach(({ name, entries }) => {
    if (entries) {
      entry[name] = entries
    }
    names.push(name)
  })

  return {
    entry,
    plugins: [
      new webpack.optimize.CommonsChunkPlugin(
        Object.assign({}, options, { names })
      )
    ]
  }
}

export const lint = () => {
  return {
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          enforce: 'pre',
          loader: 'standard-loader'
        }
      ]
    }
  }
}

export const run = (include) => {
  return {
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'awesome-typescript-loader',
          include
        }
      ]
    }
  }
}

export const minify = ({ useSourceMap }) => {
  return {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: useSourceMap,
        mangle: {
          keep_fnames: true
        },
        compress: {
          warnings: false
        }
      })
    ]
  }
}
