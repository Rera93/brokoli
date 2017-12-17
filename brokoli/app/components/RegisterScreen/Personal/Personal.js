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
              gender: '',
              city: '',
              country: '',
          }
      }

    _grabFirstName = (text) => {
        this.state.firstName = text 
        this.setState(function(prevState, props){
            return {firstName: prevState.firstName}
         });

         console.log('First Name: ', this.state.firstName)

    }

    _grabLastName = (text) => {

        this.state.lastName = text 
        this.setState(function(prevState, props){
            return {lastName: prevState.lastName}
         });

         console.log('Last Name: ', this.state.lastName)

        
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
                    <Text style={[styles.cond, {color: '#BE2625'}]}> R </Text>
                    <TextInput style={styles.locInput} 
                               placeholder='first name'
                               onChangeText={(text) => this._grabFirstName(text)}/>
                    <Text style={[styles.cond, {color: '#BE2625'}]}> R </Text>
                    <TextInput style={styles.locInput} 
                               placeholder='last name'
                               onChangeText={(text) => this._grabLastName(text)}/>  
                </View>
                <ProfilePic />
                <BirthDate />
                <Gender />

                <View style={styles.inputCont}> 
                    <Text style={[styles.cond, {color: '#BE2625'}]}> R </Text>
                    <TextInput style={styles.locInput}
                               placeholder='city'
                               onChangeText={(text) => this._grabCity(text)} />
                    <Text style={[styles.cond, {color: '#BE2625'}]}> R </Text>
                    <TextInput style={styles.locInput} 
                               placeholder='country'
                               onChangeText={(text) => this._grabCountry(text)}/>  
                </View>

                <TouchableOpacity onPress={()=> navigate('Account')}
                                  style={styles.button}>

                <Text style={styles.btnText}> NEXT </Text>

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
        paddingVertical: 30,

    },
    titleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
        marginTop: 15,
        width: width,
    },
    title: {
      color: 'grey',
      fontWeight: '900',
      padding: 10,
      width: width - 60,
      fontSize: 17,
    },
    inputCont: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
        flexDirection: 'row'
    },
    locInput: {
        color: '#42D260',
        padding: 10,
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
        fontWeight: '600',
        paddingRight: 5,
    }, 
    button: {
    backgroundColor: '#42D260',
    marginTop: 20,
    marginBottom: 20,
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
