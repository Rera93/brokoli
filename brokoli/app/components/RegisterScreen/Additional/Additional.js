import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import Header from './Header'
import Summary from './Summary'
import ViewContainer from '../ViewContainer'

export default class Additional extends React.Component {

    
    render(){
        return(

            <ViewContainer>

                <Header />
                <Summary />

                </ViewContainer>

        )
    }
}

