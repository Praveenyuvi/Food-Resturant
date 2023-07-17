import {configureStore} from '@reduxjs/toolkit'
import  cartSlice from './cart-state/cartSlice'

const store = configureStore({
    reducer:{
        cart:cartSlice
    }
})

export default store