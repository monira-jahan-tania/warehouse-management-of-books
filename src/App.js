import logo from './logo.svg';
import './App.css';
import Header from './pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Items from './pages/Home/Items/Items';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';
import Item from './pages/Home/Item/Item';
import Footer from './pages/Shared/Footer/Footer';
import ItemDetail from './pages/ItemDetail/ItemDetail';
import ManageItems from './pages/ManageItems/ManageItems/ManageItems';
import AddItems from './pages/AddItems/AddItems';
import ManageItem from './pages/ManageItems/ManageItem/ManageItem';
import NotFound from './pages/NotFound/NotFound';
import MyItems from './pages/MyItems/MyItems';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/items' element={
          <RequireAuth>
            <Items />
          </RequireAuth>
        }></Route>
        <Route path='/item/:itemId' element={
          <RequireAuth>
            <ItemDetail />
          </RequireAuth>
        }></Route>
        <Route path='/manageItems' element={
          <RequireAuth>
            <ManageItems />
          </RequireAuth>
        }></Route>
        <Route path='/addItems' element={
          <RequireAuth>
            <AddItems />
          </RequireAuth>
        }></Route>
        <Route path='/myItems' element={
          <RequireAuth>
            <MyItems />
          </RequireAuth>
        }></Route>
        {/* <Route path='/manageItems' element={
          <RequireAuth>
            <ManageItems />
          </RequireAuth>
        }></Route>
        <Route path='/addItems'> element={
          <RequireAuth>
            <AddItems />
          </RequireAuth>
        }</Route> */}
        <Route path='*' element={<NotFound />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
