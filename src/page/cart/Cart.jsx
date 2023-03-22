import { Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import React from 'react';
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../../components/include/Header/Header';
import nocart from "../../img/nocart.png";
import { deleteCart } from '../../slice/cartSlice/cartSlice';
import { selectCountCartItems, selectTotalCartItems } from '../../slice/cartSlice/Selector';
import CartItem from './CartItem';
import CartVocherDialog from './CartVocherDialog';

const vocher = ['freeship', 'freeship20%'];

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalCart = useSelector(selectTotalCartItems);
    const countItemToCart = useSelector(selectCountCartItems);
    const dispatch = useDispatch();
    const actionDeleteCart = deleteCart();
    const formatVnd = (x) => {
        return x.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
    }
    //dialog 
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(vocher[1]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };
   // total = totalcal + ship
   const total =selectedValue === vocher[0] ?totalCart : totalCart;
    return (
        <div className='bg-slate-200'>
            <Header />
            <h1 className='font-bold text-3xl uppercase px-4 px-4 ml-3 mb-2 mt-3'>
                cart
            </h1>
            <div>
            {countItemToCart <= 0 && (
                <Paper className='mx-6 flex flex-col items-center justify-center pb-4 mb-5'>
                    <img src={nocart} alt='img'></img>
                    <p className='text-2xl uppercase my-3'>chưa có sản phẩm nào trong giỏ hàng</p>
                    <Link to={"/"}>
                        <button className='bg-amber-300 font-bold rounded-md text-black m-2 py-3 px-4'>tiếp tục mua săm</button>
                    </Link>
                </Paper>
            )}
            {countItemToCart > 0 && (
                <div className='grid xl:grid-cols-6 mx-4'>
                    <div className='xl:col-span-4'>
                        <div className=''>
                            <div className='grid grid-cols-6 text-2xl py-2 bg-white rounded-tl-md rounded-tr-md'>
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
                            <div className='bg-white text-xl'>
                                {cartItems.map((e, i) => (
                                    <CartItem key={i} item={e} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='xl:col-span-2 ml-3 bg-white '>
                        <div>
                            <div className='flex justify-between ml-3 mt-2'>
                                <p className='font-medium text-black text-2xl'>vocher free ship ksshop</p>
                                <p variant="outlined" className='text-2xl text-cyan-600' onClick={handleClickOpen}>
                                    choose vocher / enter code
                                </p>
                            </div>
                            <div className='ml-3'>
                                <Typography variant="subtitle1" component="div">
                                    Vocher: {selectedValue}
                                </Typography>
                                <br />
                                <CartVocherDialog
                                    vocher={vocher}
                                    selectedValue={selectedValue}
                                    open={open}
                                    onClose={handleClose}
                                />
                            </div>
                        </div>
                        <div className='flex justify-between ml-3'>
                            <label className='text-2xl uppercase'>total</label>
                            <p className='text-2xl text-red-500'>{formatVnd(total)}</p>
                        </div>
                        <div className='flex justify-center mt-3 ml-3'>
                            <button className='text-2xl uppercase text-center bg-red-500 rounded-lg text-white py-2 w-3/4'>buy now</button>
                        </div>
                    </div>
                </div>
            )}
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default Cart