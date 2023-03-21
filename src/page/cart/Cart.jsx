import { Paper } from '@mui/material';
import React from 'react';
import { AiOutlineDelete } from "react-icons/ai";
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/include/Header/Header';
import { deleteCart } from '../../slice/cartSlice/cartSlice';
import { selectCountCartItems, selectTotalCartItems } from '../../slice/cartSlice/Selector';
import CartItem from './CartItem';
import nocart from "../../img/nocart.png"
import { Link } from 'react-router-dom';
import Footer from './../../components/include/footer/Footer';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalCart = useSelector(selectTotalCartItems);
    const countItemToCart = useSelector(selectCountCartItems);
    const dispatch = useDispatch();
    const actionDeleteCart = deleteCart();
    const formatVnd = (x) => {
        return x.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
    }
    return (
        <div className='bg-slate-200'>
            <Header />
            <h1 className='font-bold text-3xl uppercase px-4 px-4 mt-3'>
                cart
            </h1>
            {countItemToCart<= 0 && (
            <Paper className='mx-6 flex flex-col items-center justify-center'>
                <img src={nocart} alt='img'></img>
                <p className='text-2xl uppercase my-3'>chưa có sản phẩm nào trong giỏ hàng</p>
                <Link to={"/"}>
                    <button className='bg-amber-300 font-bold text-black m-2 py-3 px-4'>tiếp tục mua săm</button>
                </Link>
            </Paper>
            )}
            {countItemToCart>0 && (
                <div className='grid xl:grid-cols-4 mx-4'>
                <div className='xl:col-span-3'>
                    <div className=''>
                        <div className='grid grid-cols-6 text-2xl py-2 mt-2 bg-white rounded-tl-md rounded-tr-md'>
                            <span className='col-span-2'>
                                all ( {countItemToCart} ) product
                            </span>
                            <span>price</span>
                            <span>quantity</span>
                            <span>total</span>
                            <span>
                                <AiOutlineDelete onClick={() => dispatch(actionDeleteCart)} />
                            </span>
                        </div>
                        <div className='bg-white'>
                            {cartItems.map((e, i) => (
                                <CartItem key={i} item={e} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className='xl:col-span-1 ml-3 bg-white'>
                    <label>total</label>
                    <p className='text-2xl text-red-500'>{formatVnd(totalCart)}</p>
                </div>
            </div>
            )}
            {/* <Footer /> */}
        </div>
    )
}

export default Cart