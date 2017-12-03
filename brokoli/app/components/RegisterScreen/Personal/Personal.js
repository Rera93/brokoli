import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';

import FullName from './FullName'
import ProfilePic from './ProfilePic'
import BirthDate from './BirthDate'
import Gender from './Gender'
import Location from './Location'
import ViewContainer from '../../ViewContainer'

const width = Dimensions.get('window').width

export default class Personal extends React.Component {

    static navigationOptions = {
        title: 'Personal',
        headerStyle: { backgroundColor: '#42D260', marginTop: 24 },
        headerTitleStyle: { color: 'white' },
      };
    
    render(){

        const {navigate}= this.props.navigation
        
        return(

            <ViewContainer style={styles.personal}>
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
    personal: {
        backgroundColor: 'white'

    },
    button: {
    backgroundColor: '#42D260',
    marginBottom: 20,
    borderRadius: 10,
    width: width - 100,
    alignItems: 'center'
    },
    btnText: {
    color : 'white',
    padding: 10,
    fontWeight: 'bold'
}
})
