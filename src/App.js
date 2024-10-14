import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import BookList from "./components/BookList"; 
import AddBook from "./components/AddBook"; 
import EditBook from "./components/EditBook"; 
import BorrowingList from "./components/BorrowingList";
import AddBorrowing from "./components/AddBorrowing";
import EditBorrowing from "./components/EditBorrowing";
import Home from './items/LibraryHome';
import Take from './items/Take';
import Borrow from './items/Borrow';
import Thankyou from './items/Thankyou';
import LibraryHome from './items/LibraryHome';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Take" element={<Take />} />
        <Route path="/Borrow" element={<Borrow />} />
        <Route path="/Thankyou" element={<Thankyou/>} />
        <Route path="/LibraryHome" element={<LibraryHome/>}/>
        <Route path="/user" element={<UserList />} />
        <Route path="/user/add" element={<AddUser />} />
        <Route path="/user/edit/:id" element={<EditUser />} />
        <Route path="/book" element={<BookList />} /> 
        <Route path="/book/add" element={<AddBook />} /> 
        <Route path="/book/edit/:id" element={<EditBook />} /> 
        <Route path="/borrowing" element={<BorrowingList />} />
        <Route path="/borrowing/add" element={<AddBorrowing />} />
        <Route path="/borrowing/edit/:id" element={<EditBorrowing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
