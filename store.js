import { configureStore } from '@reduxjs/toolkit'; 
import navReducer from './slices/navSlice'; 
import favReducer from './slices/favSlice'; 
export default configureStore({
  reducer: {
    nav: navReducer,
    fav: favReducer
  },
})
