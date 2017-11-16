import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

import ViewContainer from '../../ViewContainer'

export default class Header extends React.Component {

    render(){
        return(

            <ViewContainer>

              <Text> Hello, header. </Text>

                </ViewContainer>

        )
    }
}

