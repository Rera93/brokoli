import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

import ViewContainer from '../../ViewContainer'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default class Location extends React.Component {

    
    render(){
        

        return(

            <ViewContainer>

                    <GooglePlacesAutocomplete
                    placeholder='Search'
                    minLength={2} // minimum length of text to search
                    autoFocus={false}
                    fetchDetails={true}
                    onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                    console.log(data);
                    console.log(details);
                    }}
                    getDefaultValue={() => {
                    return ''; // text input default value
                    }}
                    query={{
                    // available options: https://developers.google.com/places/web-service/autocomplete
                    key: 'AIzaSyCGyDix_O8-waoyLPJtHO2z60q5VIScsJ8',
                    language: 'en', // language of the results
                    types: '(cities)', // default: 'geocode'
                    }}
                    styles={{
                    description: {
                        fontWeight: 'bold',
                    },
                    predefinedPlacesDescription: {
                        color: '#1faadb',
                    },
                    }}

                    currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
                    currentLocationLabel="Current location"
                    nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                    GoogleReverseGeocodingQuery={{
                    // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
                    }}
                    GooglePlacesSearchQuery={{
                    // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                    rankby: 'distance',
                    types: 'food',
                    }}


                    filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities

                    predefinedPlacesAlwaysVisible={true}
                    />
                </ViewContainer>

        )
    }
}

