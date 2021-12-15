import React from 'react'
import { FlatList, Image,  Text, TouchableOpacity, View } from 'react-native'
import tw from "tailwind-react-native-classnames"; 
import {Icon} from "react-native-elements"; 
import { useSelector } from 'react-redux';
import { useNavigation, useNavigationContainerRef } from '@react-navigation/native';
import { selectOrigin } from '../slices/navSlice';
import {TRAVEL_ICON1} from "@env"; 
const data = [
    {
        id: "123" , 
        // image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1568070443/assets/82/6bf372-6016-492d-b20d-d81878a14752/original/Black.png",
        // image: {TRAVEL_ICON1},
        // image: "https://cdn1.iconfinder.com/data/icons/space-flat-galaxy-radio/512/laser_gun-512.png",  
        image: "https://cdn2.iconfinder.com/data/icons/scenarium-vol-3-1/128/036_backpack_bag_camping_travel_school_rucksack-128.png",
        title: "Let's Go !", 
        screen: "MapScreen", 

    },


]; 
const NavOptions = () => {
    const origin = useSelector(selectOrigin); 
    const navigation = useNavigation(); 
    return (
        <FlatList
            data = {data}
            horizontal
            keyExtractor = {(item) =>  item.id} 
            renderItem = { ({ item }) => (
                <TouchableOpacity 
                onPress = {() => navigation.navigate(item.screen)}
                style = {tw`p-2 mt-5 `}
                disabled = {!origin}
                >
                    
                    <View style={tw`${!origin && "opacity-20"} flex-col items-center`}>
                        <Image
                            style = {{width: 100, height:100, resizeMode: "contain"}} 
                            // resizeMode keeps the aspect ratio
                            source = {{ uri: item.image}}
                        />
                        <Text style = {tw`mt-2 font-bold`}>
                            {item.title}
                        </Text>
                        
                    </View>
                </TouchableOpacity>
            )}
        />
    ); 
}; 

export default NavOptions; 




/* deleted this right arrow icon from homescreen
<Icon
                            style = {tw`p-2 bg-black rounded-full w-10 mt-4`}
                            name = "arrowright" 
                            color = "white"
                            type ="antdesign"
                        /> 
*/ 