import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
	StyleSheet,
	View,
	Text,
} from 'react-native';


export default class SignupSection extends Component {


	render() {
		
		return (
			<View style={styles.container}>
				<Text onPress={()=> navigate('Register')} style={styles.text}>Create Account</Text>
				<Text style={styles.text}>Forgot Password?</Text>
			</View>
		);
	}
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		top: 30,
		width: DEVICE_WIDTH,
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	text: {
		color: '#494947',
		backgroundColor: 'transparent',
		fontWeight: 'bold'
	},
});