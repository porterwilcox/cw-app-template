require("module-alias/register")
import http from 'http'
import Main from './Main'
import { AddressInfo } from "net";

let PORT = process.env.PORT || 5000 || 0

try {
  let main = new Main()
  const server = http.createServer(main.Area.expressApp)
  main.AttachZones(server)
  server.listen(PORT, () => {
    let address = server.address() as AddressInfo
    if (!address) { throw new Error() }
    console.log("Listening on port:", address.port);
  })
} catch (err) {
  console.log(err);
}