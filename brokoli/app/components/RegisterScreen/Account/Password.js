import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import ViewContainer from '../../ViewContainer'
import UserInput from '../UserInput';

export default class Password extends React.Component {

    
    render(){
        return(

            <UserInput placeholder='password'
                       autoCapitalize={'none'}
                       returnKeyType={'done'}
                       autoCorrect={false} />

        )
    }
}

