import { Area, SessionUser, ErrorUnAuthorized } from 'codeworks-starter'

export default new Area({
  name: "Sample",
  controllersPath: __dirname + "/SampleControllers",
  routerMount: "/Sample",
  middleware: [(req, res, next) => {
    if (!SessionUser().hasAccess("public")) {
      let err = new ErrorUnAuthorized()
      return res.status(401).send({ message: err.message, status: err.status })
    } // locks an entire area
    next()
  }]
})
