import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Button,
  Alert,
  Image
} from 'react-native';

const brokoliIcon = require("../../../img/icons/broccoli.png")

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
            <ScrollView>
      
            <Text style={styles.textInfo}>
            </Text>
      
                  <View style={styles.logoImg}>
                      <Image source={brokoliIcon} style={styles.logoImg}/>
                  </View>
      
            <Text style={styles.textComponent}>
              Username
            </Text>
            <TextInput
              underlineColorAndroid='transparent'
              style={styles.textInput}
              onChangeText={(username) => this.setState({username})}
              />
              <Text style={styles.textComponent}>
                Password
              </Text>
              <TextInput
                underlineColorAndroid='transparent'
                style={styles.textInput}
                onChangeText={(password) => this.setState({password})}
                />
      
              <Button style={styles.textComponent}
              onPress={() => this._createOnpress(this.state.username, this.state.password) }
              title="Login"
              color="#841584"
              accessibilityLabel="create project button"
              />
      
              <Text style={styles.textComponent}>
                  Register
              </Text>
      
            </ScrollView>
        );
    }
}