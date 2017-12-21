import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
	StyleSheet,
	TouchableOpacity,
	Text,
	Animated,
	Easing,
	Image,
	Alert,
	View,
	TextInput
} from 'react-native';

const width = Dimensions.get('window').width


export default class Login extends Component {

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

		return(
			<View style={styles.container}>

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

			</View>

			)
	}
}

const styles = StyleSheet.create({
	container: { flex: 1,
			     justifyContent: 'center',
			     alignItems: 'center'
			 },
	inputCont: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',

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
	})




