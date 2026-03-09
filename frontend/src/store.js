import { configureStore } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'

const reducer = {

}

const initialState = {

}

const middleware = [thunk]

const store = configureStore({
  reducer,
  initialState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
})

export default store