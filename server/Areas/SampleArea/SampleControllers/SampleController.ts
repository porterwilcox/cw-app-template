import { HttpPost, FromBody, Authorize, Controller, HttpGet, SessionUser, Middleware, HttpPut } from "codeworks-starter";
import { SampleService } from "@server/Areas/SampleArea/SampleService";

@Controller("sample")
export default class SampleController {
  _sampleService: SampleService;

  @HttpGet("auth-check")
  AuthCheck(){
    return SessionUser().user
  }

  @HttpPost("login")
  @FromBody(Object)
  async Login(_, data: any): Promise<any> {
    try {
      let user = SessionUser().user 
      data.userId = user.id
      await this._sampleService.SampleMethod(data)
      return user
    } catch (err) {
      throw err
    }
  }


  constructor(sampleService: SampleService) {
    this._sampleService = sampleService
  }

}
