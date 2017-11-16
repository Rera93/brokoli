import React from 'react';
import { StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';


import ViewContainer from '../components/ViewContainer'
import FullName from '../components/RegisterScreen/FullName'
import Email from '../components/RegisterScreen/Email'
import Username from '../components/RegisterScreen/Username'
import Password from '../components/RegisterScreen/Password'

const StackNav = StackNavigator({
    FullName: {screen: FullName},
    Email: {screen: Email}
});

export default class LoginScreen extends React.Component {

    static navOptions = {
        title: 'Sign Up'
    };

    render(){

        return(

            

              <StackNav />  

               

        )
    }
}