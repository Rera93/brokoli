import React from 'react';
import { StyleSheet } from 'react-native';


import ViewContainer from '../components/ViewContainer'
import Login from '../components/LoginScreen/Login'

export default class LoginScreen extends React.Component {


    render(){

        return(

            <ViewContainer>

                <Login />

                </ViewContainer>

        )
    }
}