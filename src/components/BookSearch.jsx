
import { useState } from 'react';
import { useBookContext } from '../BooksContext';

const BookSearch = () => {

    const {fetchBooks} = useBookContext();
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        fetchBooks(searchTerm);
       
    }

  return (
    <div>
        <div className="flex justify-center w-full">
      <form onSubmit={handleSearch} className="flex">
        <input
          type="text"
          placeholder="Search for books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring--600 focus:border-transparent w-96"
        />
        <button
          type="submit"
          className="bg-green-700 text-white rounded-r-md px-4 py-2 ml-2 hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-opacity-50"
        >
          Search
        </button>
      </form>
    </div>
    </div>
  )
}

export default BookSearch
