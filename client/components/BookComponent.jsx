import React from 'react'
import OnClickbookDetails from './OnClickDetails.jsx'

class BookComponent extends React.Component {
  constructor() {
    super()
    this.state = { clickedDetails: '' }
  }
  clickMe(detail) {
    console.log("clickme: ", detail)
    this.props.clickProp(detail)
  }
  render() {
    return (
      <div onClick ={this.clickMe.bind(this,this.props.bookDetail)} style={{ display: 'inline' }}>
        <span style={{ float: 'left' }}>
          <img src={this.props.bookDetail.src} height={70} width={50} />
        </span>
        <span>
        {console.log("inside span : ",this.props.bookDetail)}
          <li style={{ listStyle: 'none' }}>Name: {this.props.bookDetail.name}</li>
          <li style={{ listStyle: 'none' }}>Author: {this.props.bookDetail.author}</li>
        </span>
        <br /><br /><br />
      </div>
    )
  }
}
module.exports = BookComponent