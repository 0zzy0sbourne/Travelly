import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from "tailwind-react-native-classnames";
import { useDispatch } from 'react-redux';
import {GOOGLE_MAPS_APIKEY} from "@env"; 
import { useNavigation } from '@react-navigation/core';
import { setDestination, setOrigin } from '../slices/navSlice';
import {Icon} from "react-native-elements"; 
import FavoritesList from './FavoritesList';
const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation(); 
    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`text-center  py-5 text-xl `}>Good Morning, Ozan</Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>

                <View>
                    <GooglePlacesAutocomplete
                        placeholder="Where to?"
                        styles = {{
                            container: {
                                flex: 0,
                                backgroundColor: "white",
                                paddingTop: 20,  
                            }, 
                            textInput:{
                                fontSize: 20,
                                backgroundColor: "white", 
                                borderRadius: 10,
                            },
                            textInputContainer: {
                                paddingBottom: 0, 
                                paddingHorizontal: 20,
                            }
                        }}
                        onPress = {(data, details = null) => {
                            dispatch(
                                setDestination({
                                location: details.geometry.location,
                                description: data.description
                                })
                            ); 
                            navigation.navigate("RideOptionsCard"); 
                        }}
                        nearbyPlacesAPI = "GooglePlacesSearch"
                        fetchDetails= {true}
                        enablePoweredByContainer = {false}
                        minLength= {2}
                        query = {{
                            key: GOOGLE_MAPS_APIKEY, 
                            language: "en", 
                        }}
                        debounce =  {400}
                    />
                </View>
                <TouchableOpacity 
                onPress = {() => navigation.navigate("FavoritesList")}
                style = {tw`flex flex-row  justify-between bg-green-400 w-32 py-1 px-1 rounded-full    `}>
                                <Text style = {tw`text-white  px-3 `}>
                                    My Favorites
                                </Text>                            
                        
                </TouchableOpacity>
            </View>
            
            <View
                style = {tw`flex flex-row bg-gray-100 justify-evenly py-2 border-t mt-auto border-gray-100`}
            >
                <TouchableOpacity 
                onPress = {() => navigation.navigate("RideOptionsCard")}
                style = {tw`flex flex-row  justify-between bg-green-400 w-32 py-4 px-3 rounded-full    `}>
                                <Icon style={tw`m-auto`} name='taxi'  type='font-awesome'  color='#f50' />
                                <Text style = {tw`text-white  px-3 `}>
                                    Search Services
                                </Text>                            
                        
                </TouchableOpacity>
            </View>
        </SafeAreaView>    
    )
}

export default NavigateCard

const styles = StyleSheet.create({})
