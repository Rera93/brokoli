import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';

import Education from './Education'
import JobExp from './JobExp'
import ProjectExp from './ProjectExp'
import ViewContainer from '../../ViewContainer'

const width = Dimensions.get('window').width

export default class Career extends React.Component {

    static navigationOptions = {
        title: 'Career',
        headerStyle: { backgroundColor: '#42D260', marginTop: 24 },
        headerTitleStyle: { color: 'white' },
      };
    
    
    render(){

        const {navigate}= this.props.navigation
        
        return(

            <ViewContainer style={styles.career}>

                <Education />
                <JobExp />
                <ProjectExp />

                <TouchableOpacity style={styles.button} onPress={()=> navigate('Additional')}>

                <Text style={styles.btnText}> NEXT </Text>

                </TouchableOpacity>

                </ViewContainer>

        )
    }
}
const styles = StyleSheet.create({
    career: {
        backgroundColor: 'white'
    },
    button: {
    backgroundColor: '#42D260',
    marginBottom: 20,
    borderRadius: 10,
    width: width - 100,
    alignItems: 'center'
    },
    btnText: {
    color : 'white',
    padding: 10,
    fontWeight: 'bold'
}
})
