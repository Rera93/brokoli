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
                      password: ''};
      }
      _createOnpress(username, password){
      Alert.alert('User Logged in!',
                  username+'\n'
                  +password);
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
        
                <TouchableHighlight
                    onPress={() => this._createOnpress(this.state.username, this.state.password) }
                    color="#14FDD2"
                    style={styles.button}>
                    <Text style={styles.buttonTitle}>Login</Text>
                </TouchableHighlight>
        
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