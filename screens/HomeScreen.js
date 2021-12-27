import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image} from 'react-native'
import tw from "tailwind-react-native-classnames"; 
import NavOptions from '../Components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env"; 
import { useDispatch } from 'react-redux';
import {setDestination, setOrigin} from "../slices/navSlice"; 
import SetFavouritePlaces from '../Components/SetFavouritePlaces';


/*
    <Image
                    style = {{
                        width: 100, height: 100, resizeMode: "contain",
                    }}
                    source = {{
                        uri: "data:image/png;base64,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"
                    }}
                />
*/ 

const HomeScreen = () => {
    const dispatch = useDispatch(); 
    return (
        <SafeAreaView style = {tw`bg-white h-full`}>
            <View style = {tw`p-10 flex-col `}>
                <Text style = {tw`text-green-500 text-4xl mt-10 mb-5`}>
                     Travelly
                </Text> 
            
                <GooglePlacesAutocomplete
                    placeholder =  "Where from?"  
                    styles = {{
                        container: {
                            flex: 0,
                            marginTop: 5,
                            marginBottom: 5,  

                        }, 
                        textInput: {
                            fontSize: 18,
                        }, 
                    }}
                    onPress = {(data, details = null) => {
                        // details include infos like coordinates etc.
                        dispatch(setOrigin({
                            location: details.geometry.location,
                            description: data.description
                        }))

                        dispatch(setDestination(null)); 
                       
                        console.log(details); 
                    } }
                    fetchDetails = {true}
                    returnKeyType = {"search"}
                    enablePoweredByContainer = {false}
                    minLength = {2}
                    query = {{
                        key: GOOGLE_MAPS_APIKEY, 
                        language: "en", 

                    }}
                    nearbyPlacesAPI = "GooglePlacesSearch"
                    debounce = {400}
                />
                <NavOptions/>
               <SetFavouritePlaces/>  
            </View> 

        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
 