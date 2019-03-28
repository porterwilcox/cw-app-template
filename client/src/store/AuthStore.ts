import Vuex from 'vuex';
import endpoints from '@server/Endpoints'
import axios from 'axios'
import { IState, IActionTree } from "./IStore";

let auth = axios.create({
  baseURL: endpoints.AccountsUrl,
  withCredentials: true
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
  async authenticate({ commit }) {
    try {
      let res = await auth.get('authenticate')
      commit(Mutations.setUser.name, res.data.content)
    } catch (err) {
      let returnUrl = location.toString()
      location.replace(`${endpoints.AccountsUrl}?redirect=${returnUrl}`)
    }
  }
}

export default {
  State,
  Mutations,
  Actions
}
