import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import ViewContainer from '../../ViewContainer'
import UserInput from '../UserInput';
import keyImg from '../../../../img/icons/key.png'

export default class Password extends React.Component {

    
    render(){
        return(

            <UserInput source={keyImg}
                       placeholder='Re-type password'
                       secureTextEntry = {true}
                       autoCapitalize={'none'}
                       returnKeyType={'done'}
                       autoCorrect={false} />

        )
    }
}
