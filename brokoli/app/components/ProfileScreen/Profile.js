/*
  Created by Brigel Pineti

  Header will contain user profile picture, name and position.
*/

'use strict'
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

const profileIcon = require("../../../img/icons/profile_pic.png")
const locationIcon = require("../../../img/icons/location.png")
const occupationIcon = require("../../../img/icons/briefcase.png")
const pinIcon = require("../../../img/icons/pin.png")
const userNameIcon = require("../../../img/icons/user_name.png")

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height



export default class Profile extends React.Component {

    render(){
        return(
            <View style={styles.container}>

            <View style={styles.header}>


                <View style={styles.profilePicCont}>
                    <Image source={profileIcon} style={styles.profileIcon}/> 
                </View>

                <View style={styles.textContainer}>
                   
                        <Text style={styles.text}>Achraf Bekkali</Text>
                 
                        <Text style={styles.text}>SomeHeader</Text>

                    </View>
                  </View>  

                <View style={styles.body}>



                    </View>


                </View>
        
           

        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 22
    },
    header:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        width: width,
        borderColor: 'blue'
    },
    profilePicCont: {
        alignItems: 'center',
        justifyContent:'center',
        borderWidth: 4,
        borderRadius: 75,
        padding: 5,
        borderColor: '#42D260'
    },
    profileIcon: {
        resizeMode: 'contain',
        padding: 10,
        width: 140,
        height: 140,
    },
    textContainer: {
        paddingTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        color: 'grey',
        fontSize: 16,
        fontWeight: '400',
        padding: 5,
    },
    body: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'red'
    },
  });

