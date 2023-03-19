// tinh cac static tu state co san tu redux
import { createSelector } from '@reduxjs/toolkit'
const selectCartItems = state => state.cart.cartItems;
export const selectCountCartItems = createSelector(selectCartItems, items =>
    items.reduce((count, item) => count + item.quantity, 0)
)
export const selectTotalCartItems = createSelector(selectCartItems, items =>
    items.reduce((total, item) => total + item.quantity * item.product.price, 0)
)