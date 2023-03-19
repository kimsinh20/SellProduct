import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart ",
    initialState: {
        showMiniCart: false,
        cartItems: [],
    },

    reducers: {
        showMiniCart: (state) => {
            state.showMiniCart = true;
        },
        hideMiniCart: (state) => {
            state.showMiniCart = false;
        },
        addToCart: (state, action) => {
            const item = action.payload;
            const index = state.cartItems.findIndex(x => x.id === item.id);
            console.log(index)
            if (index >= 0) {
                // cart have item set quantity
                state.cartItems[index].quantity += item.quantity;
            } else {
                // add item to cart
                state.cartItems.push(item);
            }
        },
        setQuantityCart: (state, action) => {
            const { id, quantity } = action.payload;
            const index = state.cartItems.findIndex((x) => x.id === id);
            if (index >= 0) {
                state.cartItems[index].quantity = quantity;
            }
        },
        deleteCart: (state) => {
            state.cartItems = [];
        },
        deleteItemToCart: (state, action) => {
            const idDeltete = action.payload;
            state.cartItems = state.cartItems.filter((x) => x.id !== idDeltete);
        },
    },
});
const { actions, reducer } = cartSlice;
export const { showMiniCart, hideMiniCart, addToCart,deleteCart, setQuantityCart, deleteItemToCart } = actions;
export default reducer;
