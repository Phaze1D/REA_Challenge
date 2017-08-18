import * as React from 'react'
import ResultItem from 'components/ResultItem'
import SavedItem from 'components/SavedItem'
import { connect } from 'react-redux'
import { Map, Set } from 'immutable'
import { bindActionCreators, Dispatch } from 'redux'
import { loadData, addProperty, removeProperty } from 'actions'
import {
  IState, IPropertyMap,
  ILoadData, IAddProperty, IRemoveProperty
} from 'types'


interface ILayoutProps {
    results: Set<string>
    saved: Set<string>
    properties: Map<string, IPropertyMap>
    loadData: ILoadData
    addProperty: IAddProperty
    removeProperty: IRemoveProperty
}


class Layout extends React.Component<ILayoutProps> {

  componentDidMount(){
    this.props.loadData()
  }

  render(){
    const {
      results,
      saved,
      properties
    } = this.props

    const resultsList = results.map(id =>
      <ResultItem key={id} property={properties.get(id).toJS()}/>
    )

    const savedList = saved.map(id =>
      <SavedItem key={id} property={properties.get(id).toJS()}/>
    )

    return (
      <main>
        <section>
          {resultsList}
        </section>
        <section>
          {savedList}
        </section>
      </main>
    )
  }
}


const mapStateToProps = (store: IState) => ({
  results: store.get('results'),
  saved: store.get('saved'),
  properties: store.get('properties')
})

const mapDispatchToProps = (dispatch: Dispatch<IState>) => bindActionCreators({
  loadData: loadData,
  addProperty: addProperty,
  removeProperty: removeProperty
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
