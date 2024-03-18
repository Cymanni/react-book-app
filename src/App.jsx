
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BooksProvider } from './BooksContext'
import BookDetails from './components/BookDetails'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BookToRead from './pages/BookToRead'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    <>
    <BrowserRouter>
    <BooksProvider>
    <Navbar />
    <ToastContainer autoClose={1000}/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/toread' element={<BookToRead/>}/>
    </Routes>
       <BookDetails />
    </BooksProvider>
    </BrowserRouter>
   
    </>
  )
}

export default App
