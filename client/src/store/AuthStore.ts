import Vuex, { Commit, ActionContext } from 'vuex';
import { User } from '@entities/Account/User'
import endpoints from '@server/Endpoints'
import axios from 'axios'

let auth = axios.create({
  baseURL: endpoints.AccountsUrl,
  withCredentials: true
})

const State: IState = {
  user: {} as User
}

const Mutations = {
  setUser(state: IState, user: User) {
    state.user = user
  }
}

export interface IActionTree {
  [prop: string]: (v: ActionContext<IState, IState>, p: any) => void
}

export interface IState {
  [prop: string]: any
}

export const Actions: IActionTree = {
  async authenticate({ commit }) {
    try {
      let res = await auth.get('authenticate')
      commit(Mutations.setUser.name, res.data.content)
    } catch (err) {
      let returnUrl = location.toString()
      location.replace(`${endpoints.AccountsUrl}/login?redirect=${returnUrl}`)
    }
  }
}

export default {
  State,
  Mutations,
  Actions
}