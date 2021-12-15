import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Provider} from "react-redux"; 
import { StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView, Platform} from 'react-native';
import store from './store';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// import AudioPlayer from "./Components/AudioPlayer";

export default function App() {
    const Stack = createNativeStackNavigator();

  return (
    <Provider store = {store} >
      <NavigationContainer>
       
          <Stack.Navigator>
          <Stack.Screen 
            name = "HomeScreen"  
            component = {HomeScreen}
            options = {{
              headerShown: false, 
            }}
            />
            <Stack.Screen 
            name = "MapScreen"  
            component = {MapScreen}
            options = {{
              headerShown: false, 
            }}
            /> 
          </Stack.Navigator>
      </NavigationContainer>
    </Provider> 

);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


/*
  <KeyboardAvoidingView
          behavior= {Platform.OS === "ios" ?  "padding" : "height"}
          style = {{flex:1  }}
        />  
*/