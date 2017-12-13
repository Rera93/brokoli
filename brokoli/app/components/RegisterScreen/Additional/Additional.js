import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Dimensions, TextInput, View, ScrollView } from 'react-native';
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
            addNew: false,
            totalNrSkills: nrOfRequiredSkills,
            skills: Array(nrOfRequiredSkills).fill(''),
        }
    }

    _renderSkills(){
        var rows = []
        for(let i=0; i < nrOfRequiredSkills; i++)
        {
            rows.push(

                <View key = {i}
                      style={styles.skillCont}>

                    <TextInput style={styles.skill} 
                               placeholder={'skill ' + (i+1)}
                               onChangeText={(text) => this._grabSkill(text, i)}/>

                </View>
            )
        }
        console.log(this.state.skills)
        return(
            <View style={styles.reqSkills}>
                {rows}
                </View>
        )
    }

    _grabSkill = (text, i) => {

        this.state.skills[i] = text

        this.setState({skills: this.state.skills})

        console.log(this.state.skills)

    }



    
    _flip(){
        console.log("addNew: ", this.state.addNew)
        this.setState({addNew: !this.state.addNew})
        console.log("addNew: ", this.state.addNew)
        

        {this._addNew}      
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

            <ScrollView contentContainerStyle={styles.additional}
                        showsVerticalScrollIndicator={false}>

                <Header />

                <View style={styles.titleCont}>

                    <Text style={styles.title}> What do you know? List at least five skills </Text>

                </View>


                 {this._renderSkills()}


                <TouchableOpacity style={styles.add} onPress={this._flip.bind(this)}>

                 <Text style={styles.plus}> + </Text>

                </TouchableOpacity> 

                {this._addNew()}

                <Skills />

                <TouchableOpacity style={styles.button}>

                <Text style={styles.btnText}> Proceed </Text>

                </TouchableOpacity>

                </ScrollView>

        )
    }
}

const styles = StyleSheet.create({
    additional: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleCont: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    title: {
        fontSize: 16,
        color: 'grey',
        textAlign: 'left',
        fontWeight: '600'
        
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
}, 
    add: {
        backgroundColor: 'white', 
    },
    plus: {
        color: '#42D260',
        padding: 10,
        fontSize: 55
    },
    skill: {
        flex: 1,
        width: width - 60,
        padding: 10,
        color: '#42D260'
    },
    skillCont: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        marginBottom: 5,
        borderColor: 'grey'

    },
    reqSkills: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    }

})

