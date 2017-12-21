import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  Image,
  TouchableHighlight
} from 'react-native';

import ViewContainer from '../ViewContainer';

const brokoliIcon = require("../../../img/icons/brokoli.png")

export default class Login extends React.Component {

    constructor(props) {
        super(props);
      
        this.state = {username: '',
                      password: '',
                      isLoggedIn: false};
      }


      _createOnpress(){
      console.log('called');
      
      
      if(this.getData() == 'true')
          Alert.alert("Valid user!")
      else
          Alert.alert("Invalid user!")
      }

      getData(){
        fetch('https://brokoli.eu-gb.mybluemix.net/api/register', {  
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
            return response.auth.validation;
          });

      }
        render() {
          return (
            <ViewContainer style={{backgroundColor: 'white'}}>
      
            <View style={styles.logoCont}>
                <Image source={brokoliIcon} style={styles.logoImg}/>
            </View>

            <View style={styles.bottomLogoCont}>
                
                <TextInput
                underlineColorAndroid='transparent'
                style={styles.textInput}
                placeholder='username'
                placeholderTextColor='#222222'
                onChangeText={(username) => this.setState({username})}
                />

                <TextInput
                    underlineColorAndroid='transparent'
                    style={styles.textInput}
                    placeholder='password'
                    placeholderTextColor='#222222'
                    onChangeText={(password) => this.setState({password})}
                    />
        
                
                <TouchableOpacity onPress={()=>this._createOnpress()}
                >

                <Text> PROCEED </Text>

                </TouchableOpacity>
        
                <Text style={styles.registerLink}>
                    I don't have a Brokoli account
                </Text>
            </View>
            </ViewContainer>
        );
    }
}
const styles = StyleSheet.create({
    logoCont: {
          alignItems: 'center',
          justifyContent:'center',
          flex: 1,
    },
    logoImg: {
        resizeMode: 'center'
    },
    button:{
      marginBottom:20,
      borderRadius: 10
    },
    buttonTitle: {
        paddingTop:10,
        paddingBottom:10,
        color:'#fff',
        fontSize: 14,
        textAlign:'center',
        backgroundColor:'#14FDD2',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    textInput: {
      borderWidth: 1,
      borderColor: '#14FDD2',
      justifyContent: 'center',
      alignItems: 'center',
      height: 40,
      marginBottom: 20
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
  });