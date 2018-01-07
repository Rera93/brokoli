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
            schoolName: '',
            city: '',
            country: '',
            startYear: '',
            endYear: '',
            degree: '',
            specialization: '',
            //Job states
            companies : Array(nrOfJobs).fill(''),
            jobPositions : Array(nrOfJobs).fill(''),
            jobCities: Array(nrOfJobs).fill(''),
            jobCountries: Array(nrOfJobs).fill(''),
            jobStartMonths: Array(nrOfJobs).fill(''),
            jobStartYears: Array(nrOfJobs).fill(''),
            jobEndMonths: Array(nrOfJobs).fill(''),
            jobEndYears: Array(nrOfJobs).fill(''),
            //Project states
            projectNames : Array(nrOfProjects).fill(''),
            projectPositions : Array(nrOfProjects).fill(''),
            courses: Array(nrOfProjects).fill(''),

          }
      }

      // Callbacks for Education.

      callbackSchoolName = (dataSchoolName) => {
        
        this.state.schoolName = dataSchoolName
        this.setState(function(prevState, props){
            return {schoolName: prevState.schoolName}
         });
         console.log("SchoolName: ", this.state.schoolName)

        }

        callbackCity = (dataCity) => {

            this.state.city = dataCity
            this.setState(function(prevState, props){
            return {city: prevState.city}
            });
            console.log('City: ', this.state.city)
        }

        callbackCountry = (dataCountry) => {

            this.state.country = dataCountry
            this.setState(function(prevState, props){
              return {country: prevState.country}
             });
            console.log('Country: ', this.state.country)

        }

        callbackStartYY = (dataStartYear) => {

            this.state.startYear = dataStartYear
            this.setState(function(prevState, props){
              return {startYear: prevState.startYear}
             });
            console.log('Start Year: ', this.state.startYear)

        }

        callbackEndYY = (dataEndYear) => {

            this.state.endYear = dataEndYear
            this.setState(function(prevState, props){
            return {endYear: prevState.endYear}
            });
            console.log('End Year: ', this.state.endYear)

        }

        callbackDegree = (dataDegree) => {
 
         this.state.degree = dataDegree
         this.setState(function(prevState, props){
           return {degree: prevState.degree}
          });
         console.log('Degree: ', this.state.degree)

        }

        callbackSpec = (dataSpecialization) => {

         this.state.specialization = dataSpecialization
         this.setState(function(prevState, props){
         return {specialization: prevState.specialization}
         });
         console.log('Specialization: ', this.state.specialization)

        }

        // Call backs for Jobs 

        callbackCompanies = (dataCompanies) => {

            this.state.companies = dataCompanies
            this.setState(function(prevState, props){
            return {companies: prevState.companies}
            });
            console.log('Companies: ', this.state.companies)

        }

        callbackJobPositions = (dataPositions) => {

            this.state.jobPositions = dataPositions
            this.setState(function(prevState, props){
            return {jobPositions: prevState.jobPositions}
            });
            console.log('Job Positions: ', this.state.jobPositions)

        }

        callbackJobCities = (dataCities) => {
            
                        this.state.jobCities = dataCities
                        this.setState(function(prevState, props){
                        return {jobCities: prevState.jobCities}
                        });
                        console.log('Job Cities: ', this.state.jobCities)
            
        }

        callbackJobCountries = (dataCountries) => {
            
                        this.state.jobCountries = dataCountries
                        this.setState(function(prevState, props){
                        return {jobCountries: prevState.jobCountries}
                        });
                        console.log('Job Countries: ', this.state.jobCountries)
            
        }

        callbackJobStartMM = (dataStartMM) => {
            
                        this.state.jobStartMonths = dataStartMM
                        this.setState(function(prevState, props){
                        return {jobStartMonths: prevState.jobStartMonths}
                        });
                        console.log('Job Start MM: ', this.state.jobStartMonths)
            
        }

        callbackJobStartYY = (dataStartYY) => {
            
                        this.state.jobStartYears = dataStartYY
                        this.setState(function(prevState, props){
                        return {jobStartYears: prevState.jobStartYears}
                        });
                        console.log('Job Start YY: ', this.state.jobStartYears)
            
        }

        callbackJobEndMM = (dataEndMM) => {
            
                        this.state.jobEndMonths = dataEndMM
                        this.setState(function(prevState, props){
                        return {jobEndMonths: prevState.jobEndMonths}
                        });
                        console.log('Job End MM: ', this.state.jobEndMonths)
            
        }

        callbackJobEndYY = (dataEndYY) => {
            
                        this.state.jobEndYears = dataEndYY
                        this.setState(function(prevState, props){
                        return {jobEndYears: prevState.jobEndYears}
                        });
                        console.log('Job End YY: ', this.state.jobEndYears)
            
        }

        //Callbacks for Projects

        callbackProjects = (dataProjectNames) => {
            
                        this.state.projectNames = dataProjectNames
                        this.setState(function(prevState, props){
                        return {projectNames: prevState.projectNames}
                        });
                        console.log('Project Names: ', this.state.projectNames)
            
        }

        callbackProjectPositions = (dataPositions) => {
            
                        this.state.projectPositions = dataPositions
                        this.setState(function(prevState, props){
                        return {projectPositions: prevState.projectPositions}
                        });
                        console.log('Project Positions: ', this.state.projectPositions)
            
        }

        callbackCourses = (dataCourses) => {
            
                        this.state.courses = dataCourses
                        this.setState(function(prevState, props){
                        return {courses: prevState.courses}
                        });
                        console.log('Courses: ', this.state.courses)
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
                        
                {/* Create collapsable */}

                <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{height: 5}}/>


                <Bar title='Education'
                     titleStyle={{color: '#42D260', fontWeight: '600', fontSize: 16}}
                     collapsible={true}
                     showOnStart={true}
                     iconCollapsed='chevron-right'
                     iconOpened='chevron-down'
                     style={styles.bar}> 


                        <Education callbackFromParentSchool = {this.callbackSchoolName}
                                   callbackFromParentCity = {this.callbackCity}
                                   callbackFromParentCountry = {this.callbackCountry}
                                   callbackFromParentStartYY = {this.callbackStartYY}
                                   callbackFromParentEndYY = {this.callbackEndYY}
                                   callbackFromParentDegree = {this.callbackDegree}
                                   callbackFromParentSpec = {this.callbackSpec} />


                </Bar>

                <View style={{height: 5}}/>

                <Bar title='Job Experience'
                     titleStyle={{color: '#42D260',fontWeight: '600', fontSize: 16}}
                     collapsible={true}
                     showOnStart={false}
                     iconCollapsed='chevron-right'
                     iconOpened='chevron-down'
                     style={styles.bar}> 

                    <JobExp callbackFromJobCompanies = {this.callbackCompanies}
                            callbackFromJobPositions = {this.callbackJobPositions}
                            callbackFromJobCities = {this.callbackJobCities}
                            callbackFromJobCountries = {this.callbackJobCountries}
                            callbackFromJobStartMM = {this.callbackJobStartMM}
                            callbackFromJobStartYY = {this.callbackJobStartYY}
                            callbackFromJobEndMM = {this.callbackJobEndMM}
                            callbackFromJobEndYY = {this.callbackJobEndYY}/>

                </Bar>

                <View style={{height: 5}}/>

                <Bar title='Project Experience'
                     titleStyle={{color: '#42D260', fontWeight: '600', fontSize: 16}}
                     collapsible={true}
                     showOnStart={false}
                     iconCollapsed='chevron-right'
                     iconOpened='chevron-down'
                     style={styles.bar}> 


                        <ProjectExp callbackFromProjectNames = {this.callbackProjects}
                                    callbackFromProjectPositions = {this.callbackProjectPositions}
                                       callbackFromCourses = {this.callbackCourses} />

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
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#42D260',

    },
    button: {
    backgroundColor: '#42D260',
    marginBottom: 20,
    marginTop: 20,
    borderRadius: 10,
    width: width - 300,
    alignItems: 'center'
    },
    btnText: {
    color : 'white',
    padding: 10,
    fontWeight: 'bold'
}
})
