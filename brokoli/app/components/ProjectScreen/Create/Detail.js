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

export default class Detail extends React.Component {


    static navigationOptions = {
        title: 'Details',
        headerStyle: { backgroundColor: '#42D260', marginTop: 24 },
        headerTitleStyle: { color: 'white' },
      };

    constructor(props){
        super(props)

        this.state = {
            name : '',
            abstract : '',
            goal: ''
        }
    }

    


    render(){
        const { navigate } = this.props.navigation
        return(
            <View>
            <TouchableOpacity onPress={() => navigate('Categories') }>
            <Text> NEXT </Text>
            </TouchableOpacity>
            </View>
        )
    }



}

const styles = StyleSheet.create({



})
