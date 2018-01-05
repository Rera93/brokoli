import React from 'react';
import { StyleSheet, 
         Text, 
         TouchableOpacity, 
         Dimensions, 
         KeyboardAvoidingView, 
         View,
         ScrollView,
         TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';

import ProfilePic from './ProfilePic'
import BirthDate from './BirthDate'
import Gender from './Gender'
import ViewContainer from '../../ViewContainer'

const width = Dimensions.get('window').width

export default class Personal extends React.Component {

    static navigationOptions = {
        title: 'Personal',
        headerStyle: { backgroundColor: 'white', marginTop: 24 },
        headerTitleStyle: { color: '#42D260' },
      };



      constructor(props){
          super(props)

          this.state = {
              firstName: '',
              lastName: '',
              dateOfBirth: '',
              profilePic: '',
              gender: 'Male',
              city: '',
              country: '',
              flip: false
          }
      }

    _grabFirstName = (text) => {
        this.state.firstName = text 
        this.setState(function(prevState, props){
            return {firstName: prevState.firstName}
         });

         console.log('First Name: ', this.state.firstName)
         this._flipNext()

    }

    _grabLastName = (text) => {

        this.state.lastName = text 
        this.setState(function(prevState, props){
            return {lastName: prevState.lastName}
         });

         console.log('Last Name: ', this.state.lastName)
         this._flipNext()

        
    }
    callbackBirthDate = (data) => {
        this.state.dateOfBirth = data 
        this.setState(function(prevState, props){
            return {dateOfBirth: prevState.dateOfBirth}
         });

         console.log('Date of Birth: ', this.state.dateOfBirth)
         this._flipNext()
    }

    callbackGender = (data) => {
        this.state.gender = data 
        this.setState(function(prevState, props){
            return {gender: prevState.gender}
         });

         console.log('Gender: ', this.state.gender)
         this._flipNext()
    }

    

    _grabCity = (text) => {

        this.state.city = text 
        this.setState(function(prevState, props){
            return {city: prevState.city}
         });

         console.log('City: ', this.state.city)
         this._flipNext()

        
    }

    _grabCountry = (text) => {

        this.state.country = text 
        this.setState(function(prevState, props){
            return {country: prevState.country}
         });

         console.log('Country: ', this.state.country)
         this._flipNext()

        
    }

    _flipNext(){
        if(this.state.firstName != '' && this.state.lastName != '' &&
            this.state.gender != '' && this.state.dateOfBirth != '' &&
            this.state.city != '' && this.state.country != '' )
            {
                this.state.flip = true
                this.setState(function(prevState, props){
                    return {flip: prevState.flip}
                 });
            }
         else {
            this.state.flip = false
            this.setState(function(prevState, props){
                return {flip: prevState.flip}
             });
             
         }
         console.log('Flip: ', this.state.flip)
    }

    render(){

        const {navigate}= this.props.navigation
        
        return(

            
            <KeyboardAvoidingView behavior="padding" backgroundColor='#42D260'>
            
             <ScrollView contentContainerStyle={styles.personal}
                        showsVerticalScrollIndicator={false}>

            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginLeft: 10, marginRight: 10,}}> 

               <View style={styles.titleContainer}> 

                  <Text style={styles.title}>Please enter your personal information</Text>

                </View>

                
                <View style={styles.inputCont}> 
                    
                    <View style={{flex: 1}}>
                    <TextInput style={styles.locInput} 
                               placeholder='first name'
                               placeholderTextColor='white'
                               underlineColorAndroid = 'transparent'
                               onChangeText={(text) => this._grabFirstName(text)}/>
                    </View>

                    <View style={styles.condCont}>
                    <Text style={styles.cond}> R </Text>
                    </View>

                </View> 

                <View style={styles.inputCont}>    


                    <View style={{flex: 1}}>
                    <TextInput style={styles.locInput} 
                               placeholder='last name'
                               placeholderTextColor='white'
                               underlineColorAndroid = 'transparent'
                               onChangeText={(text) => this._grabLastName(text)}/> 
                    </View> 
                
                    <View style={styles.condCont}>
                    <Text style={styles.cond}> R </Text>
                    </View>
                </View>
                <ProfilePic />
                <BirthDate callbackFromParent = {this.callbackBirthDate}/>
                <Gender callbackFromParent = {this.callbackGender}/>

                <View style={styles.inputCont}> 
                
                    <View style={{flex: 1}}>  
                        <TextInput style={styles.locInput}
                                placeholder='city'
                                placeholderTextColor= 'white'
                                underlineColorAndroid = 'transparent'
                                onChangeText={(text) => this._grabCity(text)} />
                    </View>

                    <View style={styles.condCont}>
                        <Text style={styles.cond}> R </Text>
                    </View>  

                </View>

                <View style={styles.inputCont}> 

                    <View style={{flex: 1}}>
                        <TextInput style={styles.locInput} 
                               placeholder='country'
                               placeholderTextColor= 'white'
                               underlineColorAndroid = 'transparent'
                               onChangeText={(text) => this._grabCountry(text)}/>  
                    </View>

                    <View style={styles.condCont}>           
                        <Text style={styles.cond}> R </Text>
                    </View>
                </View>

                <TouchableOpacity //disabled={this.state.flip ? false : true}
                                  onPress={()=> navigate('Account', {firstName: this.state.firstName, lastName: this.state.lastName, dateOfBirth: this.state.dateOfBirth, gender: this.state.gender, city: this.state.city,  country: this.state.country })}
                                  style={[styles.button, {backgroundColor: this.state.flip ? 'white' : '#42D260'}]}>

                <Text style={[styles.btnText, {color: this.state.flip ? '#42D260' : 'white'}]}> NEXT </Text>

                </TouchableOpacity>

                </View>

                </ScrollView>

                <View style={{height: 80}} />

                </KeyboardAvoidingView>


        )
    }
}

const styles = StyleSheet.create({
    personal: {
        backgroundColor: '#42D260',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,

    },
    titleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
        marginTop: 15,
        marginLeft: 20,
        marginRight: 20
    },
    title: {
      color: 'white',
      fontWeight: '900',
      fontSize: 18,
    },
    inputCont: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginLeft: 20,
        padding: 10,
        borderRadius: 5,
        marginTop: 15,
        marginBottom: 15,
        marginRight: 20,
        borderWidth: 3,
        borderColor: 'white'
    },
    locInput: {
        fontSize: 17,
        color: 'white',
       
    },
    cond: {
        fontSize: 17,
        textAlign: 'center',
        fontWeight: '600',
        color: '#42D260'
    },
    condCont: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: 22,
        height: 22,
        borderRadius: 11,
        marginRight: 5,
    },
    button: {
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
    width: width - 300,
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 3
    },
    btnText: {
    padding: 10,
    fontWeight: 'bold'
}
})
