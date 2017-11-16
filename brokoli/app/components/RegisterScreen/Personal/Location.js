import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

import ViewContainer from '../ViewContainer'

export default class Location extends React.Component {

    static navigationOptions = {
        title: 'Location'
    };
    
    render(){
        
        const { navigate } = this.props.navigation;

        return(

            <ViewContainer>

              <Text> Hello, location. </Text>
              <TouchableOpacity onPress={()=> navigate('Education')}>

                <Text> NEXT </Text>

                  </TouchableOpacity>

                </ViewContainer>

        )
    }
}

