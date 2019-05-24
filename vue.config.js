const CopyWebpackPlugin = require(`copy-webpack-plugin`)

module.exports = {
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([
        { from: `manifest.json` },
        { from: `./src/background.js` }
      ])
    ]
  }
}
