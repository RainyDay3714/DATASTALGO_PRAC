import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { productListReducer } from './reducers/productsReducers'

const reducer = combineReducers ({
  productList: productListReducer,
})

// const initialState = {

// }

const store = configureStore({
  reducer,
  // initialState, (no need for initialState here, Redux Toolkit handles it)
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
})

export default store