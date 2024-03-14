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
        // Überprüfen, ob das Buch bereits in der Liste ausgewählter Bücher vorhanden ist
        if (!selectedBook.find(selected => selected.id === book.id)) {
            setSelectedBook([...selectedBook, book]);
        } else {
            window.alert("Das Buch wurde bereits zur Liste hinzugefügt.");
        }
    }
    const removeBookFromRead = (bookId) => {
        setSelectedBook(selectedBook.filter(book => book.id !== bookId));
    }
    
    
    return(
        <BooksContext.Provider value={{books, fetchBooks, selectedBook, addBookToRead, removeBookFromRead}}>
            {children}
        </BooksContext.Provider>
    )   
}
