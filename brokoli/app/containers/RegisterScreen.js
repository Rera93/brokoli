import React from 'react';
import { StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';


import ViewContainer from '../components/ViewContainer'
import FullName from '../components/RegisterScreen/FullName'
import BirthDate from '../components/RegisterScreen/BirthDate'
import Gender from '../components/RegisterScreen/Gender'
import Occupation from '../components/RegisterScreen/Occupation'
import Location from '../components/RegisterScreen/Location'
import Education from '../components/RegisterScreen/Education'
import JobExp from '../components/RegisterScreen/JobExp'
import ProjectExp from '../components/RegisterScreen/ProjectExp'
import Email from '../components/RegisterScreen/Email'
import Username from '../components/RegisterScreen/Username'
import Password from '../components/RegisterScreen/Password'

const StackNav = StackNavigator({
    FullName: {screen: FullName},
    BirthDate: {screen: BirthDate},
    Gender: {screen: Gender},
    Occupation: {screen:Occupation},
    Location: {screen:Location},
    Education: {screen: Education},
    ProjectExp: {screen: ProjectExp},
    JobExp: {screen: JobExp},
    Email: {screen: Email},
    Username: {screen: Username},
    Password: {screen: Password}
});

export default class RegisterScreen extends React.Component {

    static navOptions = {
        title: 'Sign Up'
    };

    render(){

        return(

            
              
              <StackNav style={{marginTop: 20}} />  

               

        )
    }
}