import { Map, Set } from 'immutable'
import { IProperty } from './data'

export interface IState extends Map<string, any> {
  results?: Set<string>
  saved?: Set<string>
  properties?: Map<string, IProperty>
}

export const INITIAL_STATE = Map<string, any>()
