import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

import ViewContainer from '../ViewContainer'

export default class Username extends React.Component {

    static navigationOptions = {
        title: 'Username'
    };
    
    render(){
        const { navigate } = this.props.navigation;
        return(

            <ViewContainer>

              <Text> Hello, username. </Text>
              <TouchableOpacity onPress={()=> navigate('Password')}>

                <Text> NEXT </Text>

                  </TouchableOpacity>

                </ViewContainer>

        )
    }
}

