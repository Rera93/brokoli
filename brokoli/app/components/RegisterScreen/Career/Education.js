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
            startMonth: '',
            endMonth: '',
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

    _grabStartMM = (text) => {
        
                this.state.startMonth = text
                this.setState(function(prevState, props){
                  return {startMonth: prevState.startMonth}
                 });
                //console.log('Start Month: ', this.state.startMonth)
                this.props.callbackFromParentStartYY(this.state.startMonth);
                
    }

    
    _grabEndMM = (text) => {
        
                this.state.endMonth = text
                this.setState(function(prevState, props){
                  return {endMonth: prevState.endMonth}
                 });
                //console.log('End Month: ', this.state.endMonth)
                this.props.callbackFromParentStartYY(this.state.endMonth);
                
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

                <View style={styles.topEdu}>

                    <View style={styles.nameCont}>

                    <TextInput style={styles.name} 
                               placeholder="School name"
                               placeholderTextColor='#C7C7CD'
                               underlineColorAndroid='transparent'
                               onChangeText={(text) => this._grabSchoolName(text)}/>

                    </View>

                    <View style={styles.locationCont}>

                    <TextInput style={styles.location}
                               placeholder="City"
                               placeholderTextColor='#C7C7CD'
                               underlineColorAndroid='transparent'
                               onChangeText={(text) => this._grabCity(text)} />

                    <TextInput style={styles.location}
                               placeholder="Country"
                               placeholderTextColor='#C7C7CD'
                               underlineColorAndroid='transparent'
                               onChangeText={(text) => this._grabCountry(text)} />

                    </View>


                </View>


                
                <View style={[styles.middleEdu, {marginTop: 10, marginBottom: 10}]}>

                <View style={{flex: 1, marginLeft: 15}}>

                <Text style={styles.title}>Start Date</Text>

                    </View>

                    <View style={{flex: 1, marginLeft: 10}}>

                    <Text style={styles.title}>End Date</Text>
                        </View>

                    </View>

                <View style={styles.middleEdu}>

                    <View style={styles.yearCont} >

                        <View style={[styles.pickerCont, {flex: 1, justifyContent: 'center', marginRight: 10}]}> 


                        <Picker
                        selectedValue={this.state.startMonth}
                        onValueChange={(month) => this._grabStartMM(month)}
                        mode="dropdown"
                        itemStyle = {{fontSize: 12}}
                        style={{
                        color: '#C7C7CD',
                        height: 35,
                        }}>
                        <Picker.Item label="Jan" value="Jan" />
                        <Picker.Item label="Feb" value="Feb" />
                        <Picker.Item label="Mar" value="Mar" />
                        <Picker.Item label="Apr" value="Apr" />
                        <Picker.Item label="May" value="May" />
                        <Picker.Item label="Jun" value="Jun" />
                        <Picker.Item label="Jul" value="Jul" />
                        <Picker.Item label="Aug" value="Aug" />
                        <Picker.Item label="Sep" value="Sep" />
                        <Picker.Item label="Oct" value="Oct" />
                        <Picker.Item label="Nov" value="Nov" />
                        <Picker.Item label="Dec" value="Dec" />
                         </Picker> 
                        
                        </View>

                        <View style={[styles.pickerCont, {flex: 1, justifyContent: 'center', marginRight: 5}]}> 


                        <Picker
                        selectedValue={this.state.startYear}
                        onValueChange={(year) => this._grabStartYear(year)}
                        mode="dropdown"
                        itemStyle = {{fontSize: 12}}
                        style={{
                        color: '#C7C7CD',
                        height: 35,
                        }}>
                        <Picker.Item label="2018" value="2018" />
                        <Picker.Item label="2017" value="2017" />
                        <Picker.Item label="2016" value="2016" />
                        <Picker.Item label="2015" value="2015" />
                        <Picker.Item label="2014" value="2014" />
                        <Picker.Item label="2013" value="2013" />
                        <Picker.Item label="2012" value="2012" />
                        <Picker.Item label="2011" value="2011" />
                        <Picker.Item label="2010" value="2010" />
                        <Picker.Item label="2009" value="2009" />
                        <Picker.Item label="2008" value="2008" />
                        <Picker.Item label="2007" value="2007" />
                        <Picker.Item label="2006" value="2006" />
                        <Picker.Item label="2005" value="2005" />
                        <Picker.Item label="2004" value="2004" />
                        <Picker.Item label="2003" value="2003" />
                        <Picker.Item label="2002" value="2002" />
                        <Picker.Item label="2001" value="2001" />
                        <Picker.Item label="2000" value="2000" />
                        <Picker.Item label="1999" value="1999" />
                        <Picker.Item label="1998" value="1998" />
                        <Picker.Item label="1997" value="1997" />
                        <Picker.Item label="1996" value="1996" />
                        <Picker.Item label="1995" value="1995" />
                        <Picker.Item label="1994" value="1994" />
                        <Picker.Item label="1993" value="1993" />
                        <Picker.Item label="1992" value="1992" />
                        <Picker.Item label="1991" value="1991" />
                        <Picker.Item label="1990" value="1990" />
                         </Picker> 
                        
                        </View>

                        <View style={[styles.pickerCont, {flex: 1, justifyContent: 'center', marginLeft: 5}]}> 


                        <Picker
                        selectedValue={this.state.endMonth}
                        onValueChange={(month) => this._grabEndMM(month)}
                        mode="dropdown"
                        itemStyle = {{fontSize: 12}}
                        style={{
                        color: '#C7C7CD',
                        height: 35,
                        }}>
                        <Picker.Item label="Jan" value="Jan" />
                        <Picker.Item label="Feb" value="Feb" />
                        <Picker.Item label="Mar" value="Mar" />
                        <Picker.Item label="Apr" value="Apr" />
                        <Picker.Item label="May" value="May" />
                        <Picker.Item label="Jun" value="Jun" />
                        <Picker.Item label="Jul" value="Jul" />
                        <Picker.Item label="Aug" value="Aug" />
                        <Picker.Item label="Sep" value="Sep" />
                        <Picker.Item label="Oct" value="Oct" />
                        <Picker.Item label="Nov" value="Nov" />
                        <Picker.Item label="Dec" value="Dec" />
                         </Picker> 
                        
                        </View>

                        <View style={[styles.pickerCont, {flex: 1, justifyContent: 'center', marginLeft: 10}]}> 


                        <Picker
                        selectedValue={this.state.endYear}
                        onValueChange={(year) => this._grabEndYear(year)}
                        mode="dropdown"
                        itemStyle = {{fontSize: 12}}
                        style={{
                        color: '#C7C7CD',
                        height: 35,
                        }}>
                        <Picker.Item label="2018" value="2018" />
                        <Picker.Item label="2017" value="2017" />
                        <Picker.Item label="2016" value="2016" />
                        <Picker.Item label="2015" value="2015" />
                        <Picker.Item label="2014" value="2014" />
                        <Picker.Item label="2013" value="2013" />
                        <Picker.Item label="2012" value="2012" />
                        <Picker.Item label="2011" value="2011" />
                        <Picker.Item label="2010" value="2010" />
                        <Picker.Item label="2009" value="2009" />
                        <Picker.Item label="2008" value="2008" />
                        <Picker.Item label="2007" value="2007" />
                        <Picker.Item label="2006" value="2006" />
                        <Picker.Item label="2005" value="2005" />
                        <Picker.Item label="2004" value="2004" />
                        <Picker.Item label="2003" value="2003" />
                        <Picker.Item label="2002" value="2002" />
                        <Picker.Item label="2001" value="2001" />
                        <Picker.Item label="2000" value="2000" />
                        <Picker.Item label="1999" value="1999" />
                        <Picker.Item label="1998" value="1998" />
                        <Picker.Item label="1997" value="1997" />
                        <Picker.Item label="1996" value="1996" />
                        <Picker.Item label="1995" value="1995" />
                        <Picker.Item label="1994" value="1994" />
                        <Picker.Item label="1993" value="1993" />
                        <Picker.Item label="1992" value="1992" />
                        <Picker.Item label="1991" value="1991" />
                        <Picker.Item label="1990" value="1990" />

                         </Picker> 
                        
                        </View>

                    </View>

                </View>

                <View style={[styles.bottomEdu, {marginTop: 10}]}>

                <View style={{flex: 2, marginLeft: 15}}>

                <Text style={styles.title}>Degree</Text>

                    </View>

                    <View style={{flex: 3, marginLeft: 15, marginRight: 10}}>

                    <Text style={styles.title}>Specialization</Text>
                        </View>

                    </View>

                <View style={styles.bottomEdu}>



                <View style={[styles.pickerCont, {flex: 2, marginLeft: 10}]}>

                <Picker
                        selectedValue={this.state.degree}
                        onValueChange={(degree) => this._grabDegree(degree)}
                        mode="dropdown"
                        itemStyle = {{fontSize: 12}}
                        style={{
                        color: '#C7C7CD',
                        height: 35,
                        }}>
                        <Picker.Item label="Bachelor" value="Bachelor" />
                        <Picker.Item label="Master" value="Master" />
                        <Picker.Item label="Phd" value="Phd" />
                    </Picker>   

                </View>

                <View style={[styles.pickerCont, {flex: 3, marginLeft: 10, marginRight: 10}]}>
                
                <Picker
                        selectedValue={this.state.specialization}
                        onValueChange={(specialization) => this._grabSpecialization(specialization)}
                        mode="dropdown"
                        itemStyle = {{fontSize: 12}}
                        style={{
                        color: '#C7C7CD',
                        height: 35,
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

        backgroundColor: '#F8F9FB',
        color: '#C7C7CD',
        borderWidth: 2,
        marginLeft: 10,
        marginRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: width - 20,
        borderColor: 'grey',
        fontWeight: '400',
        fontSize: 16,
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
        justifyContent: 'center',
        marginBottom: 5,

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
        backgroundColor: '#F8F9FB',
        borderWidth: 2,
        marginLeft: 10,
        marginRight: 10,
        padding: 5,
        borderRadius: 5, 
        borderColor: 'grey',
        width: width/2 - 20, 
        color: '#C7C7CD',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        fontWeight: '400',
        fontSize: 16,
    },
    bottomEdu:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
    pickerCont: {
        borderWidth: 2, 
        borderColor: 'grey',
        backgroundColor: '#F8F9FB',
        borderRadius: 5,
    },
    title:{
        fontSize: 17,
        fontWeight: '500',
        color: 'grey'
    }


})
