import { Map, Set, fromJS } from 'immutable'
import { IAction, LOAD_DATA ,ADD_PROPERTY, REMOVE_PROPERTY } from 'actions'



export interface IState extends Map<string, Set<string> | Map<string, IProperty>> {
  results?: Set<string>
  saved?: Set<string>
  properties?: Map<string, IProperty>
  error?: string
}

export const INITIAL_STATE = Map<string, Set<string> | Map<string, IProperty>>()




export function reducer(state: IState=INITIAL_STATE, action: IAction): IState {

  if(action.type === LOAD_DATA){
    return loadData(state, action)
  }

  return state
}


function loadData(oldState, action) {
  return oldState.merge(action.payload)
}
