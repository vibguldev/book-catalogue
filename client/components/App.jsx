import React from 'react'
import BookDetails from './BookDetails.jsx'
import details from './allBooks.js'
import BookComponent from './BookComponent.jsx'
import OnClickDetails from './OnClickDetails.jsx'


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {bookView: '',}
  }

update(detail) {
    this.setState({bookView: {price: detail.price, discount: detail.discount, aboutAuthor: detail.aboutAuthor}})
  }
  
  render() {
    // const map = details.map((detail,index) => <BookComponent key={index} detail={detail} clickProp = {this.update.bind(this, detail)} />)
    return (
      <div>
        <BookDetails books={details} clickThis = {this.update.bind(this)}/>

        <OnClickDetails OnClickDetail = {this.state.bookView} />
      </div>
    )
  }
}
