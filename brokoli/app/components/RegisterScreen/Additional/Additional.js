import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Header from './Header'
import Summary from './Summary'
import ViewContainer from '../../ViewContainer'

const width = Dimensions.get('window').width

export default class Additional extends React.Component {

    static navigationOptions = {
        title: 'Additional',
        headerStyle: { backgroundColor: '#42D260', marginTop: 24 },
        headerTitleStyle: { color: 'white' },
      };

    
    render(){
        return(

            <ViewContainer style={styles.additional}>

                <Header />
                <Summary />

                <TouchableOpacity style={styles.button}>

                <Text style={styles.btnText}> Proceed </Text>

                </TouchableOpacity>

                </ViewContainer>

        )
    }
}

const styles = StyleSheet.create({
    additional: {
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

