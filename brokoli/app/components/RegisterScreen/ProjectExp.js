import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

import ViewContainer from '../ViewContainer'

export default class ProjectExp extends React.Component {

    static navigationOptions = {
        title: 'Project Experience'
    };
    
    render(){
        const { navigate } = this.props.navigation;
        return(

            <ViewContainer>

              <Text> Hello, Project Experience. </Text>
              <TouchableOpacity onPress={()=> navigate('JobExp')}>

                <Text> NEXT </Text>

                  </TouchableOpacity>

                </ViewContainer>

        )
    }
}

