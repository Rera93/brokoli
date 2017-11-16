/*
    Created by Brigel Pineti.
*/    
import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
} from 'react-native';

import logoImg from '../../../img/icons/brokoli.png';
import titleImg from '../../../img/icons/title.png';
import sloganImg from '../../../img/icons/slogan.png';

export default class Logo extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Image source={logoImg} style={styles.image} />
				{/*<Text style={styles.text}>BROKOLI</Text>*/}
				<Image source={titleImg}/>
				<Image source={sloganImg}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 3,
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
	text: {
		color: '#494947',
		fontSize: 40,
		backgroundColor: 'transparent',
		fontFamily: 'sans-serif-light'
	}
});