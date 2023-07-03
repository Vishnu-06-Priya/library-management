import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Portal from './components/dashboard/Portal';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import BookView from './components/Books/BookView';
import EditBooks from './components/Books/EditBooks';
import Book from './components/Books/Book';
import Member from './components/members/Member';
import MemberView from './components/members/MemberView';
import BorrowBook from './components/Books/BorrowBook';
import ReturnBook from './components/Books/ReturnBook';
import Login from './components/Login/Login';
import { UserProvider } from './components/Context/UserContext';
import { LoginProvider } from './components/Context/LoginContext';
import AddBook from './components/Books/AddBook';


function App() {
  return (
    <UserProvider>
      <LoginProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/portal' element={<Portal />} >
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='book' element={<Book />} />
            <Route path='addbook' element={<AddBook />} />
            <Route path='bookview/:id' element={<BookView />} />
            <Route path='editbook/:id' element={<EditBooks />} />
            <Route path='editbook/:id' element={<EditBooks />} />
            <Route path='borrowbook/:id' element={<BorrowBook />} />
            <Route path='returnbook/:id' element={<ReturnBook />} />
            <Route path='member' element={<Member />} />
            <Route path='memberview/:id' element={<MemberView />} />
          </Route>
        </Routes>
      </LoginProvider>
    </UserProvider>
  );
}

export default App;
