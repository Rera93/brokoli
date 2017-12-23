'use strict'
import React from 'react';
import { StyleSheet, 
         Text, 
         TextInput, 
         Alert, 
         ScrollView, 
         View,
         TouchableOpacity
         } from 'react-native';

export default class Positions extends React.Component {


    static navigationOptions = {
        title: 'Positions',
        headerStyle: { backgroundColor: '#42D260', marginTop: 24 },
        headerTitleStyle: { color: 'white' },
      };

    constructor(props){
        super(props)

        this.state = {
            positions : []
        }
    }

    


    render(){
        const { navigate } = this.props.navigation
        return(
            <View>
            <TouchableOpacity onPress={() => navigate('Projects') }>
            <Text> NEXT </Text>
            </TouchableOpacity>
            </View>
        )
    }



}

const styles = StyleSheet.create({



})
