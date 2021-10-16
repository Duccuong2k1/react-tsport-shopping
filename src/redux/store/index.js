import { configureStore } from '@reduxjs/toolkit';
import productModalSlice from '../slice/productModal/productModalSlice';
import cartSlice from '../slice/cart/cartSlice';


export const store = configureStore({
    reducer: {
        productModal: productModalSlice,
        cartItems: cartSlice
    }
})