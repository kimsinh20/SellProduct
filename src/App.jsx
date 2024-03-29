
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './page/home/Home';
import ProductDetail from './page/productdetail/ProductDetail';
import Login from './auth/Login';
import Register from './auth/Register';
// import { Container } from '@mui/material';
// import { styled } from '@mui/system';
import Cart from './page/cart/Cart';
import ProductList from './page/productlist/ProductList';
import NotResultSearch from './components/include/Header/NotResultSearch';
function App() {
 
  // const Container = styled('div')({
  //   padding: 0,
  //   width: "100%",
  //   margin: 0
  // });


  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/noresult" element={<NotResultSearch />} />
        <Route path="/auth/signin" element={<Login />} />
        <Route path="/auth/signup" element={<Register />} />
        <Route path="/api/v1/products/:pid" element={<ProductDetail />} />
        <Route path="/products/:pid" element={<ProductDetail />} />
      </Routes>
    </div>

  );
}

export default App;
