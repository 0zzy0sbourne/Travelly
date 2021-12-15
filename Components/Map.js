import React, {useEffect, useRef} from 'react'
import { StyleSheet, Text, View} from 'react-native'
import MapView from "react-native-maps"; 
import tw from "tailwind-react-native-classnames"; 
import { useSelector, useDispatch} from 'react-redux';
import { selectOrigin, selectDestination, selectServices, setServices } from '../slices/navSlice';
import { Marker } from 'react-native-maps';
import MapViewDirections from "react-native-maps-directions"; 
import {GOOGLE_MAPS_APIKEY} from "@env"; 


const Map = () => {
    // this hook takes a selector function as an argument
    const origin = useSelector(selectOrigin); // it is an object (returns null and it causes to error rn )
    const destination = useSelector(selectDestination); 
    const dispatch = useDispatch(); 
    const mapRef = useRef(origin); 
    const services = useSelector(selectServices); 
    
    useEffect(() => {
        if(!origin || !destination) return; 
        // Zoom and fit to markers of origin and destination ( zooms out to show the road form origin to destination) 
        mapRef.current.fitToSuppliedMarkers(['origin', 'destination'])
    }, [origin, destination])

    useEffect(() => {
        if(!services) return; 
        // Zoom in and fit to markers of services 
        mapRef.current.fitToSuppliedMarkers(['services', 'destination'])
    }, [services, destination])
    

    useEffect(() => {
        if(!origin || !destination) return; 
        
        const getPlaces = async() => { 
            // type is given as static data, but it should be taken from the user ! ( change it later )
            // radius is in meters 
            fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${destination.location.lat},${destination.location.lng}&sensor=true&key=${GOOGLE_MAPS_APIKEY}&radius=500&types=atm`
            ).then((res) => res.json())
            .then(data => {
                // console.log(data); 
                dispatch(setServices(data.results)); 
            })
        };  

        getPlaces(); 
    }, [origin, destination, GOOGLE_MAPS_APIKEY]) 

    return (
          <MapView
                ref = {mapRef}
                style = {tw`flex-1`}
                mapType = "mutedStandart"
                initialRegion={{ // info about the location we chose
                latitude: origin.location.lat,
                longitude: origin.location.lng,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
                }}
                
        >

            {origin && destination && (
                <MapViewDirections
                        lineDashPattern = {[0]}
                        origin={origin.description}
                        destination={destination.description}
                        apikey={GOOGLE_MAPS_APIKEY}
                        strokeWidth={10}
                        strokeColor="blue"                
                />                 
            )}
                {origin?.location && (
                    <Marker
                        coordinate = {{
                                latitude: origin.location.lat,
                                longitude: origin.location.lng,  
                        }}
                        title= "Origin"
                        description={origin.description}
                        identifier="origin"

                    />  
                 
                )}  
                {destination?.location && (
                    <Marker
                        coordinate = {{
                                latitude: destination.location.lat,
                                longitude: destination.location.lng,  
                        }}
                        title= "Destination"
                        description={destination.description}
                        identifier="destination"

                    />  
                 
                )} 
                {services && ( // if there is a servicei this should be working
                    // map the array to markers
                    services.map((service) => (
                        <Marker
                            coordinate = {{
                                    latitude: service.geometry.location.lat,
                                    longitude: service.geometry.location.lng,  
                            }}
                            title= "Services"
                            description={service.name}
                            identifier="services"

                        />
                    ))
                )}
                

             </MapView>


    )
}

export default Map

const styles = StyleSheet.create({})


/* old single Marker usage 
<Marker
                        coordinate = {{
                                latitude: services[0].geometry.location.lat,
                                longitude: services[0].geometry.location.lng,  
                        }}
                        title= "Services"
                        description={services.name}
                        identifier="services"

                    />   

*/ 