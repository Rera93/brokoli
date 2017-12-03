import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Interests from './Interests'
import Skills from './Skills'
import ViewContainer from '../../ViewContainer'

const width = Dimensions.get('window').width

export default class Professional extends React.Component {


    static navigationOptions = {
        title: 'Professional',
        headerStyle: { backgroundColor: '#42D260', marginTop: 24 },
        headerTitleStyle: { color: 'white' },
      };
    
    render(){

        const {navigate}= this.props.navigation

        return(

            <ViewContainer style={styles.professional}>

             <Skills />
             <Interests />

             <TouchableOpacity style={styles.button} onPress={()=> navigate('Career')}>

                <Text style={styles.btnText}> NEXT </Text>

                </TouchableOpacity>

                </ViewContainer>

        )
    }
}

const styles = StyleSheet.create({
    professional: {
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

