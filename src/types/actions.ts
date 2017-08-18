export const LOAD_DATA = 'LOAD_DATA'
export const ADD_PROPERTY = 'ADD_PROPERTY'
export const REMOVE_PROPERTY = 'REMOVE_PROPERTY'


export interface IAction {
  type: string
  payload: any
}

export interface ILoadData {
  (): IAction
}

export interface IAddProperty {
  (id: string): IAction
}

export interface IRemoveProperty {
  (id: string): IAction
}
