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
            skills: false,
            flip: false
        }
    }
    
    /* callbackHeader and callbackSkills update the state for passHeaderToDb and 
       passSkillsToDB respectively from their child components imported in this file.
       
       Alan TODO: passHeaderToDb and passSkillsToDb have to be sent to db. 
    */

    callbackHeader = (dataFromChild) => {
        this.state.passHeadertoDb = dataFromChild
        this.setState(function(prevState, props){
            return {passHeadertoDb: prevState.passHeadertoDb}
         });

        console.log("Header: ", this.state.passHeadertoDb)
        this._updateFlip()
    }


    callbackSkills = (dataFromChild) => {
        this.state.passSkillsToDb = dataFromChild
        this.setState(function(prevState, props){
            return {passSkillsToDb: prevState.passSkillsToDb}
         });
        console.log("Skills: ", this.state.passSkillsToDb)
        this._verifySkills();
        this._updateFlip();
    }

    _updateFlip(){
        this.state.flip = this.state.passHeadertoDb != '' && this.state.skills
        this.setState(function(prevState, props){
            return {flip: prevState.flip}
         });

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

                    this.state.skills = true
                    this.setState(function(prevState, props){
                        return {skills: prevState.skills}
                     });
                    console.log('skills: ', this.state.skills)
                } 
                else 
                {  
                    this.state.skills = false
                    this.setState(function(prevState, props){
                        return {skills: prevState.skills}
                     });
                    console.log('skills: ', this.state.skills)
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
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#42D260'
    },
    btnText: {
    padding: 10,
    fontWeight: 'bold'
},

})

