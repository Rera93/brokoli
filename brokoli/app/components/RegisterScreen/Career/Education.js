import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Dimensions, View, TextInput } from 'react-native';

import ViewContainer from '../../ViewContainer'
import { Dropdown } from 'react-native-material-dropdown';

const width = Dimensions.get('window').width

export default class Education extends React.Component {

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

    _grabSchoolName = (text) => {
        
                this.state.schoolName = text
                this.setState(function(prevState, props){
                  return {schoolName: prevState.schoolName}
                 });
                console.log('School Name: ', this.state.schoolName)
                
    }

    _grabCity = (text) => {
                
                this.state.city = text
                this.setState(function(prevState, props){
                return {city: prevState.city}
                });
                console.log('City: ', this.state.city)
                        
    }
    _grabCountry = (text) => {
        
                this.state.country = text
                this.setState(function(prevState, props){
                  return {country: prevState.country}
                 });
                console.log('Country: ', this.state.country)
                
    }
    _grabStartYear = (text) => {
        
                this.state.startYear = text
                this.setState(function(prevState, props){
                  return {startYear: prevState.startYear}
                 });
                console.log('Start Year: ', this.state.startYear)
                
    }

    _grabEndYear = (text) => {
                
                this.state.endYear = text
                this.setState(function(prevState, props){
                return {endYear: prevState.endYear}
                });
                console.log('End Year: ', this.state.endYear)
                        
    }
    _grabDegree = (text) => {
        
                this.state.degree = text
                this.setState(function(prevState, props){
                  return {degree: prevState.degree}
                 });
                console.log('Degree: ', this.state.degree)
                
    }

    _grabSpecialization = (text) => {
                
                this.state.specialization = text
                this.setState(function(prevState, props){
                return {specialization: prevState.specialization}
                });
                console.log('Specialization: ', this.state.specialization)
                        
    }

    
    render(){


        let degreeData = [{
            value: 'Phd',
          }, {
            value: 'Master',
          }, {
            value: 'Bachelor',
          }];

        let specializationData = [{
            value: 'Computer Science',
          }, {
            value: 'Information Science',
        }];

        let yyData = [{
            value: 2017,
        },{
            value: 2016,
        },{
            value: 2015,
        }, {
            value: 2014,
        },{
            value: 2013,
        },{
            value: 2012,
        },{
            value: 2011,
        },{
            value: 2010,
        },{
            value: 2009,
        }, {
            value: 2008,
        },{
            value: 2007,
        },{
            value: 2006,
        }, {
            value: 2005,
        },{
            value: 2004,
        },{
            value: 2003,
        }, {
            value: 2002,
        },{
            value: 2001,
        },{
            value: 2000,
        }, {
            value: 1999,
        },{
            value: 1998,
        }, {
            value: 1997,
        },{
            value: 1996,
        },{
            value: 1995,
        }, {
            value: 1994,
        },{
            value: 1993,
        },{
            value: 1992,
        }, {
            value: 1991,
        },{
            value: 1990,
        }];

        
    
        return(

            <ViewContainer style={styles.educationCont}>

                <View style={styles.eduTitleCont}>

                    <Text style={styles.eduTitle}> Most recent education </Text>
                    
                </View>

                <View style={styles.topEdu}>

                    <View style={styles.nameCont}>

                    <TextInput style={styles.name} 
                               placeholder="name of school"
                               onChangeText={(text) => this._grabSchoolName(text)}/>

                    </View>

                    <View style={styles.locationCont}>

                    <TextInput style={styles.location}
                               placeholder="city"
                               onChangeText={(text) => this._grabCity(text)} />

                    <TextInput style={styles.location}
                               placeholder="country"
                               onChangeText={(text) => this._grabCountry(text)} />

                    </View>


                </View>

                <View style={styles.middleEdu}>

                    <View style={styles.yearCont} >

                        <View style={{flex: 1, justifyContent: 'center'}}> 

                            <Dropdown
                                label='Starting Year'
                                onChangeText={(text) => this._grabStartYear(text)}
                                data={yyData}/> 

                        </View>

                        <View style={{flex: 1, marginTop: 20, alignItems: 'center'}}>

                            <Text> until </Text>

                        </View>

                        <View style={{flex: 1}}>

                            <Dropdown
                                label='Ending Year'
                                onChangeText={(text) => this._grabEndYear(text)}
                                data={yyData}/> 

                        </View>

                    </View>

                </View>

                <View style={styles.bottomEdu}>

                <View style={{flex: 2, marginLeft: 10}}>

                <Dropdown
                    label='Degree'
                    onChangeText={(text) => this._grabDegree(text)}
                    data={degreeData}/>    

                </View>

                <View style={{flex: 3, marginLeft: 10, marginRight: 10}}>

                <Dropdown
                    label='Specialization'
                    onChangeText={(text) => this._grabSpecialization(text)}
                    data={specializationData}/>   

                </View>

                </View>

                </ViewContainer>

        )
    }
}

const styles = StyleSheet.create({

    educationCont: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        marginTop: 10,
    },
    eduTitleCont: {
        padding: 15,
    },
    eduTitle: {
        fontSize: 16, 
        fontWeight: '600',
        color: 'grey'
    },
    topEdu: {
        flex: 1,
        alignItems: 'center'

    },
    nameCont: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    name: {
        borderWidth: 1,
        marginLeft: 10,
        marginRight: 10,
        padding: 5,
        borderRadius: 5,
        alignItems: 'center',
        width: width - 20,
        borderColor: 'grey'   
    },
    locationCont:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    middleEdu: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'

    },
    yearCont: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    location: {
        borderWidth: 1,
        marginLeft: 10,
        marginRight: 10,
        padding: 5,
        borderRadius: 5, 
        borderColor: 'grey',
        width: width/2 - 20  
    },
    bottomEdu:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    }


})
