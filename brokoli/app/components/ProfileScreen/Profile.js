/*
  Created by Brigel Pineti

  Header will contain user profile picture, name and position.
*/

/* @flow */
import React, {PureComponent} from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import Skills from './Skills'
import Projects from './Projects'
import Jobs from './Jobs'
import Overview from './Overview'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const profileIcon = require('../../../img/icons/profile_pic.png')
const initialLayout = {
    height: 0,
    width: width,
  };


export default class Profile extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            name: 'Alan.R.Andrade',
            header: 'Time you enjoy wasting was not wasted.',
            projectNr: 0,
            applicationNr: 0,
            index: 1,
            routes: [
                {key: '1', title: 'Overview'},
                {key: '2', title: 'Skills'},
                {key: '3', title: 'Jobs'},
                {key: '4', title: 'Projects'}
            ],
        }
    }


    render(){
        console.log(this.state.routes)
        return(
            <View style={styles.container}>

            <View style={styles.header}>


                <View style={styles.profilePicCont}>
                    <Image source={profileIcon} style={styles.profileIcon}/> 
                </View>

                <View style={styles.textContainer}>
                   
                        <Text style={styles.nameTxt}>{this.state.name}</Text>
                 
                        <Text style={styles.headerTxt}>{this.state.header}</Text>

                    </View>

                <View style={styles.reactionsCont}>

                    <View style={styles.reaction}>

                        <Text style={styles.reactionTxt}>{this.state.projectNr}</Text>
                        <Text style={styles.reactionTxt}>Projects</Text>

                    </View>

                    <View style={{width: 1, backgroundColor:'#C7C7CD'}} />

                    <View style={styles.reaction}>

                        <Text style={styles.reactionTxt}>{this.state.applicationNr}</Text>
                        <Text style={styles.reactionTxt}>Applications</Text>

                    </View>




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
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: width,
    },
    profilePicCont: {
        alignItems: 'center',
        justifyContent:'center',
        borderWidth: 3,
        borderRadius: 65,
        padding: 5,
        borderColor: '#42D260'
    },
    profileIcon: {
        resizeMode: 'contain',
        padding: 10,
        width: 120,
        height: 120,
    },
    textContainer: {
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    reactionsCont: {
        marginTop: 10,
        flexDirection: 'row',
        marginBottom: 10,
    },
    reaction: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    reactionTxt: {
        color: '#C7C7CD',
        fontSize: 15,
        fontWeight: '300',
        padding: 2.5,
    },
    nameTxt:{
        color: 'grey',
        fontSize: 20,
        fontWeight: '400',
        padding: 5,
    },
    headerTxt:{
        color: 'grey',
        fontSize: 17,
        fontWeight: '300',
        padding: 5.
    },
    body: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'red'
    },
  });

