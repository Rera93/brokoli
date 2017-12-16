import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Dimensions, TextInput, View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Header from './Header'
import Skills from './Skills'
import ViewContainer from '../../ViewContainer'

const width = Dimensions.get('window').width
const nrOfRequiredSkills = 5;
var countSkills = 0;

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
            passHeadertoDb : '',
            header: false,
            skills: false,
            flip: false
        }
    }
    
    /* callbackHeader and callbackSkills update the state for passHeaderToDb and 
       passSkillsToDB respectively from their child components imported in this file.
       
       Alan TODO: passHeaderToDb and passSkillsToDb have to be sent to db. 
    */

    callbackHeader = (dateHeaderContent, dataHeader ) => {
        this.setState({ passHeadertoDb: dateHeaderContent });
        console.log("Header: ", this.state.passHeadertoDb)
        this.setState({header: dataHeader})
        console.log("isHeader: ", this.state.header)
        this._updateFlip()
    }


    callbackSkills = (dataFromChild) => {
        this.setState({ passSkillsToDb: dataFromChild });
        console.log("Skills: ", this.state.passSkillsToDb)
        this._verifySkills();
    }

    _updateFlip(){
       this.setState({flip: this.state.header && this.state.skills})
       console.log('flip: ', this.state.flip)
    }

    _verifySkills(){
        let countSkills = 0
        for (let i=0; i < this.state.passSkillsToDb.length; i++)
        {
            if(this.state.passSkillsToDb[i] != "")
            {
                countSkills++
                console.log('count: ', countSkills)

                if(countSkills >= 5){
                    this.setState({skills: true})
                    console.log('skills: ', this.state.skills)
                    this.setState({flip: this.state.header && this.state.skills})
                    console.log('flip: ', this.state.flip)
                } 
                else 
                {  
                    this.setState({skills: false})
                    console.log('skills: ', this.state.skills)
                    this.setState({flip: this.state.header && this.state.skills})
                    console.log('flip: ', this.state.flip)
                }
            }
           
        }
    }


    
    render(){
        return(

            <KeyboardAvoidingView behavior="padding">

            <ScrollView contentContainerStyle={styles.additional}
                        showsVerticalScrollIndicator={false}>

                <Header callbackFromParent = {this.callbackHeader}/>

                <Skills callbackFromParent = {this.callbackSkills} />

                <TouchableOpacity disabled={this.state.flip ? false : true} 
                                  style={[styles.button, {backgroundColor: this.state.flip ? '#42D260' : 'white'}]}>

                <Text style={[styles.btnText, {color: this.state.flip ? 'white' :  '#42D260'}]}> PROCEED </Text>

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
    marginBottom: 20,
    borderRadius: 10,
    width: width - 300,
    alignItems: 'center'
    },
    btnText: {
    padding: 10,
    fontWeight: 'bold'
},

})

