import React from 'react';
import { StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';

import ViewContainer from '../components/ViewContainer'
import Personal from '../components/RegisterScreen/Personal/Personal'
import Account from '../components/RegisterScreen/Account/Account'
import Professional from '../components/RegisterScreen/Professional/Professional'
import Career from '../components/RegisterScreen/Career/Career'
import Additional from '../components/RegisterScreen/Additional/Additional'

const StackNav = StackNavigator({

    Personal: {screen: Personal},
    Account: {screen: Account},
    Professional: {screen: Professional},
    Career: {screen: Career},
    Additional: {screen: Additional}
}, {
    transitionConfig: getSlideFromRightTransition
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