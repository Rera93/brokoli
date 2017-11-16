import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

import ViewContainer from '../ViewContainer'

export default class Gender extends React.Component {

    static navigationOptions = {
        title: 'Gender'
    };
    
    render(){
        
        const { navigate } = this.props.navigation;

        return(

            <ViewContainer>

              <Text> Hello, gender. </Text>
              <TouchableOpacity onPress={()=> navigate('Location')}>

                <Text> NEXT </Text>

                  </TouchableOpacity>

                </ViewContainer>

        )
    }
}

