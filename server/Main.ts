import cors from 'cors'
import { Area } from 'codeworks-starter'
import { DbConnection } from "./DbConnection";
import { RolesOrder } from "./Entities";
import Areas from './Areas/Areas'
import { Server } from "socket.io";
import AuthProvider from "./Services/AuthProvider";

class Main {
  sessionProvider: any;
  Area!: Area;
  SocketZones: Server[] = []

  protected ConfigureDB() {
    process.env.CONNECTIONSTRING = process.env.CONNECTIONSTRING || "LOCALDB"
    DbConnection.CONNECTIONSTRING = process.env.CONNECTIONSTRING
    new DbConnection().Open()
      .then(() => console.log("Connected"))
      .catch((err) => console.error(err))
  }

  protected ConfigureArea() {
    this.Area = new Area({
      name: "Main",
      middleware: [
        cors({
          origin: [/domain/, /localhost/],
          credentials: true,
          methods: "*"
        }),
        ...AuthProvider
      ],
      staticFiles: __dirname + '/../client' // uses dist/client
    })

    this.Area.configure.SessionUserService({
      Roles: RolesOrder,
      UserRolePath: "role"
    })
  }

  private LoadAreas() {
    Areas.forEach(area => {
      try {
        this.Area.expressApp.use(area.expressApp)
        this.SocketZones.push(area.io)
      } catch (err) {
        console.error("[AREA LOAD FAILED]", err)
      }
    })
  }

  AttachZones(server: import("http").Server): any {
    this.SocketZones.forEach(zone => zone.attach(server))
  }

  constructor() {
    this.ConfigureDB()
    this.ConfigureArea()
    this.LoadAreas()
  }
}





export default Main