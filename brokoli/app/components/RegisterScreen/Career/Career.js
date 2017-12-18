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

      constructor(props){
          super(props)

          this.state = {
            schoolName: '',
            city: '',
            country: '',
            startYear: '',
            endYear: '',
            degree: '',
            specialization: '',
          }
      }

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

                     <ScrollView showsVerticalScrollIndicator={false}>

                        <Education callbackFromParentSchool = {this.callbackSchoolName}
                                   callbackFromParentCity = {this.callbackCity}
                                   callbackFromParentCountry = {this.callbackCountry}
                                   callbackFromParentStartYY = {this.callbackStartYY}
                                   callbackFromParentEndYY = {this.callbackEndYY}
                                   callbackFromParentDegree = {this.callbackDegree}
                                   callbackFromParentSpec = {this.callbackSpec} />

                        </ScrollView>

                </Bar>

                <View style={{height: 5}}/>

                <Bar title='Job Experience'
                     titleStyle={{color: '#42D260',fontWeight: '600', fontSize: 16}}
                     collapsible={true}
                     showOnStart={false}
                     iconCollapsed='chevron-right'
                     iconOpened='chevron-down'
                     style={styles.bar}> 

                     <ScrollView showsVerticalScrollIndicator={false}>

                    <JobExp callbackFromParent = {this.callbackJobExp}/>

                    </ScrollView>

                </Bar>

                <View style={{height: 5}}/>

                <Bar title='Project Experience'
                     titleStyle={{color: '#42D260', fontWeight: '600', fontSize: 16}}
                     collapsible={true}
                     showOnStart={false}
                     iconCollapsed='chevron-right'
                     iconOpened='chevron-down'
                     style={styles.bar}> 

                     <ScrollView showsVerticalScrollIndicator={false}>

                        <ProjectExp callbackFromParent = {this.callbackProjectExp} />

                     </ScrollView>

                </Bar>

                <TouchableOpacity style={styles.button} onPress={()=> navigate('Additional')}>

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
