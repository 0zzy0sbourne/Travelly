import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {mapsApi} from "react-native-maps"; 
import tw from "tailwind-react-native-classnames"; 
import {useSelector, useDispatch} from 'react-redux';
import {selectOrigin, selectDestination} from "../slices/navSlice"; 
import {Marker} from "react-native-maps"; 
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAPS_APIKEY} from "@env"; 


const Services = () => {
    return (
        <View>
            <Text></Text>
        </View>
    )
}

export default Services

const styles = StyleSheet.create({})
