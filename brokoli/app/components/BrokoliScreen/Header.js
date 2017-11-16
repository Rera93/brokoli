/*
  Created by Brigel Pineti
*/

'use strict'
import React from 'react';
import { StyleSheet, Text } from 'react-native';

import ViewContainer from '../ViewContainer';

export default class Header extends React.Component {

    render(){
        return(
            <ViewContainer style={styles.body}>
            
            </ViewContainer>
        )
    }
}
const styles = StyleSheet.create({
    body:{
        flex: 0,
        flexDirection: 'row',
        borderWidth: 1
    }
  });