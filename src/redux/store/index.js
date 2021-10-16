import { configureStore } from '@reduxjs/toolkit';
import productModalSlice from '../slice/productModal/productModalSlice';


export const store = configureStore({
    reducer: {
        productModal: productModalSlice
    }
})