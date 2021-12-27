import React from 'react'
import { FlatList, Image,  Text, TouchableOpacity, View } from 'react-native'
import tw from "tailwind-react-native-classnames"; 
import {useSelector, useDispatch} from "react-redux";
import { useNavigation } from '@react-navigation/core';
import { selectFavPlace } from '../slices/favSlice';
import { SafeAreaView } from 'react-native-safe-area-context'


// list all the favorite places of the user in this page
// make them choosable to go

function FavoritesList() {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    return (
        // TODO: list all the favorite places from redux 
        <SafeAreaView>
                
                
                <FlatList data = {services}
                renderItem = {({item: {name, vicinity, rating}, item}) => (
                    <TouchableOpacity
                    style={tw`flex-row justify-between items-center px-5 py-9`}
                    >
                            <View>
                                 <Text>{name}</Text>
                            </View>

                                <View style = {tw`flex flex-row content-end  justify-evenly  items-center`}>
                                     <Text style={tw`font-bold text-xl `}>{rating}</Text>
                                    <Icon style= {tw``} 
                                    name ="star" color = "black" size = {15} type = "font-awesome"></Icon>
                                </View>
                               
                            
                            


                    </TouchableOpacity>
                )}
            />
        
        </SafeAreaView>
    )
}

export default FavoritesList