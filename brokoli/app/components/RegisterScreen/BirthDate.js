import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

import ViewContainer from '../ViewContainer'

export default class BirthDate extends React.Component {

    static navigationOptions = {
        title: 'Date of Birth'
    };
    
    render(){
        
        const { navigate } = this.props.navigation;

        return(

            <ViewContainer>

              <Text> Hello, birth date. </Text>
              <TouchableOpacity onPress={()=> navigate('Gender')}>

                <Text> NEXT </Text>

                  </TouchableOpacity>

                </ViewContainer>

        )
    }
}

