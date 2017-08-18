import * as React from 'react'
import { IProperty } from 'types'


interface ResultItemProps {
  property: IProperty
}

export default class ResultItem extends React.Component<ResultItemProps> {

  render(){

    return(
      <article>
        Result
      </article>
    )
  }
}
