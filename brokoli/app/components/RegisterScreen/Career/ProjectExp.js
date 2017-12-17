import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View, Dimensions } from 'react-native';


import ViewContainer from '../../ViewContainer'

const width = Dimensions.get("window").width

const nrOfProjects = 3

export default class ProjectExp extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            projectNames : Array(nrOfProjects).fill(''),
            positions : Array(nrOfProjects).fill(''),
            courses: Array(nrOfProjects).fill(''),
        }
    }

    _grabProjectName = (text, i) => {
        
                this.state.projectNames[i] = text
                this.setState(function(prevState, props){
                  return {projectNames: prevState.projectNames}
                 });
                console.log('Project Names: ', this.state.projectNames)
                
    }

    _grabPosition = (text, i) => {
                
                this.state.positions[i] = text
                this.setState(function(prevState, props){
                return {positions: prevState.positions}
                });
                console.log('Positions: ', this.state.positions)
                        
    }
    _grabCourse = (text, i) => {
        
                this.state.courses[i] = text
                this.setState(function(prevState, props){
                  return {courses: prevState.courses}
                 });
                console.log('Courses: ', this.state.courses)
                
    }


    _renderProjectForms(){
        var rows = []
        for(let i=0; i < nrOfProjects; i++)
        {
            rows.push(

                <View key = {i}
                      style={styles.projectCont}>

                    <View style={styles.inputCont}>  

                    <TextInput style={styles.singleInput} 
                               placeholder={'project name ' + (i+1)}
                               onChangeText={(text) => this._grabProjectName(text, i)}/>

                    </View>

                    <View style={styles.inputCont}>

                    <TextInput style={styles.singleInput} 
                               placeholder={'position ' + (i+1)}
                               onChangeText={(text) => this._grabPosition(text, i)}/>

                    </View>

                    <View style={styles.inputCont}>

                    <TextInput style={styles.singleInput} 
                               placeholder={'course ' + (i+1)}
                               onChangeText={(text) => this._grabCourse(text, i)}/>

                    </View>
                    </View>
            )
        }
        return(
                <View style={{flex: 1, marginBottom: 10}}>
                {rows}

                </View>
        )
    }

    render(){

        return(

            <View style={styles.projectContainer}>

                <View style={styles.titleCont}> 

                <Text style={styles.title}> Add at most 3 projects to improve you profile</Text>

                    </View>

                   {this._renderProjectForms()} 

                </View>

        )
    }
}
    const styles = StyleSheet.create({
        
            projectContainer: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white'
            },
            titleCont:{
                flex: 1,
                alignItems: "center",
                justifyContent: 'center',
                marginTop: 20,
            },
            title: {
                fontWeight: '600',
                fontSize: 16, 
                color: 'grey'
            },
            inputCont: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 10,
                marginBottom: 10,
            },
            projectCont: {
                flex: 1,
                paddingTop: 10,
                marginTop: 15,
                borderTopWidth: 0.7,
                borderColor: '#42D260'
            },
            singleInput: {
                borderWidth: 1,
                marginLeft: 10,
                marginRight: 10,
                padding: 5,
                borderRadius: 5,
                alignItems: 'center',
                width: width - 20,
                borderColor: 'grey', 
                color: '#42D260'  
            },

        })