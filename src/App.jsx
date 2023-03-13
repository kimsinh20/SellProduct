
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import ProductDetail from './page/ProductDetail';
import { Container } from '@mui/material';
import { styled } from '@mui/system';
function App() {
  const Container = styled('div')({
    padding: 0,
    width: "100%",
  });
  return (
    <Container  >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/api/v1/products/:pid" element={<ProductDetail />} />
      </Routes>
    </Container>

  );
}

export default App;
