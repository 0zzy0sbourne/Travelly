import {createSlice} from "@reduxjs/toolkit"; 

const initialState = {
    origin: null, 
    destination: null, 
    travelTimeInformation: null,
    services: null,  
}; 
export const navSlice = createSlice({
    name: "nav", 
    initialState, 
    reducers: {
        setOrigin: ( state, action ) => {
            state.origin = action.payload; 
        },
        setDestination: (state, action) => {
            state.destination = action.payload; 
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload; 
        },
        setServices: (state, action) => {
            state.services = action.payload;    
        }

    },
})

export const {setOrigin, setDestination, setTravelTimeInformation, setServices}= navSlice.actions;


// selectors 
export const selectOrigin = (state) => state.nav.origin; 
export const selectDestination = (state) => state.nav.destination; 
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;
export const selectServices = (state) =>  state.nav.services;

export default navSlice.reducer; // connects us to the store

