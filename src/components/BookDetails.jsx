import { useBookContext } from "../BooksContext"

const BookDetails = () => {
    const {books,addBookToRead} = useBookContext();

  return (
   <div className="mt-8 rounded-xl bg-green-700">
{books.length>0&&(
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-14 gap-5 m-2 bg-green-700 rounded-sm">
      {books.map(book=>(
     <div key={book.id} className="border border-orange-300 rounded-lg p-4 ">
     {book.volumeInfo.imageLinks && (
         <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} className="w-full h-96  " />
         )}
         <h2 className="text-xl font-semibold m-6 text-center">{book.volumeInfo.title}</h2>
         {book.volumeInfo.authors && (
           <p className="text-yellow-200 m-2 text-center">{book.volumeInfo.authors.join(', ')}</p>
         )}
     <p className="text-gray-700 mt-5   overflow-scroll h-60 ">{book.volumeInfo.description}</p>
     <button onClick={()=>addBookToRead(book)} key={book.id} className=" bg-orange-300 border border-orange-300 rounded-lg p-4 m-4">Add to Readlist</button>
   </div>
))}

       </div>
)}

   </div>
  )
}

export default BookDetails