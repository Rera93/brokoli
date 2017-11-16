import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import Education from './Education'
import JobExp from './JobExp'
import ProjectExp from './ProjectExp'
import ViewContainer from '../ViewContainer'

export default class Career extends React.Component {

    
    render(){
        return(

            <ViewContainer>

                <Education />
                <JobExp />
                <ProjectExp />

                </ViewContainer>

        )
    }
}

