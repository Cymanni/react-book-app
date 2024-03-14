import { createContext, useContext, useState } from "react";
import axios from "axios";


// create context
const BooksContext = createContext();
export const useBookContext = ()=> useContext(BooksContext);

// create provider

export const BooksProvider = ({children})=>{
    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState([]);

    const key = import.meta.env.VITE_API_KEY;

    const  fetchBooks= async(searchTerm) =>{
        try {
            const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${key}`);
            setBooks(response.data.items);
           
        }
        catch(error){
           console.log('Error fetching books',error);
        }
    }

const addBookToRead = (book)=>{
    setSelectedBook([...selectedBook, book]);
}
    return(
        <BooksContext.Provider value={{books, fetchBooks, selectedBook, addBookToRead}}>
            {children}
        </BooksContext.Provider>
    )   
}
