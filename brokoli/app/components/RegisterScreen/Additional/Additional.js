import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Header from './Header'
import Summary from './Summary'
import ViewContainer from '../../ViewContainer'

export default class Additional extends React.Component {

    static navigationOptions = {
        title: 'Additional'
      };

    
    render(){
        return(

            <ViewContainer>

                <Header />
                <Summary />

                <TouchableOpacity>

                <Text> Proceed </Text>

                </TouchableOpacity>

                </ViewContainer>

        )
    }
}

