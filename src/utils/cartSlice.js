import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action)=>{
            //mutating the state here | directly modify the state
            state.items.push(action.payload);
        },
        removeItem: (state, action)=>{
            state.items.pop(); // here removing the last added items, but we can remove a specific items with logic
        },
        clearCart: (state, action)=>{
            state.items.length = 0; // []
        },
    },
});


export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;