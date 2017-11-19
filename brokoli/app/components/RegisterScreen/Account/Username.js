import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import ViewContainer from '../../ViewContainer'
import UserInput from '../UserInput';
import brokoliImg from '../../../../img/icons/brokoliuser.png'

export default class Username extends React.Component {

    
    render(){
        return(

            <UserInput source={brokoliImg}
                       placeholder='Username'
                       autoCapitalize={'none'}
                       returnKeyType={'done'}
                       autoCorrect={false} />

        )
    }
}

