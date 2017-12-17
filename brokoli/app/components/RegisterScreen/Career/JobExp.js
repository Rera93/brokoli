import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions, TextInput } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import ViewContainer from '../../ViewContainer'

const width = Dimensions.get("window").width
const nrOfJobs = 3

export default class JobExp extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            companies : Array(nrOfJobs).fill(''),
            positions : Array(nrOfJobs).fill(''),
            cities: Array(nrOfJobs).fill(''),
            countries: Array(nrOfJobs).fill(''),
            startMonths: Array(nrOfJobs).fill(''),
            startYears: Array(nrOfJobs).fill(''),
            endMonths: Array(nrOfJobs).fill(''),
            endYears: Array(nrOfJobs).fill(''),
        }
    }

    _grabCompany = (text, i) => {
        
                this.state.companies[i] = text
                this.setState(function(prevState, props){
                  return {companies: prevState.companies}
                 });
                console.log('Companies: ', this.state.companies)
                
    }

    _grabPosition = (text, i) => {
                
                this.state.positions[i] = text
                this.setState(function(prevState, props){
                return {positions: prevState.positions}
                });
                console.log('Positions: ', this.state.positions)
                        
    }
    _grabCity = (text, i) => {
        
                this.state.cities[i] = text
                this.setState(function(prevState, props){
                  return {cities: prevState.cities}
                 });
                console.log('Cities: ', this.state.cities)
                
    }

    _grabCountry = (text, i) => {
                
                this.state.countries[i] = text
                this.setState(function(prevState, props){
                return {countries: prevState.countries}
                });
                console.log('Countries: ', this.state.countries)
                        
    }
    
    _grabStartMonth = (text, i) => {
        
        this.state.startMonths[i] = text
        this.setState(function(prevState, props){
        return {startMonths: prevState.startMonths}
        });
        console.log('Start Months: ', this.state.startMonths)            
    }    

    _grabEndMonth = (text, i) => {
        
        this.state.endMonths[i] = text
        this.setState(function(prevState, props){
        return {endMonths: prevState.endMonths}
        });
        console.log('End Months: ', this.state.endMonths)           
    }
    
    _grabStartYear = (text, i) => {
        
        this.state.startYears[i] = text
        this.setState(function(prevState, props){
        return {startYears: prevState.startYears}
        });
        console.log('Start Years: ', this.state.startYears)            
    }    

    _grabEndYear = (text, i) => {
        
        this.state.endYears[i] = text
        this.setState(function(prevState, props){
        return {endYears: prevState.endYears}
        });
        console.log('End Years: ', this.state.endYears)           
    }  

    

    _renderJobForms(){


        let monthData = [{
            value: 'Jan',
        },{
            value: 'Feb',
        },{
            value: 'Mar',
        },{
            value: 'Apr',
        },{
            value: 'May',
        },{
            value: 'Jun',
        },{
            value: 'Jul',
        },{
            value: 'Aug',
        },{
            value: 'Sep',
        }, {
            value: 'Oct',
        },{
            value: 'Nov',
        }, {
            value: 'Dec'
        }]

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


        var rows = []
        for(let i=0; i < nrOfJobs; i++)
        {
            rows.push(

                <View key = {i}
                      style={styles.jobCont}>

                    <View style={styles.inputCont}>  

                    <TextInput style={styles.singleInput} 
                               placeholder={'company name ' + (i+1)}
                               onChangeText={(text) => this._grabCompany(text, i)}/>

                    </View>

                    <View style={styles.inputCont}>

                    <TextInput style={styles.singleInput} 
                               placeholder={'position ' + (i+1)}
                               onChangeText={(text) => this._grabPosition(text, i)}/>

                    </View>

                    <View style={[styles.inputCont, {flexDirection: 'row', marginBottom: 0}]}>           

                    <TextInput style={styles.location} 
                               placeholder={'city ' + (i+1)}
                               onChangeText={(text) => this._grabCity(text, i)}/>
                    
                    <TextInput style={styles.location} 
                               placeholder={'contry ' + (i+1)}
                               onChangeText={(text) => this._grabCountry(text, i)}/>

                    </View>   

                    <View style={[styles.inputCont, {flexDirection: 'row', marginTop: 0}]}>

                    <View style={[styles.inputCont, {flexDirection: 'row'}]}>

                    <View style={[styles.dropdown, {marginRight: 5}]}>

                        <Dropdown
                        label={'month ' + (i+1)} 
                        onChangeText={(text) => this._grabStartMonth(text,i)}
                        data={monthData}/>  

                    </View>   
                    
                    <View style={[styles.dropdown, {marginLeft: 5}]}>
                        <Dropdown
                        label={'year ' + (i+1)} 
                        onChangeText={(text) => this._grabStartYear(text,i)}
                        data={yyData}/>  
                    </View>    

                    </View>  

                    <View style={[styles.inputCont, {flexDirection: 'row'}]}>

                    <View tyle={{flex: 1, paddingTop: 20, justifyContent: 'center', alignItems: 'center'}}> 

                        <Text> / </Text>

                     </View>   

                    <View style={[styles.dropdown, {marginRight: 5}]}>

                        <Dropdown
                        label={'month ' + (i+1)} 
                        onChangeText={(text) => this._grabEndMonth(text,i)}
                        data={monthData}/>  

                    </View>    
                    
                    <View style={[styles.dropdown, {marginLeft: 5}]}>

                        <Dropdown
                        label={'year ' + (i+1)} 
                        onChangeText={(text) => this._grabEndYear(text,i)}
                        data={yyData}/>

                    </View>      

                    </View>           

                    </View>




                </View>
            )
        }
        //console.log(this.state.skills)
        return(
                <View style={{flex: 1}}>
                {rows}

                </View>
        )
    }


    render(){

        return(

            <View style={styles.jobContainer}>

                <View style={styles.titleCont}> 

                <Text style={styles.title}> Add at most 3 jobs related to your profile </Text>

                    </View>

                   {this._renderJobForms()} 

                </View>

        )
    }
}


const styles = StyleSheet.create({

    jobContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    titleCont:{
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 10,
    },
    title: {
        fontWeight: '600',
        fontSize: 16, 
        color: 'grey'
    },
    inputCont: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    jobCont: {
        flex: 1,
        marginTop: 15,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderColor: '#42D260'
    },
    singleInput: {
        borderWidth: 1,
        marginLeft: 10,
        marginRight: 10,
        padding: 5,
        borderRadius: 5,
        alignItems: 'center',
        width: width - 20,
        borderColor: 'grey'   
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
    dropdown: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10
    }
})

