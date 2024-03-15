/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";


// create context
const BooksContext = createContext();
export const useBookContext = ()=> useContext(BooksContext);

// create provider

export const BooksProvider = ({children})=>{
    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState([]);
    
    useEffect(() => {
        const storedBooks = JSON.parse(localStorage.getItem('selectedBooks')) || [];
        setSelectedBook(storedBooks);
    }, []);

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

    const addBookToRead = (book) => {
        // Überprüfen, ob das Buch bereits in der Liste ausgewählter Bücher vorhanden ist
        if (!selectedBook.find(selected => selected.id === book.id)) {
            const updatedSelectedBooks = [...selectedBook, book];
            setSelectedBook(updatedSelectedBooks);
            // Bücher im Local Storage speichern
            localStorage.setItem('selectedBooks', JSON.stringify(updatedSelectedBooks));
        } else {
            window.alert("Das Buch wurde bereits zur Liste hinzugefügt.");
        }
    }
    const removeBookFromRead = (bookId) => {
        const updatedSelectedBooks = selectedBook.filter(book => book.id !== bookId);
        setSelectedBook(updatedSelectedBooks);
        // Aktualisierte Bücherliste im Local Storage speichern
        localStorage.setItem('selectedBooks', JSON.stringify(updatedSelectedBooks));
    }
 
    
    return(
        <BooksContext.Provider value={{books, fetchBooks, selectedBook, addBookToRead, removeBookFromRead, useEffect}}>
            {children}
        </BooksContext.Provider>
    )   
}
