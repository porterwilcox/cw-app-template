import { Area, SessionUser, ErrorUnAuthorized } from 'codeworks-starter'

export default new Area({
  name: "Sample",
  controllersPath: __dirname + "/SampleControllers",
  routerMount: "/Sample",
  middleware: [(req, res, next) => {
    if (!SessionUser().hasAccess("admin")) { return next(new ErrorUnAuthorized()) } // locks an entire area
    next()
  }]
})
