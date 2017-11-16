import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Interests from './Interests'
import Skills from './Skills'
import ViewContainer from '../../ViewContainer'


export default class Professional extends React.Component {


    static navigationOptions = {
        title: 'Professional'
      };
    
    render(){

        const {navigate}= this.props.navigation

        return(

            <ViewContainer>

             <Skills />
             <Interests />

             <TouchableOpacity onPress={()=> navigate('Career')}>

                <Text> NEXT </Text>

                </TouchableOpacity>

                </ViewContainer>

        )
    }
}

