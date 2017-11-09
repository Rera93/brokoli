/*
  Created by Brigel Pineti

  Project Screen will allow users to create a project abstract which will be added to the project queue
  of the Brokoli Screen.
*/

'use strict'
import React from 'react';
import { StyleSheet, Text, TextInput, Button, Alert } from 'react-native';

import ViewContainer from '../components/ViewContainer';



export default class ProjectScreen extends React.Component {
     constructor(props) {
       super(props);

       this.state = {projectNameText: '',
                      abstractText: '',
                      positionText: ''};

     }

    _createOnpress(projectName, abstract, position){
      Alert.alert('Project created!',
                  projectName+'\n'
                  +abstract+'\n'
                  +position);
    }

    render(){
        return(
            <ViewContainer style={styles.ViewContainer}>
              
                <Text style={styles.topComponent}>
                  Project Name
                </Text>
                <TextInput
                  style={styles.textInput}
                  onChangeText={(projectNameText) => this.setState({projectNameText})}
                  value={this.state.projectNameText}
                />

                <Text>
                  Abstract
                </Text>
                <TextInput
                  multiline ={true}
                  style={styles.largeForm}
                  onChangeText={(abstractText) => this.setState({abstractText})}
                  value={this.state.abstractText}
                />

                <Text>
                  Position(s) available
                </Text>
                <TextInput
                  multiline ={true}
                  style={styles.textInput}
                  onChangeText={(positionText) => this.setState({positionText})}
                  value={this.state.positionText}
                />
               <Button
                  onPress={() => this._createOnpress(this.state.projectNameText, this.state.abstractText, this.state.positionText) }
                  title="Create Project"
                  color="#841584"
                  accessibilityLabel="create project button"
                />

            </ViewContainer>

        )
    }
}



const styles = StyleSheet.create({
  ViewContainer:{
    justifyContent: "flex-start",
    alignItems: "stretch"
  },
  topComponent:{
    marginTop:30,
  },
  largeForm: {
    justifyContent: 'flex-start',
    height:80,
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  textInput: {
    justifyContent: 'center',
    height:40,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});