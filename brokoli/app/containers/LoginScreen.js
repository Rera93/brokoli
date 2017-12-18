import React, { Component, PropTypes } from 'react';
import { StyleSheet, Image } from 'react-native';
import Logo from '../components/LoginScreen/Logo';
import Form from '../components/LoginScreen/Form';
import ButtonSubmit from '../components/LoginScreen/ButtonSubmit';
import SignupSection from '../components/LoginScreen/SignupSection';
import ViewContainer from '../components/ViewContainer'

export default class LoginScreen extends React.Component {

    render(){

        return(

            <ViewContainer style={{backgroundColor: 'white'}}>

                <Logo />
				<Form />
				<SignupSection/>
				<ButtonSubmit/>

                </ViewContainer>

        )
    }
}
const styles = StyleSheet.create({
  });
