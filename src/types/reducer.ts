import { Map, Set } from 'immutable'
import { IPropertyMap } from './data'

export interface IState extends Map<string, any> {
  results: Set<string>
  saved: Set<string>
  properties: Map<string, IPropertyMap>
}

export const INITIAL_STATE: IState = <IState>Map<string, any>({
  results: Set<string>(),
  saved: Set<string>(),
  properties: Map<string, IPropertyMap>()
})
