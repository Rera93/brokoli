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

                <TouchableOpacity onPress={()=> navigate('Account')}
                                  style={styles.button}>

                <Text style={styles.btnText}> NEXT </Text>

                </TouchableOpacity>

                </ViewContainer>

        )
    }
}

const styles = StyleSheet.create({
button: {
    backgroundColor: '#0FFDD8',
    marginBottom: 20,
    borderRadius: 10,
},
btnText: {
color : 'white',
padding: 10
}
})
