/*
  Created by Brigel Pineti

  Project Screen will allow users to create a project abstract which will be added to the project queue
  of the Brokoli Screen.
*/

'use strict'
import React from 'react';
import { StyleSheet, Text, TextInput, Button, Alert, ScrollView} from 'react-native';



import Body from '../components/ProjectScreen/Body';
import Header from '../components/ProjectScreen/Header';



class ProjectScreen extends React.Component {
     


    render(){
        return(


              
           <ScrollView>
               <Header/>
                <Body />
            
            </ScrollView>

        )
    }
}

export default ProjectScreen

