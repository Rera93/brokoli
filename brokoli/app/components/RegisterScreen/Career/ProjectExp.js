import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View, Dimensions } from 'react-native';


import ViewContainer from '../../ViewContainer'

const width = Dimensions.get("window").width

const nrOfProjects = 3

export default class ProjectExp extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            projectName : '',
            position : '',
            course: '',
            projects: [],
            flip: false,
            index: null,
            isModalDeleteVisible: false
        }
    }

    _grabProjectName = (text) => {
        
                this.state.projectName = text
                this.setState(function(prevState, props){
                  return {projectName: prevState.projectName}
                 });
                console.log('Project Name: ', this.state.projectName)

              //  this.props.callbackFromProjectNames(this.state.projectName);
                
    }

    _grabPosition = (text) => {
                
                this.state.position= text
                this.setState(function(prevState, props){
                return {position: prevState.position}
                });
                console.log('Position: ', this.state.position)

              //  this.props.callbackFromProjectPositions(this.state.position);
                        
    }
    _grabCourse = (text) => {
        
                this.state.course = text
                this.setState(function(prevState, props){
                  return {course: prevState.course}
                 });
                console.log('Course: ', this.state.course)

                //this.props.callbackFromCourses(this.state.course);
                
    }


    render(){

        return(

            <View style={styles.projectContainer}>

                <View style={{flexDirection: 'row', padding: 10}}>

                <View style={{flex: 6}}> 

                <View style={styles.inputCont}>  

                <TextInput style={styles.singleInput} 
                            placeholder='Project Name '
                            onChangeText={(text) => this._grabProjectName(text)}/>

                </View>

                <View style={styles.inputCont}>

                <TextInput style={styles.singleInput} 
                            placeholder='Position'
                            onChangeText={(text) => this._grabPosition(text)}/>

                </View>

                <View style={styles.inputCont}>

                <TextInput style={styles.singleInput} 
                            placeholder={'Course'}
                            onChangeText={(text) => this._grabCourse(text)}/>

                </View>

                </View>

                <TouchableOpacity  disabled={!this.state.flip}
                    style={[styles.btnContainer, {backgroundColor: this.state.flip ? '#42D260' : 'white' }]}
                    onPress={() => this._onAdd()}>
                      <Text style={[styles.btnText,{color: this.state.flip ? 'white' : '#42D260'}]}> ADD </Text>
                    </TouchableOpacity>

                </View>


                
          </View>

        )
    }
}
    const styles = StyleSheet.create({
        
            projectContainer: {
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
            },
            inputCont: {
                flex: 1,
                marginTop: 10,
                marginBottom: 10,
                borderWidth: 2,
                marginRight: 10,
                padding: 5,
                borderRadius: 5,
                borderColor: 'grey', 
            },
            singleInput: {
                color: '#C7C7CD',
                fontSize: 17,
                fontWeight: '400',
                paddingLeft: 5, 
            },
            btnContainer: {
                flex: 1,
                borderWidth: 2,
                borderColor: '#42D260',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
                marginTop: 10,
                marginBottom: 10,
            },
            btnText: {
                fontSize: 17,
                fontWeight: '600',
            },

        })