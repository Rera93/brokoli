/*
  Created by Brigel Pineti

  Header will contain user profile picture, name and position.
*/

'use strict'
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const profileIcon = require("../../../img/icons/profile_pic.png")

import ViewContainer from '../ViewContainer'

export default class Header extends React.Component {

    render(){
        return(
            <ViewContainer style={styles.header}>

            <View>
            <Image source={profileIcon} style={styles.profileIcon}/> 

            </View>

         
            <View style={styles.basicInfo}>
            <Text> Achraf Bekkali </Text>
            <Text> Information Science Master at Radboud University </Text>

            </View>
            </ViewContainer>
           

        )
    }
}
const styles = StyleSheet.create({
    header:{
        flex: 1,
        flexDirection: 'row'
    },
    profilePicCont: {
        borderWidth: 1,
        borderColor: 'red',
        flex: 1,
    },
    profileIcon: {
        resizeMode: 'contain',
        width: 100,
        height: 100
    },
    basicInfo:{
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        borderWidth: 1,
        borderColor: 'green'
    }
  });

