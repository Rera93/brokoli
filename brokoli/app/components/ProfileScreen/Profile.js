/*
  Created by Brigel Pineti

  Header will contain user profile picture, name and position.
*/

import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native';
import Skills from './Skills'
import Projects from './Projects'
import Jobs from './Jobs'
import Overview from './Overview'
import Tabs from './Tabs'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const profileIcon = require('../../../img/icons/profile_pic.png')

export default class Profile extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            userData: '',
            name: '',
            header: '',
            projectNr: 0,
            applicationNr: 0,
        }
    }

    componentWillMount(){
    //const { params } = this.props.navigation.state;console.log(this.navigation.state.params.userID);
       this.getData();

       //const { params } = this.props.navigation.state;
     }

     getData(){
     
           fetch('https://brokoli.eu-gb.mybluemix.net/api/loadProfile', {  
             method: 'POST',
             headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json',
             }
           ,
              body: JSON.stringify({
              userID: this.props.screenProps,

            })
            })
             // .then(function(response) { return response.json(); })
             // .then(function(responseData) {
             //   this.setState({ data : responseData})});
     
             .then((response) => response.json())
             .then((responseData) => {
                this.setState({ data : responseData.data,
                                name: responseData.data.firstName + " " + responseData.data.lastName,
                                header: responseData.data.passHeadertoDb});
               
             });
     
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

                <Tabs>

                    <Overview title='OVERVIEW'/>
                    <Skills title='SKILLS' />
                    <Jobs title='JOBS' />
                    <Projects title='PROJECTS' />

                </Tabs>
                    
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
        borderTopWidth: 1,
        borderColor: '#C7C7CD'
    },
  });

