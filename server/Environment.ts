let vars = {
  "NODE_ENV": "dev",
  "CONNECTIONSTRING": "",
  "PORT": 5000
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