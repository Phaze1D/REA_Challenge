import * as React from 'react'
import * as classnames from 'classnames'
import { IProperty } from 'types'


interface Props {
  property: IProperty
  id: string
  saved: boolean
  onRequestClick: (event) => void
  onRequestDisable?: (event) => void
}

interface State {
  hover: boolean
}

class PropertyCard extends React.Component<Props, State> {

  constructor(props) {
    super(props)
    this.state = {hover: false}
  }

  handleClick = (event) => {
    if(this.props.property.disable){
      this.props.onRequestClick(this.props.id)
    }
  }

  handleOnMouseEnter = (event) => {
    this.setState({hover: true})
  }

  handleOnMouseLeave = (event) => {
    this.setState({hover: false})
  }

  handleDisable = (event) => {
    this.props.onRequestDisable(this.props.id)
  }

  render(){
    const {
      property,
      saved
    } = this.props

    console.log(property);
    

    let iconClasses = classnames('icon', {'hover': this.state.hover})
    let glassClasses = classnames('glass', {'hover': this.state.hover})
    let iconType = classnames('fa', {'fa-plus-circle': !saved, 'fa-minus-circle': saved})

    return(
      <article className='property-card'
      onMouseLeave={this.handleOnMouseLeave}
      onMouseEnter={this.handleOnMouseEnter}
      onClick={this.handleClick}>

        <div className={iconClasses}>
          <i className={iconType} aria-hidden="true"></i>
        </div>

        <div className={glassClasses}>
          <div className='upper' style={{backgroundColor: property.agency.brandingColors.primary}}>
            <img className='logo-img' src={property.agency.logo}/>
          </div>

          <img className='main-img' src={property.mainImage}/>

          <p className='lower'>
            <span>Price: </span> {property.price}
          </p>

          <button onClick={this.handleDisable}>
            Disable
          </button>

        {property.disable && 
          <div>
            TESTING
          </div>
        }
        </div>

      </article>
    )
  }
}

export default PropertyCard
