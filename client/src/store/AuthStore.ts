import endpoints from '@server/Endpoints'
import axios from 'axios'
import { IState, IActionTree } from "./IStore";

let dev = location.host.includes('localhost') ? true : false

let auth = axios.create({
  baseURL: endpoints.AccountsUrl,
  withCredentials: true,
  timeout: 8000
})

let sample = axios.create({
  baseURL: dev ? '//localhost:5001' : '/',
  withCredentials: true,
  timeout: 8000,
})

const State: IState = {
  user: {
    id: "",
    name: "",
    avatar: "",
    email: ""
  }
}

const Mutations = {
  setUser(state: IState, user: any) {
    state.user = user
  }
}

export const Actions: IActionTree = {
  async authenticate({ commit, dispatch }) {
    try {
      let res = await auth.get('account/authenticate')
      commit(Mutations.setUser.name, res.data.content)
      dispatch('AuthCheck')
    } catch (err) {
      // window.open(endpoints.AccountsUrl, "AuthFrame")
      //   authFrame.classList.add("open")
      if(!dev){
        let returnUrl = location.toString()
        location.replace(`${endpoints.AccountsUrl}?redirect=${returnUrl}`)
      }
    }
  },
  async AuthCheck({ commit }) {
    try {
      let res = await sample.get('Sample/sample/auth-check')
      console.log('SUCCESS', res.data)
    } catch (err) {
      if (dev) {
        console.error(err)
        console.log("get your auth token from the live server")
        return
      }
    }
  }
}

export default {
  State,
  Mutations,
  Actions
}