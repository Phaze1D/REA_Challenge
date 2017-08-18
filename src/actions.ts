import { getData } from 'api'
import { Set, Map, fromJS } from 'immutable'
import {
  IAction, IProperty,
  LOAD_DATA, ADD_PROPERTY, REMOVE_PROPERTY,
  ILoadData, IAddProperty, IRemoveProperty
} from 'types'

/*
* Why split the data into set of ids for results and saved?
*
* I am assuming that if a property is in both results and saved array then
* it shares the same variables e.g price, id, agency...
* If one of these variables changes then that changes needs to propagate
* throughout the saved and results array. So to avoid having to update both
* objects in the results array and saved array, I saved all the properties in
* a map<id, property> and I only have to change one object.
*/

/**
* Redux Action Creator
* Handles the loading of data and parsing
* @returns {IAction}
*/
export const loadData: ILoadData =
function(): IAction {
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

/**
* Redux Action Creator
* @param {string} id - the property id to add
* @returns {IAction}
*/
export const addProperty: IAddProperty =
function(id: string): IAction {
  return {
    type: ADD_PROPERTY,
    payload: {
      id: id
    }
  }
}

/**
* Redux Action Creator
* @param {string} id - the property id to remove
* @returns {IAction}
*/
export const removeProperty: IRemoveProperty =
function(id: string): IAction {
  return {
    type: REMOVE_PROPERTY,
    payload: {
      id: id
    }
  }
}
