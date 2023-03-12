
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/page/Home';
import ProductDetail from './components/Products/ProductDetail';
import { Container } from '@mui/material';
import { styled } from '@mui/system';
function App() {
  const Container = styled('div')({
    padding: 0
  });
  return (
    <Container maxWidth="false" >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/api/v1/products/:pid" element={<ProductDetail />} />
      </Routes>
    </Container>

  );
}

export default App;
