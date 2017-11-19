import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';

import ViewContainer from '../../ViewContainer'
import UserInput from '../UserInput';
import atImg from '../../../../img/icons/at.png'

export default class Email extends React.Component {

    
    render(){
        return(

            <UserInput source={atImg}
                       placeholder='Email'
                       autoCapitalize={'none'}
                       returnKeyType={'done'}
                       autoCorrect={false} />

        )
    }
}

