import { useBookContext } from "../BooksContext"

const BookToRead = () => {
    const {selectedBook, removeBookFromRead} = useBookContext()
if(!selectedBook || selectedBook.length === 0){
    return(
        <div className="mt-8">
        <h1>No books selected</h1>
    </div>
    )
   
}

  return (
   <div>
    <h1>selected books</h1>
    {selectedBook.map((book)=>(
     <div key={book.id} className="border border-orange-300 rounded-lg p-4">
     <h2 className="text-xl font-semibold mb-2">{book.volumeInfo.title}</h2>
     {book.volumeInfo.authors && (
       <p className="text-green-600 mb-2">{book.volumeInfo.authors.join(', ')}</p>
     )}
     {book.volumeInfo.imageLinks && (
       <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} className="" />
     )}
     <p className="text-green-700 mt-2">{book.volumeInfo.description}</p>
     <button className="text-orange-800 bg-green-700 border border-orange-300 rounded-lg p-4 m-4" onClick={() => removeBookFromRead(book.id)}>Remove</button>

   </div>
))}
   </div>
  )
}

export default BookToRead
