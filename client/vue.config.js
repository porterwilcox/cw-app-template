const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  outputDir: resolve("../dist/client"),
  productionSourceMap: false,
  chainWebpack: config => {
    config.resolve.alias
      .set("@server", resolve("../server"))
      .set("@entities", resolve("../submodules/entities"))
      .set("@client", resolve("src"))
  }
}