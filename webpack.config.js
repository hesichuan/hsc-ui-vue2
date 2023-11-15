const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

const glob = require('glob');
const list = {}

async function makeList(dirPath, list) {
  const files = glob.sync(`${dirPath}/**/index.js`)
  for (const file of files) {
    const package = file.split(/[/.]/)[2]
    list[package] = `./${file}`
  }
}

makeList('packages/lib', list)

module.exports = {
  mode: 'development',
  entry: list,
  output: {
    filename: '[name].umd.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'hsc-ui-vue2',
    libraryTarget: 'umd',
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ]
  }
}