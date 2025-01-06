

import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface wishListItem{
    id:number;
    title:string;
    price:number;
    category:string;
    image:string;
    rating:{
        rate:number;
        count:number;
    };
    quantity:number;
}

interface wishListState{
    items:wishListItem[];
}

const initialState:wishListState={
    items:[],
}

const wishListSlice=createSlice({
    name:'wishList',
    initialState,
    reducers:{
        addItemtoWishList:(state,action:PayloadAction<Omit<wishListItem,"quantity">>)=>{
            const existingItem=state.items.find(
                (item)=>item.id===action.payload.id
            );
            if(existingItem){
                existingItem.quantity+=1;
            }
            else{
                state.items.push({...action.payload,quantity:1});
            }
        },

        removeItemFromWishList:(state,action:PayloadAction<{id:number}>)=>{
            const existingItem=state.items.find(
                (item)=>item.id===action.payload.id
            );
            if(existingItem){
                if(existingItem.quantity>1){
                    existingItem.quantity-=1;
                }
                else{
                    state.items=state.items.filter((item)=>item.id != action.payload.id);
                }
            }
        },

        clearWishList:(state)=>{
            state.items=[];
        }
    }
})

export const {addItemtoWishList,clearWishList ,removeItemFromWishList}=wishListSlice.actions

export default wishListSlice.reducer;