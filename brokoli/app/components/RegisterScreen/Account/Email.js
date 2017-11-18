import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';

import ViewContainer from '../../ViewContainer'
import UserInput from '../UserInput';

export default class Email extends React.Component {

    
    render(){
        return(

            <UserInput placeholder='email'
                       autoCapitalize={'none'}
                       returnKeyType={'done'}
                       autoCorrect={false} />

        )
    }
}

