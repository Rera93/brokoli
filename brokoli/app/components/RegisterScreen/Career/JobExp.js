import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

import ViewContainer from '../ViewContainer'

export default class JobExp extends React.Component {

    static navigationOptions = {
        title: 'Job Experience'
    };
    
    render(){
        
        const { navigate } = this.props.navigation;

        return(

            <ViewContainer>

              <Text> Hello, jobExp. </Text>
              <TouchableOpacity onPress={()=> navigate('Email')}>

                <Text> NEXT </Text>

                  </TouchableOpacity>

                </ViewContainer>

        )
    }
}

