import {createSlice} from "@reduxjs/toolkit"; 

const initialState = {
    favLocation : null,
}; 
export const favSlice = createSlice({
    name: "fav", 
    initialState, 
    reducers: {
       
        setFavPlace: (state, action) => {
            state.favLocation = action.payload; 
        },
        
    },
})

export const {setFavPlace}= favSlice.actions;


// selectors 
export const selectFavPlace = (state) => state.fav.favLocation;

export default favSlice.reducer; // connects us to the store

