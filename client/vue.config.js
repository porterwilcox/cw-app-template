const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set("@server", resolve("../server"))
      .set("@entities", resolve("../submodules/entities"))
      .set("@client", resolve("src"))
  },
  outputDir: resolve("../dist/www"),
  productionSourceMap: false
}