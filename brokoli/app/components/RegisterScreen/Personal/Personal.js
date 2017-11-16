import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import FullName from './FullName'
import ProfilePic from './ProfilePic'
import BirthDate from './BirthDate'
import Gender from './Gender'
import Location from './Location'
import ViewContainer from '../ViewContainer'

export default class Personal extends React.Component {

    
    render(){
        return(

            <ViewContainer>
                <FullName />
                <ProfilePic />
                <BirthDate />
                <Gender />
                <Location />
                </ViewContainer>

        )
    }
}

