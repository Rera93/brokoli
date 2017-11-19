/* 
    Created by Brigel Pineti
*/

import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
	StyleSheet,
	View,
	TextInput,
	Image,
} from 'react-native';

export default class UserInput extends Component {
	render() {
		return (
			<View style={styles.inputWrapper}>

                <Image source={this.props.source}
					style={styles.inlineImg} />

				<TextInput style={styles.input}
					placeholder={this.props.placeholder}
					secureTextEntry={this.props.secureTextEntry}
					autoCorrect={this.props.autoCorrect}
					autoCapitalize={this.props.autoCapitalize}
					returnKeyType={this.props.returnKeyType}
					placeholderTextColor='#59cd32' />

			</View>
		);
	}
}

UserInput.propTypes = {
	placeholder: PropTypes.string.isRequired,
	secureTextEntry: PropTypes.bool,
	autoCorrect: PropTypes.bool,
	autoCapitalize: PropTypes.string,
	returnKeyType: PropTypes.string,
};

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
	input: {
		width: DEVICE_WIDTH - 40,
		height: 40,
		marginHorizontal: 20,
		paddingLeft: 45,
        color: '#59cd32',
        
	},
	inputWrapper: {
		flex: 1,
    },
    
    inlineImg: {
		position: 'absolute',
		zIndex: 99,
		width: 22,
		height: 22,
		left: 35,
        top: 9,
        tintColor: '#59cd32'
	},
});