import React, { Component, PropTypes } from 'react';
import { StyleSheet, Image, Text, KeyboardAvoidingView, View, ScrollView, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import Logo from '../components/LoginScreen/Logo';
import Form from '../components/LoginScreen/Form';
import LoginForm from '../components/LoginScreen/LoginForm'
import ButtonSubmit from '../components/LoginScreen/ButtonSubmit';
import SignupSection from '../components/LoginScreen/SignupSection';
import ViewContainer from '../components/ViewContainer'
import { StackNavigator } from 'react-navigation';

import logoImg from '../../img/icons/logo1.png';
import titleImg from '../../img/icons/title.png'
import sloganImg from '../../img/icons/slogan.png';

const width = Dimensions.get("window").width

export default class LoginScreen extends React.Component {

  constructor(props){
    super(props)
  
    this.state = {
      username : '',
      password : '',
    }
    }
  
    _createOnpress(){
      //  console.log('called');
        
        //Alert.alert(this.getData());
        
        console.log('this ' + this.getData());
  
      this.getData().then((res) => {
        console.log(res);
        if(res == 'true')
            Alert.alert("Valid user!");
      else
          Alert.alert("Invalid user!");
      
      });
      }
  
  
        getData(){
          console.log(this.state.username + " " + this.state.password);
          return fetch('https://brokoli.eu-gb.mybluemix.net/api/auth', {  
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            user: this.state.username,
            pass: this.state.password,
  
          })
          })
            // .then(function(response) { return response.json(); })
            // .then(function(responseData) {
            //   this.setState({ data : responseData})});
  
            .then((response) => response.json())
            .then((responseData) => {
              console.log(responseData.validation);
              return responseData.validation;
            });
  
        }

    render(){

      const {navigate}= this.props.navigation

        return(

              <KeyboardAvoidingView behavior='padding'>

              <ScrollView contentContainerStyle={styles.container}>

                     <View style={styles.logoContainer}>
                          <Image source={logoImg} style={styles.image} />
                          <Image source={titleImg}/>
                          <Image source={sloganImg}/>
                      </View>

                      <View style={styles.form}>

                      <View style={styles.inputCont}>

                        <TextInput style={styles.input} placeholder='username'
                        onChangeText={(username) => this.setState({username})} />

                      </View>

                      <View style={styles.inputCont}>

                        <TextInput style={styles.input} placeholder='password'
                        onChangeText={(password) => this.setState({password})} />

                      </View>

                        <TouchableOpacity style={styles.btnCont} onPress={()=> this._createOnpress()}>

                        <Text style={styles.btn}> LOGIN </Text>

                      </TouchableOpacity>

                      <Text onPress={() => navigate('Register')}> Register </Text> 

                      </View>

                    </ScrollView>

                    <View style={{height: 80}}/> 

                    </KeyboardAvoidingView>


        )
    }
}
const styles = StyleSheet.create({

  container: { 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 20
  },
  logoContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 100,

	},
	image: {
		width: 250,
		height: 250,
	},
	imagebelow: {
		width: 400,
		height: 80
	},
  inputCont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    borderWidth: 1,
    padding: 10,
    width: width - 100
  },
  btnCont: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#42D260',
    width: width - 300
    }
  });
