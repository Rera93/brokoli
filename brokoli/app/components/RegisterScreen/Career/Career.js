import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import Education from './Education'
import JobExp from './JobExp'
import ProjectExp from './ProjectExp'
import ViewContainer from '../../ViewContainer'

export default class Career extends React.Component {

    static navigationOptions = {
        title: 'Career'
      };
    
    
    render(){

        const {navigate}= this.props.navigation
        
        return(

            <ViewContainer>

                <Education />
                <JobExp />
                <ProjectExp />

                <TouchableOpacity onPress={()=> navigate('Additional')}>

                <Text> NEXT </Text>

                </TouchableOpacity>

                </ViewContainer>

        )
    }
}

