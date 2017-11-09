/*
  Created by Brigel Pineti

  Header will contain user profile picture, name and position.
*/

'use strict'
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const profileIcon = require("../../../img/icons/profile_pic.png")
const locationIcon = require("../../../img/icons/location.png")
const occupationIcon = require("../../../img/icons/briefcase.png")
const pinIcon = require("../../../img/icons/pin.png")
const userNameIcon = require("../../../img/icons/user_name.png")

import ViewContainer from '../ViewContainer'

export default class Header extends React.Component {

    render(){
        return(
            <ViewContainer style={styles.header}>

                <View style={styles.profilePicCont}>
                    <Image source={profileIcon} style={styles.profileIcon}/> 
                </View>

                <View style={styles.basicInfoParent}>

                    <View style={styles.basicInfoChild}>
                        <Image source={userNameIcon} style={styles.icon}/>
                        <Text style={styles.basicInfoText}>Achraf Bekkali</Text>
                    </View>

                    <View style={styles.basicInfoChild}>
                        <Image source={occupationIcon} style={styles.icon}/>
                        <Text style={styles.basicInfoText}>MSc in Information Science</Text>
                    </View>

                    <View style={styles.basicInfoChild}>
                        <Image source={pinIcon} style={styles.icon}/>
                        <Text style={styles.basicInfoText}>Radboud University</Text>
                    </View>

                    <View style={styles.basicInfoChild}>
                        <Image source={locationIcon} style={styles.icon}/>
                        <Text style={styles.basicInfoText}>Nijmegen, Netherlands</Text>
                    </View>

                </View>
            </ViewContainer>
           

        )
    }
}
const styles = StyleSheet.create({
    header:{
        flex: 1,
        flexDirection: 'row',
    },
    profilePicCont: {
        alignItems: 'center',
        justifyContent:'center',
        flex: 1,
    },
    profileIcon: {
        resizeMode: 'center',
        marginTop: 5,
        width: 100,
        height: 100
    },
    basicInfoParent:{
        flex: 2,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    icon:{
        resizeMode: 'center',
        width: 20,
        height: 20,
        tintColor: 'green'
    },
    basicInfoChild:{
        flexDirection: 'row',
        marginTop: 5,
    },
    basicInfoText:{
        marginLeft: 10,
    }
  });

