/*
  Created by Brigel Pineti

  Project Screen will allow users to create a project abstract which will be added to the project queue
  of the Brokoli Screen.
*/

'use strict'
import React from 'react';
import { StyleSheet, Text, TextInput, Button, Alert, ScrollView, Image} from 'react-native';
import {StackNavigator} from 'react-navigation'
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';

import Projects from '../components/ProjectScreen/Projects';
import Create from '../components/ProjectScreen/Create';


const ProjectStackNav = StackNavigator({
  Projects: { screen: Projects},
  Create: {screen: Create }
},{
    transitionConfig: getSlideFromRightTransition
});


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

              
           <ProjectStackNav />

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

