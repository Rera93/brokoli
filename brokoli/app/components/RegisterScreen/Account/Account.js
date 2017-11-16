import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import Email from './Email'
import Username from './Username'
import Password from './Password'
import ViewContainer from '../ViewContainer'

export default class Account extends React.Component {

    
    render(){
        return(

            <ViewContainer>

                <Email />
                <Username />
                <Password />

                </ViewContainer>

        )
    }
}

