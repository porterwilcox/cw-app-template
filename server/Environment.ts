import path from 'path';
import moduleAlias from "module-alias";

let vars = {
  "NODE_ENV": "dev",
  "CONNECTIONSTRING": "mongodb://Devtester1:Devtester1@ds053448.mlab.com:53448/dev-codeworks",
  "PORT": 5001
}

/**
 * Uses the above config to set 
 * env variables if not already 
 * set by the system
 */
function setEnvironmentVariables() {
  Object.keys(vars).forEach(v => {
    process.env[v] = process.env[v] || vars[v]
  })
}
setEnvironmentVariables()

function resolve(dir) {
  let rootFromHere = '/../'
  dir = rootFromHere + dir
  return path.join(__dirname, dir)
}

moduleAlias.addAliases({
  "@server": resolve("server"),
  "@client": resolve("client"),
  "@entities": resolve("submodules/entities")
})

