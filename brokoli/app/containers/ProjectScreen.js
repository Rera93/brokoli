/*
  Created by Brigel Pineti

  Project Screen will allow users to create a project abstract which will be added to the project queue
  of the Brokoli Screen.
*/

'use strict'
import React from 'react';
import { StyleSheet, Text, TextInput, Button, Alert, ScrollView, Image} from 'react-native';



import Body from '../components/ProjectScreen/Body';
import Header from '../components/ProjectScreen/Header';



class ProjectScreen extends React.Component {

    static navigationOptions = {
        tabBarLabel: 'Project',
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../../img/icons/project.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      };

     


    render(){
        return(


              
           <ScrollView>
               <Header/>
                <Body />
            
            </ScrollView>

        )
    }
}

const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  });

export default ProjectScreen

