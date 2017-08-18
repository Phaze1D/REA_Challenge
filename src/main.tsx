import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Layout from 'components/Layout'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { reducer } from 'reducer'
import { INITIAL_STATE } from 'types'
import 'styles'
import '../index.html'



const store = createStore(reducer, INITIAL_STATE)

ReactDOM.render(
	<Provider store={store}><Layout/></Provider>,
	document.getElementById('app')
)
