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
const nrOfJobs = 3
const nrOfProjects = 3

export default class Career extends React.Component {

    static navigationOptions = {
        title: 'Career',
        headerStyle: { backgroundColor: '#42D260', marginTop: 24 },
        headerTitleStyle: { color: 'white' },
      };

      constructor(props){
          super(props)

          this.state = {
            //Education state
            educations : [],
            //Job state
            jobs: [],
            //Project state
            projects : []

          }
      }

      // Callback for Education.

      callbackEducation = (dataEducations) => {
        
        this.state.educations = dataEducations
        this.setState(function(prevState, props){
            return {educations: prevState.educations}
         });
         console.log("Educations: ", this.state.educations)

        }

        

        // Callback for Jobs 

        callbackJobs = (dataJobs) => {

            this.state.jobs = dataJobs
            this.setState(function(prevState, props){
            return {jobs: prevState.jobs}
            });
            console.log('Jobs: ', this.state.jobs)

        }

        //Callback for Projects

        callbackProjects = (dataProjects) => {
            
                        this.state.projects = dataProjects
                        this.setState(function(prevState, props){
                        return {projects: prevState.projects}
                        });
                        console.log('Projects: ', this.state.projects)
            
        }

        componentDidMount() {
        //Alert.alert("Props", this.props.navigation.state.params.date + this.props.navigation.state.params.gender) ;
       this.setState({firstName : this.props.navigation.state.params.firstName,
                    lastName: this.props.navigation.state.params.lastName,
                    dateOfBirth: this.props.navigation.state.params.dateOfBirth,
                    gender: this.props.navigation.state.params.gender,
                    city: this.props.navigation.state.params.city,
                    country: this.props.navigation.state.params.country,
                    username: this.props.navigation.state.params.username,
                    email: this.props.navigation.state.params.email,
                    password: this.props.navigation.state.params.password,
                    passToDb: this.props.navigation.state.params.categories})
    }




    render(){

        const {navigate}= this.props.navigation
        
        return(

            <KeyboardAvoidingView behavior="padding">     

                <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{height: 5}}/>


                <Bar title='Education'
                     titleStyle={{color: '#42D260', fontWeight: '600', fontSize: 16}}
                     collapsible={true}
                     showOnStart={true}
                     iconCollapsed='chevron-right'
                     iconOpened='chevron-down'
                     style={styles.bar}> 


                        <Education callbackFromParentEducation = {this.callbackEducation} />


                </Bar>

                <View style={{height: 5}}/>

                <Bar title='Job Experience'
                     titleStyle={{color: '#42D260',fontWeight: '600', fontSize: 16}}
                     collapsible={true}
                     showOnStart={false}
                     iconCollapsed='chevron-right'
                     iconOpened='chevron-down'
                     style={styles.bar}> 

                    <JobExp callbackFromParentJobs = {this.callbackJobs}/>

                </Bar>

                <View style={{height: 5}}/>

                <Bar title='Project Experience'
                     titleStyle={{color: '#42D260', fontWeight: '600', fontSize: 16}}
                     collapsible={true}
                     showOnStart={false}
                     iconCollapsed='chevron-right'
                     iconOpened='chevron-down'
                     style={styles.bar}> 


                        <ProjectExp callbackFromParentProjects = {this.callbackProjects} />

                </Bar>

                <TouchableOpacity style={styles.button} onPress={()=> navigate('Additional', {finalObj: this.state })}>

                <Text style={styles.btnText}> NEXT </Text>

                </TouchableOpacity>

                </ScrollView>

                


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
        borderWidth: 1,
        borderColor: '#42D260',

    },
    button: {
    backgroundColor: '#42D260',
    marginBottom: 20,
    marginTop: 20,
    borderRadius: 10,
    width: width - 300,
    marginLeft: width/3,
    alignItems: 'center'
    },
    btnText: {
    color : 'white',
    padding: 10,
    fontWeight: 'bold'
}
})
