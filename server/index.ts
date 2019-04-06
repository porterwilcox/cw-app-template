import './Environment'
require("module-alias/register")
import http from 'http'
import Main from './Main'

let PORT = process.env.PORT

try {
  let main = new Main()
  const server = http.createServer(main.Area.expressApp)
  main.AttachZones(server)
  server.listen(PORT, () => {
    console.log("CodeWorksAcademy Listening on port:", PORT);
  })
} catch (err) {
  console.log(err);
}