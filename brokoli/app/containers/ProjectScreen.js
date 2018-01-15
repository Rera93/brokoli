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
import Detail from '../components/ProjectScreen/Create/Detail';
import Categories from '../components/ProjectScreen/Create/Categories';
import Positions from '../components/ProjectScreen/Create/Positions';
import People from '../components/ProjectScreen/People';
import AvailablePos from '../components/ProjectScreen/AvailablePos';
import ProjectExp from '../components/ProjectScreen/ProjectExp';
import JobExp from '../components/ProjectScreen/JobExp';
import Edu from '../components/ProjectScreen/Edu';
import Skills from '../components/ProjectScreen/Skills'

const ProjectStackNav = StackNavigator({
  Projects: { screen: Projects},
  Detail: {screen: Detail },
  Categories: {screen: Categories },
  Positions: {screen: Positions },
  AvailablePos: {screen: AvailablePos},
  People: {screen: People},
  ProjectExp: {screen: ProjectExp},
  JobExp: {screen: JobExp},
  Edu: {screen: Edu},
  Skills: {screen: Skills}

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

