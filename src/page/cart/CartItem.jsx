import { TextField } from '@mui/material';
import { styled } from '@mui/system';
import React, { useState } from 'react';
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { deleteItemToCart, setQuantityCart } from '../../slice/cartSlice/cartSlice';

const MyMenuTextField = styled(TextField)({
    maxWidth: "60px",
    margin: "0 8px"
});
const CartItem = ({ item }) => {

    const [quantity, setquantity] = useState(item.quantity);
    const [total,setTotal] = useState(item.quantity*item.product.price)

    const dispatch = useDispatch();

    const handleMinus = (e) => {
        e.preventDefault();
        setquantity(quantity <= 1 ? 1 : quantity - 1);
        setTotal((quantity <= 1 ? 1 : quantity - 1)*item.product.price);
        const action = setQuantityCart({
            id: item.id,
            quantity: quantity
        });
        dispatch(action);
    }
    const handlePlus = (e) => {
        e.preventDefault();
        setquantity(quantity + 1);
        setTotal((quantity+1)*item.product.price);
        const action = setQuantityCart({
            id: item.id,
            quantity: quantity
        });
        dispatch(action);
    }
    const handleDeteteItem = () => {
        const action = deleteItemToCart(item.id);
        dispatch(action);
    }
    return (
        <>
            <div className='grid grid-cols-6 py-3 mt-3'>
                <span className='col-span-2 flex'>
                    <img src={item.product.imgUrl} width={80} alt='img'></img>
                    <p className='leading-8 ml-3'>{item.product.name}</p>
                </span>
                <span>
                    {item.product.price}
                </span>
                <span className='flex'>
                    <AiOutlineMinusCircle className='text-xl mt-2' onClick={(e) => handleMinus(e)} />
                    <MyMenuTextField
                        id="outlined-number"
                        label=""
                        type="number"
                        color='warning'
                        required
                        value={quantity}
                        onChange={(e) => setquantity(e.target.value)}
                        disabled={false}
                        size='small'
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <AiOutlinePlusCircle className='text-xl mt-2' onClick={(e) => handlePlus(e)} />
                </span>
                <span className='text-red-600'>
                    {total}
                </span>
                <span>
                    <AiOutlineDelete onClick={handleDeteteItem} />
                </span>
            </div>
        </>
    )
}

export default CartItem