import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Dimensions, TextInput, View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Header from './Header'
import Skills from './Skills'
import ViewContainer from '../../ViewContainer'

const width = Dimensions.get('window').width
const nrOfRequiredSkills = 5;

export default class Additional extends React.Component {

    static navigationOptions = {
        title: 'Additional',
        headerStyle: { backgroundColor: '#42D260', marginTop: 24 },
        headerTitleStyle: { color: 'white' },
      };


    constructor(props){
        super(props)

        this.state={
        }
    }



    
    

    _addNew(){

        if(this.state.addNew == true){
            return(
                <View style={styles.skillCont}>
                
                    <TextInput style={styles.skill} placeholder='skill'/>
                
                </View> )
             //   this.setState({addNew: !this.state.addNew})
                
        }
    }

    
    render(){
        return(

            <KeyboardAvoidingView behavior="padding">

            <ScrollView contentContainerStyle={styles.additional}
                        showsVerticalScrollIndicator={false}>

                <Header />

                <Skills />

                <TouchableOpacity style={styles.button}>

                <Text style={styles.btnText}> PROCEED </Text>

                </TouchableOpacity>

                </ScrollView>

                <View style={{ height: 80 }} />

                

                
                </KeyboardAvoidingView>

        )
    }
}

const styles = StyleSheet.create({
    additional: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
    backgroundColor: '#42D260',
    marginBottom: 20,
    borderRadius: 10,
    width: width - 300,
    alignItems: 'center'
    },
    btnText: {
    color : 'white',
    padding: 10,
    fontWeight: 'bold'
},

})

