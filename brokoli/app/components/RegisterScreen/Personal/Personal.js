import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

import FullName from './FullName'
import ProfilePic from './ProfilePic'
import BirthDate from './BirthDate'
import Gender from './Gender'
import Location from './Location'
import ViewContainer from '../../ViewContainer'

export default class Personal extends React.Component {

    static navigationOptions = {
        title: 'Personal'
      };
    
    render(){

        const {navigate}= this.props.navigation
        
        return(

            <ViewContainer>
                <FullName />
                <ProfilePic />
                <BirthDate />
                <Gender />
                <Location />

                <TouchableOpacity onPress={()=> navigate('Professional')}>

                <Text> NEXT </Text>

                </TouchableOpacity>

                </ViewContainer>

        )
    }
}

