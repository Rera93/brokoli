import React, { Component, PropTypes } from 'react';
import { StyleSheet, 
         Image, 
         Text,
         KeyboardAvoidingView, 
         View, 
         ScrollView, 
         Dimensions, 
         TextInput, 
         TouchableOpacity,
         Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';

import logoImg from '../../img/icons/logo1.png';
import titleImg from '../../img/icons/title.png'
import sloganImg from '../../img/icons/slogan.png';

const width = Dimensions.get("window").width
const height = Dimensions.get("window"). height

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
          console.log(res.validation + " " + res.id);
          if(res.validation == 'true'){
              
              //Alert.alert("Valid user!", res.id);
              console.log('id: ', res.id)
              this.props.navigation.navigate('Home', {userId: res.id});
          }
        else{
            Alert.alert("Invalid user!");
            //this.props._callbackLogin(res.validation, 0);
        }
        
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
            ;
  
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

                      <View style={[styles.inputCont,{ marginTop: 0 }]}>

                        <TextInput style={styles.input} 
                                   placeholder='username'
                                   onChangeText={(username) => this.setState({username})}
                                   underlineColorAndroid='transparent'
                                   keyboardType = 'email-address'/>

                      </View>

                      <View style={[styles.inputCont,{ marginBottom: 0 }]}>

                        <TextInput style={styles.input}
                                   placeholder='password'
                                   onChangeText={(password) => this.setState({password})}
                                   underlineColorAndroid='transparent'
                                   secureTextEntry = {true}/>

                      </View>

                        <TouchableOpacity style={styles.btnCont} onPress={()=> this._createOnpress()}>

                        <Text style={styles.btn}> LOGIN </Text>

                      </TouchableOpacity>

                      </View>

                      <TouchableOpacity style={styles.registerCont}
                                        onPress={() => navigate('Register')}>

                      <Text style={styles.btn} > I don't have an account. </Text>

                      </TouchableOpacity> 

                    </ScrollView>

                    </KeyboardAvoidingView>


        )
    }
}
const styles = StyleSheet.create({

  container: { 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: height
  },
  logoContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
    paddingTop: 100,
    paddingBottom: 15,

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
    justifyContent: 'center',
    marginTop: 40
  },
  input: {
    backgroundColor: '#F8F9FB',
    borderWidth: 2,
    borderColor: '#254D32',
    borderRadius: 5,
    paddingTop: 5, 
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    width: width - 100,
    color: '#254D32'
  },
  btnCont: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#42D260',
    width: width - 200,
    marginTop: 10,
    marginBottom: 60,
    borderWidth: 2,
    borderColor: '#254D32',
    height: 50,
    borderRadius: 5 
    },
    btn: {
      color: '#254D32',
      fontWeight: '600',
      fontSize: 17
    },
    registerCont: {

      paddingBottom: 20

    }
  });
