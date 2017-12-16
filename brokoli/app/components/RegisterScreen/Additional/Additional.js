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
            passSkillsToDb : [],
        //    passHeadertoDb : [],
        //    passScreenToDb : passHeadertoDb.concat(passSkillsToDb)
        }
    }

   /* callbackHeader = (dataFromChild) => {
        this.setState({ passHeadertoDb: dataFromChild });
        console.log("Parent Header Arr: ", this.state.passHeadertoDb)
        this._onFlip()
    }*/

    callbackSkills = (dataFromChild) => {
        this.setState({ passSkillsToDb: dataFromChild });
        console.log("Parent Skills Arr: ", this.state.passSkillsToDb)
    }
    
    render(){
        return(

            <KeyboardAvoidingView behavior="padding">

            <ScrollView contentContainerStyle={styles.additional}
                        showsVerticalScrollIndicator={false}>

                <Header />

                <Skills callbackFromParent = {this.callbackSkills} />

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

