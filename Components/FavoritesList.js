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
        <SafeAreaView>
            <Text>
                My Favorite Places
            </Text>
        </SafeAreaView>
    )
}

export default FavoritesList