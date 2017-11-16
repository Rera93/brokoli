import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

import ViewContainer from '../ViewContainer'

export default class FullName extends React.Component {

    static navigationOptions = {
        title: 'Full Name'
    };
    
    render(){

        const { navigate } = this.props.navigation;

        return(

            <ViewContainer>

              <Text> Hello, full name. </Text>
              <TouchableOpacity onPress={()=> navigate('BirthDate')}>

                <Text> NEXT </Text>

                  </TouchableOpacity>

                </ViewContainer>

        )
    }
}

