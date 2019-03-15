import axios from 'axios'
import { EnableAuthorizeDecorator } from "codeworks-starter";
import Endpoints from '@server/Endpoints'

let auth = axios.create({
  baseURL: Endpoints.AccountsUrl,
})

async function SerializeUser(req, _, next) {
  try {
    let response = await auth.get('authenticate', {
      headers: req.headers
    })
    req.user = response.data.content
  } catch (err) {
    console.log(err)
    req.user = {}
  } finally {
    next()
  }
}

export default [
  SerializeUser,
  EnableAuthorizeDecorator
]