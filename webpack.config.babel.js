import webpack from 'webpack'
import merge from 'webpack-merge'
import requireDir from 'require-dir'
import dotenv from 'dotenv'
import path from 'path'

process.noDeprecation = true

// Locals Paths
import { main, client } from './tools/paths'

// Environment Variables
dotenv.load()

const environment = {
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  'process.env.API_VERSION': JSON.stringify(process.env.API_VERSION),
  'process.env.WEBPACK_PUBLIC_PATH': JSON.stringify(process.env.WEBPACK_PUBLIC_PATH)
}

// Tasks
const tasks = requireDir('./tools/webpack')

const common = merge([
  {
    entry: {
      main: main.input
    },
    output: {
      filename: main.output.filename,
      path: main.output.path
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      alias: {
        images: path.resolve('./modules/client/core/images/')
      }
    },
    plugins: [
      new webpack.DefinePlugin(environment),
      new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ]
  }
])

export default (env) => {
  switch (env.target) {
    case 'production':
      return merge([
        common,
        // sourcemaps
        tasks.utils.sourcemaps('source-map'),
        // views
        tasks.views.run(client.main),
        // fonts
        tasks.fonts.run(),
        // styles
        tasks.styles.production(client.main, client.styles.purify),
        // scripts
        tasks.scripts.extract([
          {
            name: 'vendor',
            entries: ['angular']
          }
        ]),
        tasks.scripts.lint(),
        tasks.scripts.run(client.main),
        tasks.scripts.minify({ useSourceMap: true }),
        // images
        tasks.images.run(env)
      ])
    default:
      return merge([
        common,
        // sourcemaps
        tasks.utils.sourcemaps('eval-source-map'),
        // views
        tasks.views.run(client.main),
        // fonts
        tasks.fonts.run(),
        // styles
        tasks.styles.run(client.main),
        // server
        tasks.server.run(client.server),
        // scripts
        tasks.scripts.lint(),
        tasks.scripts.run(client.main),
        // images
        tasks.images.run(env)
      ])
  }
}
