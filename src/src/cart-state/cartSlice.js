import {createSlice} from '@reduxjs/toolkit'

const initialState ={
    cartItems:[],
    totalAmount:0,
    totalItemLength:0
}

const cartSlice = createSlice({
    name:"cart",
    initialState
})

export default cartSlice.reducer