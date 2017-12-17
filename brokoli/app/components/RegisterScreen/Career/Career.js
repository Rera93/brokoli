import React from 'react';
import { 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    Dimensions, 
    ScrollView, 
    KeyboardAvoidingView, 
    View } from 'react-native';

import Education from './Education'
import JobExp from './JobExp'
import ProjectExp from './ProjectExp'
import ViewContainer from '../../ViewContainer'

import Bar from 'react-native-bar-collapsible';

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

            <KeyboardAvoidingView behavior="padding">


            <View style={styles.career}>
                        
                {/* Create collapsable */}

                <View style={{height: 5}}/>


                <Bar title='Education'
                     titleStyle={{color: '#42D260'}}
                     collapsible={true}
                     showOnStart={true}
                     iconCollapsed='chevron-right'
                     iconOpened='chevron-down'
                     style={styles.bar}> 

                     <ScrollView>

                        <Education />

                        </ScrollView>

                </Bar>

                <View style={{height: 5}}/>

                <Bar title='Job Experience'
                     titleStyle={{color: '#42D260'}}
                     collapsible={true}
                     showOnStart={false}
                     iconCollapsed='chevron-right'
                     iconOpened='chevron-down'
                     style={styles.bar}> 

                     <ScrollView>

                    <JobExp />

                    </ScrollView>

                </Bar>

                <View style={{height: 5}}/>

                <Bar title='Project Experience'
                     titleStyle={{color: '#42D260'}}
                     collapsible={true}
                     showOnStart={false}
                     iconCollapsed='chevron-right'
                     iconOpened='chevron-down'
                     style={styles.bar}> 

                     <ScrollView>

                        <ProjectExp />

                     </ScrollView>

                </Bar>

                <TouchableOpacity style={styles.button} onPress={()=> navigate('Additional')}>

                <Text style={styles.btnText}> NEXT </Text>

                </TouchableOpacity>

                </View>


                <View style={{height: 80}}/> 
                </KeyboardAvoidingView>

        )
    }
}
const styles = StyleSheet.create({
    career: {
        alignItems: 'center',
        
    },
    bar: {
        
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#42D260',

    },
    button: {
    backgroundColor: '#42D260',
    marginBottom: 20,
    marginTop: 20,
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
