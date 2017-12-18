import React, { Component, PropTypes } from 'react';
import { StyleSheet, Image, Text } from 'react-native';
import Logo from '../components/LoginScreen/Logo';
import Form from '../components/LoginScreen/Form';
import ButtonSubmit from '../components/LoginScreen/ButtonSubmit';
import SignupSection from '../components/LoginScreen/SignupSection';
import ViewContainer from '../components/ViewContainer'
import { StackNavigator } from 'react-navigation';

export default class LoginScreen extends React.Component {

    render(){

      const {navigate}= this.props.navigation

        return(

            <ViewContainer style={{backgroundColor: 'white'}}>

                <Logo />
				<Form />
				<SignupSection/>
				<ButtonSubmit/>

         <Text onPress={() => navigate('Register')}> Register </Text> 

                </ViewContainer>

        )
    }
}
const styles = StyleSheet.create({
  });
