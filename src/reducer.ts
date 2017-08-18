import { Map, Set, fromJS } from 'immutable'
import { IAction, LOAD_DATA ,ADD_PROPERTY, REMOVE_PROPERTY } from 'actions'



export interface IState extends Map<string, Set<string> | Map<string, IProperty>> {
  results?: Set<string>
  saved?: Set<string>
  properties?: Map<string, IProperty>
}

export const INITIAL_STATE = Map<string, Set<string> | Map<string, IProperty>>()


/**
* Redux Reducer function
* @param {IState} state
* @param {IAction} action
* @return {IState} newState
*/
export function reducer(state: IState=INITIAL_STATE, action: IAction): IState {
  if(action.type === LOAD_DATA){
    return loadDataHandler(state, action)
  }
  if(action.type === ADD_PROPERTY){
    return addPropertyHandler(state, action)
  }
  if(action.type === REMOVE_PROPERTY){
    return removePropertyHandler(state, action)
  }
  return state
}

/**
* Handles the loadData action by merging maps
* @param {IState} oldState
* @param {IAction} action
* @return {IState} newState
*/
function loadDataHandler(oldState, action) {
  return oldState.merge(action.payload)
}

/**
* Handles addProperty action by adding a new id to
* the saved list if the properties map has the id
* @param {IState} oldState
* @param {IAction} action
* @return {IState} newState
*/
function addPropertyHandler(oldState, action) {
  if(oldState.hasIn(['properties', action.payload.id])){
    return oldState.update('saved', set => set.add(action.payload.id))
  }
  return oldState
}

/**
* Handles removeProperty action by removing a new id from
* the saved list if the properties map has the id
* @param {IState} oldState
* @param {IAction} action
* @return {IState} newState
*/
function removePropertyHandler(oldState, action){
  if(oldState.hasIn(['properties', action.payload.id])){
    return oldState.update('saved', set => set.delete(action.payload.id))
  }
  return oldState
}
