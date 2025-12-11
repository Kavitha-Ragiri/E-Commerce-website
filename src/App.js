
import './App.css';
import Home from './Pages/Home/Home';
import NavbarStore from './Components/Navbar/Navbar';
import Products from './Pages/Products/Products';
import { Route, Routes } from 'react-router-dom';
import CartPage from './Pages/CartPage/CartPage';
import ProceedToPay from './Pages/ProceedToPay/ProceedToPay';
import SearchPage from './Pages/SearchPage/SearchPage';
import AllProducts from './Pages/AllProducts/AllProducts';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import ProtectedRoute from './Components/ProtectedRoute';
import { Outlet } from 'react-router-dom';
import CategoryProducts from './Pages/CategoryProduct/CategoryProducts';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  function ProtectedLayout() {
  return (
    <ProtectedRoute>
      <Outlet />
    </ProtectedRoute>
  );
}

  return (
    <div className='main'>
         <NavbarStore/>
        <Routes>
         
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route element={<ProtectedLayout/>}>
              <Route path="/" element={<Home/>}/>
              <Route path="/product/:id" element={<Products/>}/>
              <Route path="/mycart" element={<CartPage/>}/>
              <Route path="/proceedtopayment" element={<ProceedToPay/>}/>
              <Route path="/search" element={<SearchPage/>}/>
              <Route path="/products" element={<AllProducts/>}/>
              <Route path="/category/:categoryName" element={<CategoryProducts />} />

          </Route>
          
        </Routes>
        <ToastContainer position="top-right" autoClose={2000} />
          
        {/* <Home/> */}
    </div>
   
  );
}

export default App;
