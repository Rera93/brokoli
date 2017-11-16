import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

import ViewContainer from '../ViewContainer'

export default class Password extends React.Component {

    static navigationOptions = {
        title: 'Password'
    };
    
    render(){
        const { navigate } = this.props.navigation;
        return(

            <ViewContainer>

              <Text> Hello, password. </Text>
              <TouchableOpacity onPress={()=> navigate('Location')}>

                <Text> NEXT </Text>

                  </TouchableOpacity>

                </ViewContainer>

        )
    }
}

