import { getData } from 'api'
import { Set, Map, fromJS } from 'immutable'

export const LOAD_DATA = 'LOAD_DATA'
export const ADD_PROPERTY = 'ADD_PROPERTY'
export const REMOVE_PROPERTY = 'REMOVE_PROPERTY'

export interface IAction {
  type: string
  payload: any
}


/*
* Why split the data into array of ids for results and saved?
*
* I am assuming that if a property is in both results and saved array then
* it shares the same variables e.g price, id, agency...
* If one of these variables changes then that changes needs to propagate
* throughout the saved and results array. So to avoid having to update both
* objects in the results array and saved array, I saved all the properties in
* a map<id, property> and I only have to change one object.
*/
export function loadData(): IAction {
  let data = getData()
  let results = Set()
  let saved = Set()
  let properties = Map<string, IProperty>()

  data.results.forEach(prop => {
    results = results.add(prop.id)
    properties = properties.set(prop.id, fromJS(prop))
  })

  data.saved.forEach(prop => {
    saved = saved.add(prop.id)
    properties = properties.set(prop.id, fromJS(prop))
  })

  return {
    type: LOAD_DATA ,
    payload: Map({
      results: results,
      saved: saved,
      properties: properties
    })
  }
}


export function addProperty(id: string): IAction {
  return {
    type: ADD_PROPERTY,
    payload: {
      id: id
    }
  }
}


export function removeProperty(id: string): IAction {
  return {
    type: REMOVE_PROPERTY,
    payload: {
      id: id
    }
  }
}
