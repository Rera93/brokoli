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

                    <View style={{flex: 1, flexDirection: 'row', marginTop: 5, marginBottom: 5}}>

                     <View style={{flex: 1}}>

                            <Text style={styles.title}>Start Date</Text>

                     </View>

                    <View style={{flex: 1, marginLeft: 10}}>

                         <Text style={styles.title}>End Date</Text>
                        </View>

                    </View>

                    <View style={{flex: 1, flexDirection: 'row'}}>

                        <View style={[styles.pickerCont, {flex: 1, justifyContent: 'center', marginRight: 10}]}> 


                        <Picker
                        selectedValue={this.state.startMonth}
                        onValueChange={(month) => this._grabStartMonth(month)}
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
                        onValueChange={(month) => this._grabEndMonth(month)}
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
        fontSize: 16,
        fontWeight: '400',
        paddingLeft: 5, 
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
    },
})

