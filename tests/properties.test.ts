import { Map, Set } from 'immutable'
import { reducer, IState } from 'reducer'
import { addProperty, removeProperty, loadData } from 'actions'



describe('Testing the redux actions', () => {
  let state: IState = null
  
  test('Load the initial state', () => {
    state = reducer(state, loadData())
    expect(state.get('results').size).toBe(3)
    expect(state.get('saved').size).toBe(1)
  })

  test('Add Property', () => {
    state = reducer(state, addProperty('1'))
    expect(state.get('results').size).toBe(3)
    expect(state.get('saved').size).toBe(2)
    expect(state.get('saved').has('1')).toBe(true)
  })

  test('Remove Property', () => {
    state = reducer(state, removeProperty('1'))
    expect(state.get('results').size).toBe(3)
    expect(state.get('saved').size).toBe(1)
    expect(state.get('saved').has('1')).toBe(false)
  })

  test('Add Non Existing Property', () => {
    state = reducer(state, addProperty('900'))
    expect(state.get('results').size).toBe(3)
    expect(state.get('saved').size).toBe(1)
    expect(state.get('error')).toBe('Property ID not found')
  })

  test('Remove Non Existing Property', () => {
    state = reducer(state, removeProperty('993'))
    expect(state.get('results').size).toBe(3)
    expect(state.get('saved').size).toBe(1)
    expect(state.get('error')).toBe('Property ID not found')
  })
})
