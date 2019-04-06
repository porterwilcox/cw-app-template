import axios from 'axios'
import cookieParser = require("cookie-parser");
import { EnableAuthorizeDecorator } from "codeworks-starter";
import Endpoints from '@server/Endpoints'

let auth = axios.create({
  baseURL: Endpoints.AccountsUrl,
  timeout: 5000,
})

async function SerializeUser(req, _, next) {
  try {
    let response = await auth.get('account/authenticate-token/' + req.cookies.CWSID)
    console.log(response)
    req.user = response.data.content
    next()
  } catch (err) {
    console.log(err)
    req.user = {}
    next()
  }
}

export default [
  cookieParser(),
  SerializeUser,
  EnableAuthorizeDecorator
]