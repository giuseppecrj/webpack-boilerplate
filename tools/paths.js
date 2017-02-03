import * as path from 'path'

export const main = {
  input: path.resolve('./modules/client/main.ts'),
  output: {
    path: path.resolve('./public'),
    filename: 'javascripts/[name].js'
  }
}

export const client = {
  main: path.resolve('./modules/client'),
  server: {
    contentBase: path.resolve('./public'),
    port: 3000
  },
  styles: {
    purify: path.resolve('./modules/client/**/*.pug')
  }
}
