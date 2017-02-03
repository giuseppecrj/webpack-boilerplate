import webpack from 'webpack'

export const sourcemaps = (devtool) => {
  return {
    devtool
  }
}

export const environment = (key, value) => {
  const env = {}
  env[key] = JSON.stringify(value)
  return {
    plugins: [
      new webpack.DefinePlugin(env)
    ]
  }
}
