import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Email from './Email'
import Username from './Username'
import Password from './Password'
import ViewContainer from '../../ViewContainer'

export default class Account extends React.Component {
    static navigationOptions = {
        title: 'Account'
      };
    
    render(){

        const {navigate}= this.props.navigation
        return(

            <ViewContainer>

                <Email />
                <Username />
                <Password />

                <TouchableOpacity onPress={()=> navigate('Personal')}>

                <Text> NEXT </Text>

                </TouchableOpacity>

                </ViewContainer>

        )
    }
}

