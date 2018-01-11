import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions, TextInput } from 'react-native';
import { Picker } from 'react-native-picker-dropdown'
import Modal from 'react-native-modal'

const width = Dimensions.get("window").width

var tempArr = []

export default class JobExp extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            company: '',
            position : '',
            city: '',
            country: '',
            startMonth: 'Mon',
            startYear: '2018',
            endMonth: 'Mon',
            endYear: '2018',
        }
    }

    _grabCompany = (text) => {
        
                this.state.company = text
                this.setState(function(prevState, props){
                  return {company: prevState.company}
                 });
                console.log('Company: ', this.state.company)
                
    }

    _grabPosition = (text) => {
                
                this.state.position = text
                this.setState(function(prevState, props){
                return {position: prevState.position}
                });
                console.log('Position: ', this.state.position)
                        
    }
    _grabCity = (text) => {
        
                this.state.city= text
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
    
    _grabStartMonth = (text) => {
        
        this.state.startMonth = text
        this.setState(function(prevState, props){
        return {startMonth: prevState.startMonth}
        });
       console.log('Start Month: ', this.state.startMonth) 

    }    

    _grabEndMonth = (text) => {
        
        this.state.endMonth = text
        this.setState(function(prevState, props){
        return {endMonth: prevState.endMonth}
        });
        console.log('End Month: ', this.state.endMonth) 
        
    }
    
    _grabStartYear = (text) => {
        
        this.state.startYear = text
        this.setState(function(prevState, props){
        return {startYear: prevState.startYear}
        });
        console.log('Start Year: ', this.state.startYear)   

    }    

    _grabEndYear = (text) => {
        
        this.state.endYears = text
        this.setState(function(prevState, props){
        return {endYear: prevState.endYear}
        });
        console.log('End Year: ', this.state.endYear)  
        
    }  

    render(){

        return(

            <View style={styles.jobContainer}>

            <View style={{flexDirection: 'row', padding: 10, backgroundColor: 'white'}}>


                <View style={{flex: 1}}>

                    <View style={styles.inputCont}>  

                    <TextInput style={styles.singleInput} 
                               placeholder='Company'
                               placeholderTextColor='#C7C7CD'
                               underlineColorAndroid='transparent'
                               value={this.state.company}
                               onChangeText={(text) => this._grabCompany(text)}/>

                    </View>

                    <View style={styles.inputCont}>

                    <TextInput style={styles.singleInput} 
                               placeholder='Position'
                               placeholderTextColor='#C7C7CD'
                               underlineColorAndroid='transparent'
                               value={this.state.position}
                               onChangeText={(text) => this._grabPosition(text)}/>

                    </View>

                    <View style={{flex: 1, flexDirection: 'row'}}>

                     <View style={[styles.inputCont, {marginRight: 5}]}>           

                    <TextInput style={styles.singleInput} 
                               placeholder='City'
                               placeholderTextColor='#C7C7CD'
                               underlineColorAndroid='transparent'
                               value={this.state.city}
                               onChangeText={(text) => this._grabCity(text)}/>

                    </View>

                    <View style={[styles.inputCont, {marginLeft: 5}]}> 
                    
                    <TextInput style={styles.singleInput} 
                               placeholder='Country'
                               placeholderTextColor='#C7C7CD'
                               underlineColorAndroid='transparent'
                               value={this.state.country}
                               onChangeText={(text) => this._grabCountry(text)}/>

                    </View>

                    </View>   





                </View>

                </View>





                </View>

        )
    }
}


const styles = StyleSheet.create({

    jobContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputCont: {
        flex: 1,
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 2,
        padding: 5,
        borderRadius: 5,
        borderColor: 'grey', 
    },
    singleInput: {
        color: '#C7C7CD',
        fontSize: 17,
        fontWeight: '400',
        paddingLeft: 5, 
    },
})

