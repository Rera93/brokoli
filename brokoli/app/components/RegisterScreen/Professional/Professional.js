import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import Interests from './Interests'
import Skills from './Skills'
import ViewContainer from '../ViewContainer'

export default class Professional extends React.Component {

    
    render(){
        return(

            <ViewContainer>

             <Skills />
             <Interests />

                </ViewContainer>

        )
    }
}

