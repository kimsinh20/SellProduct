import { Button, Container, TextField } from '@mui/material';
import { styled } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductApi from '../../api/ProductApi';
import Footer from '../../components/include/footer/Footer';
import Header from "../../components/include/Header/Header";
import language from '../../language/language';
import ProductDetailMenu from './ProductDetailMenu';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../slice/cartSlice/cartSlice';
const MyMenuTextField = styled(TextField)({
  maxWidth: "100px",
  margin: "0 8px"
});
const ProductDetail = () => {
  // const id = 1;
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCatogory] = useState({});
  const [brand, setBrand] = useState({});
  const [quantityField, setQuantityField] = useState(1);

  const { pid } = useParams();
  const product = { pid, name, price, imgUrl, description, category, brand }
  const lg = useSelector((state) => state.language.language);
  const dispatch = useDispatch();

  useEffect(() => {
    const getID = async () => {
      try {
        await ProductApi.getProductId(pid).then((response) => {
          setName(response.name);
          setDescription(response.description);
          setImgUrl(response.imageUrl);
          setPrice(response.price);
          setCatogory(response.category);
          setBrand(response.Brand);
          // console.log(response)
        })
      } catch (error) {
        console.log("error: ", error);
      }
    }
    getID();
  }, [pid]);

  // console.log(quantityField)
  // change quantity
  const handleMinus = (e) => {
    e.preventDefault();
    setQuantityField(quantityField <= 1 ? 1 : quantityField - 1);
  }
  const handlePlus = (e) => {
    e.preventDefault();
    setQuantityField(quantityField + 1);
  }
  const handleAddToCart = () => {
    const action = addToCart({
      id: pid,
      product,
      quantity:quantityField
    })
    console.log(action)
    dispatch(action);
  }
  return (
    <>
      <Header />
      <Container className='mt-4'>
        <div className="flex font-serif">
          <div className="flex-none w-52 relative">
            <img src={imgUrl} alt="" className="absolute inset-0 w-full h-full object-cover rounded-lg" loading="lazy" />
          </div>
          <form className="flex-auto p-6">
            <div className="flex flex-wrap items-baseline">
              <h1 className="w-full flex-none mb-3 text-2xl leading-none text-slate-900">
                {name}
              </h1>
              <div className="flex-auto text-lg font-medium text-slate-500">
                ${price}
              </div>
              <div className="text-xs leading-6 font-medium uppercase text-slate-500">
                In stock
              </div>
            </div>
            <div className="flex items-baseline mt-2 mb-4 pb-4 ">
              <div className="space-x-1 flex text-sm font-medium">
                {description}
              </div>
            </div>
            <div className='mt-4 mb-6 pb-6 border-b border-slate-200 flex'>
              <AiOutlineMinusCircle className='text-2xl mt-2' onClick={(e) => handleMinus(e)} />
              <MyMenuTextField
                id="outlined-number"
                label="quantity"
                type="number"
                color='warning'
                required
                value={quantityField}
                onChange={(e) => setQuantityField(e.target.value)}
                disabled={false}
                size='small'
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <AiOutlinePlusCircle className='text-2xl mt-2' onClick={(e) => handlePlus(e)} />
            </div>

            <div className="flex space-x-4 mb-5 text-sm font-medium">
              <div className="flex-auto flex justify-around space-x-4 pr-4">
                <Button variant="contained" size='large' className='w-80 uppercase' color="success">
                  {lg === 'en' ? language.buyNow.en : language.buyNow.vn}
                </Button>
                <Button variant="contained" size='large' className='w-80 uppercase' onClick={handleAddToCart} color="success">
                  {lg === 'en' ? language.addCart.en : language.addCart.vn}
                </Button>
              </div>
              <button className="flex-none flex items-center justify-center w-12 h-12 text-slate-300 border border-slate-200" type="button" aria-label="Like">
                <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
              </button>
            </div>
            <p className="text-sm text-slate-500">
              {lg === 'en' ? language.freeShip.en : language.freeShip.vn}
            </p>
          </form>
        </div>
        <ProductDetailMenu />
      </Container>
      <Footer />
    </>
  )
}

export default ProductDetail