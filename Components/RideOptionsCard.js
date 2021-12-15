import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, FlatList , TouchableOpacity } from 'react-native'
import { selectDestination, selectServices } from '../slices/navSlice'
import tw from "tailwind-react-native-classnames";
import { useSelector } from 'react-redux'; 
import { Icon } from 'react-native-elements/dist/icons/Icon';

const RideOptionsCard = () => {
    const services = useSelector(selectServices);  // returns an array of our services
    return (
        <SafeAreaView style = {tw`bg-white h-full`}>
           
            <View> 
                <Text style = {tw`text-center text-xl py-5`}>
                    Choose the services
                </Text>
            </View>
            
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

export default RideOptionsCard

const styles = StyleSheet.create({})
