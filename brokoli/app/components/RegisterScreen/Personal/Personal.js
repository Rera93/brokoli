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
        headerStyle: { backgroundColor: '#42D260', marginTop: 24 },
        headerTitleStyle: { color: 'white' },
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

            
            <KeyboardAvoidingView behavior="padding">
            
             <ScrollView contentContainerStyle={styles.personal}
                                    showsVerticalScrollIndicator={false}>

               <View style={styles.titleContainer}> 

                  <Text style={styles.title}>Please enter your personal information in order to construct your profile </Text>

                </View>

                
                <View style={styles.inputCont}> 
                    <View style={[styles.condCont, {backgroundColor: '#BE2625'} ]}>
                    <Text style={styles.cond}> R </Text>
                    </View>
                    <TextInput style={styles.locInput} 
                               placeholder='first name'
                               onChangeText={(text) => this._grabFirstName(text)}/>
                    <View style={[styles.condCont, {backgroundColor: '#BE2625'} ]}>
                    <Text style={styles.cond}> R </Text>
                    </View>
                    <TextInput style={styles.locInput} 
                               placeholder='last name'
                               onChangeText={(text) => this._grabLastName(text)}/>  
                </View>
                <ProfilePic />
                <BirthDate callbackFromParent = {this.callbackBirthDate}/>
                <Gender callbackFromParent = {this.callbackGender}/>

                <View style={styles.inputCont}> 
                <View style={[styles.condCont, {backgroundColor: '#BE2625'} ]}>
                    <Text style={styles.cond}> R </Text>
                </View>    
                    <TextInput style={styles.locInput}
                               placeholder='city'
                               onChangeText={(text) => this._grabCity(text)} />

                    <View style={[styles.condCont, {backgroundColor: '#BE2625'}]}>           
                    <Text style={styles.cond}> R </Text>
                    </View>
                    <TextInput style={styles.locInput} 
                               placeholder='country'
                               onChangeText={(text) => this._grabCountry(text)}/>  
                </View>

                <TouchableOpacity disabled={this.state.flip ? false : true}
                                  onPress={()=> navigate('Account', {firstName: this.state.firstName, lastName: this.state.lastName, dateOfBirth: this.state.dateOfBirth, gender: this.state.gender, city: this.state.city,  country: this.state.country })}
                                  style={[styles.button, {backgroundColor: this.state.flip ? '#42D260' : 'white'}]}>

                <Text style={[styles.btnText, {color: this.state.flip ? 'white' : '#42D260'}]}> NEXT </Text>

                </TouchableOpacity>

                </ScrollView>

                <View style={{height: 80}} />

                </KeyboardAvoidingView>


        )
    }
}

const styles = StyleSheet.create({
    personal: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 40,

    },
    titleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
        width: width,
    },
    title: {
      color: 'grey',
      fontWeight: '900',
      padding: 5,
      width: width - 60,
      fontSize: 17,
    },
    inputCont: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
        flexDirection: 'row',
        marginLeft: 15,
    },
    locInput: {
        color: '#42D260',
        padding: 5,
        width: width / 2 - 50,
        borderRadius: 5,
        marginTop: 15,
        marginBottom: 15,
        marginRight: 20,
        borderWidth: 1,
        borderColor: 'grey'
    },
    cond: {
        fontSize: 17,
        textAlign: 'center',
        fontWeight: '600',
        color: 'white'
    },
    condCont: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 25,
        height: 25,
        borderRadius: 25/2,
        marginRight: 5,
    },
    button: {
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
    width: width - 300,
    alignItems: 'center',
    borderColor: '#42D260',
    borderWidth: 1
    },
    btnText: {
    padding: 10,
    fontWeight: 'bold'
}
})
