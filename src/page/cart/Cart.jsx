import React from 'react';
import { AiOutlineDelete } from "react-icons/ai";
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/include/Header/Header';
import { deleteCart } from '../../slice/cartSlice/cartSlice';
import { selectCountCartItems, selectTotalCartItems } from '../../slice/cartSlice/Selector';
import CartItem from './CartItem';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalCart = useSelector(selectTotalCartItems);
    const countItemToCart = useSelector(selectCountCartItems);
    const dispatch =  useDispatch();
    const actionDeleteCart = deleteCart(); 
    return (
        <div className='bg-slate-200'>
            <Header />
            <h1 className='font-bold text-3xl uppercase px-4 px-4'>
                cart
            </h1>
            <div className='grid xl:grid-cols-4 mx-4'>
                <div className='xl:col-span-3'>
                    <div className=''>
                        <div className='grid grid-cols-6 py-2 mt-2 bg-white rounded-tl-md rounded-tr-md'>
                            <span className='col-span-2'>
                                all ( {countItemToCart} ) product
                            </span>
                            <span>price</span>
                            <span>quantity</span>
                            <span>total</span>
                            <span>
                                <AiOutlineDelete onClick={()=>dispatch(actionDeleteCart)} />
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
                    <p>{totalCart}</p>
                </div>
            </div>
        </div>
    )
}

export default Cart