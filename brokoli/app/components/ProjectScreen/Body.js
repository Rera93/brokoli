'use strict'
import React from 'react';
import { StyleSheet, Text, TextInput, Button, Alert, ScrollView} from 'react-native';


class Body extends React.Component {

  constructor(props) {
       super(props);

       this.state = {projectNameText: '',
                      abstractText: '',
                      positionText: ''};

     }

    _createOnpress(projectName, abstract, position){

      

      fetch('https://brokoli.eu-gb.mybluemix.net/api/visitors', {  
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: projectName,
          description: abstract,
          positions: position,
        })
      })
    }

      render(){

        return(

            <ScrollView>
                <Text style={styles.textComponent}>
                  Project Name
                </Text>
                <TextInput
                  underlineColorAndroid='transparent'
                  style={styles.textInput}
                  onChangeText={(projectNameText) => this.setState({projectNameText})}
                  value={this.state.projectNameText}
                />

                <Text style={styles.textComponent}>
                  Abstract
                </Text>
                <TextInput
                  underlineColorAndroid='transparent'
                  multiline ={true}
                  style={styles.largeForm}
                  onChangeText={(abstractText) => this.setState({abstractText})}
                  value={this.state.abstractText}
                />

                <Text style={styles.textComponent}>
                  Position(s) available
                </Text>
                <TextInput
                  underlineColorAndroid='transparent'
                  multiline ={true}
                  style={styles.textInput}
                  onChangeText={(positionText) => this.setState({positionText})}
                  value={this.state.positionText}
                />
               <Button style={styles.textComponent}
                  onPress={() => this._createOnpress(this.state.projectNameText, this.state.abstractText, this.state.positionText) }
                  title="Create Project"
                  color="#841584"
                  accessibilityLabel="create project button"
                />

          </ScrollView>
          )
      }

}

const styles = StyleSheet.create({
  ViewContainer:{
    justifyContent: "flex-start",
    alignItems: "stretch"
  },
  textComponent:{
    fontSize: 20,
    marginTop:20,
  },
  largeForm: {
    borderWidth:1,
    justifyContent: 'flex-start',
    height:80,
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  textInput: {
    borderWidth:1,
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
  
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
              

export default Body