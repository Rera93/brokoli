/*
  Created by Brigel Pineti

  Header will contain user profile picture, name and position.
*/

import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, Alert, TouchableOpacity } from 'react-native';
import Skills from './Skills'
import Projects from './Projects'
import Jobs from './Jobs'
import Overview from './Overview'
import Tabs from './Tabs'


import FloatingAction from '../FloatingTopComponent/FloatingAction'
import Modal from 'react-native-modal'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const profileIcon = require('../../../img/icons/profile_pic.png')

export default class Profile extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            name: 'Alan.R.Andrade',
            header: 'Time you enjoy wasting was not wasted.',
            projectNr: 0,
            applicationNr: 0,
            isModalLogoutVisible: false
        }
    }
    _onActionPressed(action){

        switch(action){

            case 'bt_profile': 

            console.log('bt_profile')

            break;
            case 'bt_account': 

            console.log('bt_account')
            
            break;
            case 'bt_logout': 
            
            {this._toggleLogoutModal()}
                       
             break;

             default: 
             break;
        }

    }
    _toggleLogoutModal = () => {

        this.state.isModalLogoutVisible = !this.state.isModalLogoutVisible
        this.setState(function(prevState, props){
            return {isModalLogoutVisible: prevState.isModalLogoutVisible}
        })
        console.log('isModalLogoutVisible: ', this.state.isModalLogoutVisible)
      }

    render(){
        const actions = [{
            icon: require('../../../img/icons/edit-profile.png'),
            name: 'bt_profile',
            position: 1
          }, {
            icon: require('../../../img/icons/lock.png'),
            name: 'bt_account',
            position: 2
          }, {
            icon: require('../../../img/icons/exit.png'),
            name: 'bt_logout',
            position: 3
          }];
        return(
            <View style={styles.container}>

            <View style={styles.header}>

                <FloatingAction  actions={actions}
                                 position="right"
                                 onPressItem={(name) => this._onActionPressed(name)}/>


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

                <Tabs>

                    <Overview title='OVERVIEW'/>
                    <Skills title='SKILLS' />
                    <Jobs title='JOBS' />
                    <Projects title='PROJECTS' />

                </Tabs>

                
                    
                    </View>



                    <Modal isVisible = {this.state.isModalLogoutVisible}
                         animationIn={'slideInLeft'}
                         animationOut={'slideOutRight'}>

                         <View style={[styles.modalContent, {backgroundColor: '#254D32'}]}>
        
                            <Text style={[styles.title, {color: 'white'}]}>Are you sure you want to logout?</Text>
        
                            <View style={{flexDirection: 'row'}}>
        
                                <TouchableOpacity 
                                                style={[styles.button,{backgroundColor: 'white'}]} >
                                <Text style={[styles.btnTxt, {color: '#254D32'}]}>Ok</Text>
                
                                </TouchableOpacity>
        
                                <TouchableOpacity style={[styles.button, {backgroundColor: '#A7333F'}]} 
                                                onPress={() => this._toggleLogoutModal()}>
                                <Text style={[styles.btnTxt, {color: 'white'}]}>Cancel</Text>
                
                                </TouchableOpacity>
        
                            </View>
        
                        </View>

                         
                    </Modal>   
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
        borderTopWidth: 1,
        borderColor: '#C7C7CD'
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
      },
      title: {
        color: '#254D32',
        fontSize: 20,
        fontWeight: '400'
    },
    btnTxt: {
        fontSize: 16,
        fontWeight: '400'
    },
    button: {
        padding: 12,
        margin: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
      },
  });

