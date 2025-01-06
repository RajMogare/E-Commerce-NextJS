import {configureStore} from '@reduxjs/toolkit';
import cartReducer from "./cartSlice"
import wishListReducer from './wishlistSlice';
const store=configureStore({
    reducer:{
        cart:cartReducer,
        wishlist:wishListReducer
    }
})

export type RootState=ReturnType<typeof store.getState>;
export type AddDistpatch=typeof store.dispatch;
export default store;