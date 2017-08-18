import * as React from 'react'
import { IProperty } from 'types'

interface SavedItemProps {
  property: IProperty
}

export default class SavedItem extends React.Component<SavedItemProps> {

  render(){

    return(
      <article>
        Saved
      </article>
    )
  }
}
