import React from 'react'
import BookComponent from './BookComponent.jsx'

export default class BookDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {filteredBooks: this.props.books, filteredBookDisplay: ''}
    // const filteredBooks = this.props.books
  }
updateThis(detail) {
  console.log("hello")
    // this.setState({bookView: {price: detail.price, discount: detail.discount, aboutAuthor: detail.aboutAuthor}})
    this.props.clickThis(detail)
  }

  instantSearch(books) {
    // this.props.filterBooks(books)
    console.log("here")
    const searchString = document.getElementById('this').value
    let filteredBooks =  books.filter((book) => { 
    return ((book.name).search(searchString) >= 0)
    })
    console.log("in function : ",filteredBooks)
    this.setState({filteredBooks: filteredBooks})
    // console.log(filteredBooks)
    // filteredBooks.map((filteredBook, index) => { <BookComponent key={index} detail={detail} clickProp = {this.update.bind(this, detail)} />
    // })
  }
  render() {
    // let arr = this.props.booksDetails
    // // console.log(arr[0].name)
    // console.log("arr : ",arr)
    return (
      <div>
      <input id='this' type = 'text' onChange = {this.instantSearch.bind(this, this.props.books)} /><br /><br />
      {console.log("filtered : ",this.state.filteredBooks)}
      {this.state.filteredBooksDisplay = (this.state.filteredBooks).map((detail, index) =>
      {console.log("inside book details : ",detail)
        return <BookComponent key={index} bookDetail={detail} clickProp = {this.updateThis.bind(this)} />})}
      </div>
    )
  }
}
