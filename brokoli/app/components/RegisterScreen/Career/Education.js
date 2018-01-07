import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Dimensions, View, TextInput } from 'react-native';

import ViewContainer from '../../ViewContainer'
import { Dropdown } from 'react-native-material-dropdown';
import { Picker } from 'react-native-picker-dropdown'
import Modal from 'react-native-modal'

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
            educations: [],
            flip: false,
            index: null,
            isModalDeleteVisible: false
            
        }
    }

    _grabSchoolName = (text) => {
        
                this.state.schoolName = text
                this.setState(function(prevState, props){
                  return {schoolName: prevState.schoolName}
                 });
                //console.log('School Name: ', this.state.schoolName)
                this.props.callbackFromParentSchool(this.state.schoolName);
            
                
    }

    _grabCity = (text) => {
                
                this.state.city = text
                this.setState(function(prevState, props){
                return {city: prevState.city}
                });
               // console.log('City: ', this.state.city)
                this.props.callbackFromParentCity(this.state.city);
                        
    }
    _grabCountry = (text) => {
        
                this.state.country = text
                this.setState(function(prevState, props){
                  return {country: prevState.country}
                 });
                //console.log('Country: ', this.state.country)
                this.props.callbackFromParentCountry(this.state.country);
                
    }
    _grabStartYear = (text) => {
        
                this.state.startYear = text
                this.setState(function(prevState, props){
                  return {startYear: prevState.startYear}
                 });
                //console.log('Start Year: ', this.state.startYear)
                this.props.callbackFromParentStartYY(this.state.startYear);
                
    }

    _grabEndYear = (text) => {
                
                this.state.endYear = text
                this.setState(function(prevState, props){
                return {endYear: prevState.endYear}
                });
                //console.log('End Year: ', this.state.endYear)
                this.props.callbackFromParentEndYY(this.state.endYear);
                        
    }
    _grabDegree = (text) => {
        
                this.state.degree = text
                this.setState(function(prevState, props){
                  return {degree: prevState.degree}
                 });
                //console.log('Degree: ', this.state.degree)
                this.props.callbackFromParentDegree(this.state.degree);
                
    }

    _grabSpecialization = (text) => {
                
                this.state.specialization = text
                this.setState(function(prevState, props){
                return {specialization: prevState.specialization}
                });
                //console.log('Specialization: ', this.state.specialization)
                this.props.callbackFromParentSpec(this.state.specialization);
                        
    }

    
    render(){
    
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
                        

                          

                        </View>

                        <View style={{flex: 1, marginTop: 20, alignItems: 'center'}}>

                            <Text> until </Text>

                        </View>

                        <View style={{flex: 1}}>

                            

                        </View>

                    </View>

                </View>

                <View style={styles.bottomEdu}>

                <View style={{flex: 2, marginLeft: 10}}>

                <Picker
                        selectedValue={this.state.experience}
                        onValueChange={(degree) => this._grabDegree(degree)}
                        mode="dropdown"
                        itemStyle = {{fontSize: 12}}
                        style={{
                        color: '#C7C7CD',
                        height: 40,
                        }}>
                        <Picker.Item label="Bachelor" value="Bachelor" />
                        <Picker.Item label="Master" value="Master" />
                        <Picker.Item label="Phd" value="Phd" />
                    </Picker>   

                </View>

                <View style={{flex: 3, marginLeft: 10, marginRight: 10}}>

                <Picker
                        selectedValue={this.state.experience}
                        onValueChange={(specialization) => this._grabSpecialization(specialization)}
                        mode="dropdown"
                        itemStyle = {{fontSize: 12}}
                        style={{
                        color: '#C7C7CD',
                        height: 40,
                        }}>
                        <Picker.Item label="Accountancy" value="Accountancy" />
                        <Picker.Item label="Advanced Study" value="Advanced Study" />
                        <Picker.Item label="Applied Finance" value="Applied Finance" />
                        <Picker.Item label="Applied Science" value="Applied Science" />
                        <Picker.Item label="Architecture" value="Architecture" />
                        <Picker.Item label="Bioinformatics" value="Bioinformatics" />
                        <Picker.Item label="Business Administration" value="Business Administration" />
                        <Picker.Item label="Business, Entrepreneurship and Technology" value="Business, Entrepreneurship and Technology" />
                        <Picker.Item label="Business" value="Business" />
                        <Picker.Item label="Business Engineering" value="Business Engineering" />
                        <Picker.Item label="Business Informatics" value="Business Informatics" />
                        <Picker.Item label="Chemistry" value="Chemistry" />
                        <Picker.Item label="Criminal Justice" value="Criminal Justice" />
                        <Picker.Item label="Computer Science" value="Computer Science" />
                        <Picker.Item label="Cyber Security" value="Cyber Security" />
                        <Picker.Item label="Data Science" value="Data Science" />
                        <Picker.Item label="Economics" value="Economics" />
                        <Picker.Item label="Engineering" value="Engineering" />
                        <Picker.Item label="Engineering Management" value="Engineering Management" />
                        <Picker.Item label="European Law" value="European Law" />
                        <Picker.Item label="Finance" value="Finance" />
                        <Picker.Item label="Financial Economics" value="Financial Economics" />
                        <Picker.Item label="Financial Engineering" value="Financial Engineering" />
                        <Picker.Item label="Fine Arts" value="Fine Arts" />
                        <Picker.Item label="Humanities" value="Humanities" />
                        <Picker.Item label="International Affairs" value="International Affairs" />
                        <Picker.Item label="Information Management" value="Information Management" />
                        <Picker.Item label="Information System Management" value="Information System Management" />
                        <Picker.Item label="Laws" value="Laws" />
                        <Picker.Item label="Landscape Architecture" value="Landscape Architecture" />
                        <Picker.Item label="Liberal Arts" value="Liberal Arts" />
                        <Picker.Item label="Management" value="Management" />
                        <Picker.Item label="Mathematical Finance" value="Mathematical Finance" />
                        <Picker.Item label="Mathematics" value="Mathematics" />
                        <Picker.Item label="Medical Science" value="Medical Science" />
                        <Picker.Item label="Medicine" value="Medicine" />
                        <Picker.Item label="Philosophy" value="Philosophy" />
                        <Picker.Item label="Physics" value="Physics" />
                        <Picker.Item label="Political Science" value="Political Science" />
                        <Picker.Item label="Psychology" value="Psychology" />
                        <Picker.Item label="Social Science" value="Social Science" />
                        <Picker.Item label="Urban Planning" value="Urban Planning" />
                    </Picker> 
                

                
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
