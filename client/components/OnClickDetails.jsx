import React from 'react'

export default class OnClickDetails extends React.Component {
  constructor() {
    super()
  }
  render() {
    let status = this.props.OnClickDetail
    if(status) {
    return (
      <div >
      Price: {this.props.OnClickDetail.price} <br />
      Discount: {this.props.OnClickDetail.discount} <br />
      About_Author: {this.props.OnClickDetail.aboutAuthor}
      </div>
    )
    }
    else {
      return (
        <div />
      )
    }
    }
  }
