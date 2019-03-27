import { ActionContext } from 'vuex';
export interface IActionTree {
  [prop: string]: (v: ActionContext<IState, IState>, p: any) => void;
}
export interface IState {
  [prop: string]: any;
}
