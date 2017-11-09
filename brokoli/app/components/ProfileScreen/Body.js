/*
  Created by Brigel Pineti
*/

'use strict'
import React from 'react';
import { StyleSheet, Text } from 'react-native';

import ViewContainer from '../ViewContainer';

export default class Body extends React.Component {

    render(){
        return(
            <ViewContainer style={styles.body}>
            <Text> Body </Text>
            </ViewContainer>
        )
    }
}
const styles = StyleSheet.create({
    body:{
        flex: 3,
        flexDirection: 'row',
        borderWidth: 1
    }
  });