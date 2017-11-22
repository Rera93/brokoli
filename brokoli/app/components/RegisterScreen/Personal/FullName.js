import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import ViewContainer from '../../ViewContainer'
import UserInput from '../UserInput'


export default class FullName extends React.Component {

    
    render(){


        return(

            <ViewContainer>

                    <UserInput
                       placeholder='first and last name'
                       autoCapitalize={'none'}
                       returnKeyType={'done'}
                       autoCorrect={false} />
    

                </ViewContainer>

        )
    }
}

