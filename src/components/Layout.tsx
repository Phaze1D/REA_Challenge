import * as React from 'react'
import PropertyCard from 'components/PropertyCard'
import { connect } from 'react-redux'
import { Map, Set } from 'immutable'
import { bindActionCreators, Dispatch } from 'redux'
import { loadData, addProperty, removeProperty, disableProperty } from 'actions'
import {
  IState, IPropertyMap,
  ILoadData, IAddProperty, IRemoveProperty, IDisableProperty
} from 'types'


interface Props {
    results: Set<string>
    saved: Set<string>
    properties: Map<string, IPropertyMap>
    loadData: ILoadData
    addProperty: IAddProperty
    removeProperty: IRemoveProperty
    disableProperty: IDisableProperty
}


class Layout extends React.Component<Props> {

  componentDidMount(){
    this.props.loadData()
  }

  render(){
    const {
      results,
      saved,
      properties,
      addProperty,
      removeProperty,
      disableProperty
    } = this.props

    const resultsList = results.map(id =>
      <PropertyCard
      key={id}
      id={id}
      saved={false}
      property={properties.get(id).toJS()}
      onRequestClick={addProperty}
      onRequestDisable={disableProperty}/>
    )

    const savedList = saved.map(id =>
      <PropertyCard
      key={id}
      id={id}
      saved={true}
      property={properties.get(id).toJS()}
      onRequestClick={removeProperty}/>
    )

    return (
      <main>
        <h1 id='rheader'>Results</h1>
        <section id='rgrid' className='grid'>
          {resultsList}
        </section>
        <h1 id='sheader'>Saved</h1>
        <section id='sgrid' className='grid'>
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
  removeProperty: removeProperty,
  disableProperty: disableProperty
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
