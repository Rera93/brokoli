import React, { Component } from 'react';
import {ScrollView,StyleSheet, Text, View, Image, Dimensions} from 'react-native';

import SwipeCards from '../../lib/SwipeCards'

const window = Dimensions.get('window');
const width = window.width

import tie from '../../../img/icons/tie.png'

class Project extends React.Component {
    constructor(props) {
      super(props);
      
    }
  
     render() {
      return (
        <View style={[styles.card]}>
          <View style = {styles.header} />
          <View style = {styles.tieCont}>
          <Image source = {tie} style={styles.tie} /> 
          </View>
          <View style = {styles.nameCont}>
          <Text style={styles.name}> firstName lastName </Text>
          </View>
          <View style = {styles.infoCont}>
          <Text style={styles.info}> Master student at Radboud University Nijmegen </Text>
          </View>
          <View style={styles.projectCont}>
          <Text style={styles.projectTitle}>{this.props.doc.name}</Text>
          <Text style={styles.text}>{this.props.doc.description}</Text>
          <Text style={styles.text}>Position(s) available in this project: {"\n"}
                    {this.props.doc.positions}</Text>
          </View>
        </View>
      )
    }
  }
  
  class NoMoreProjects extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <View style={styles.noMoreProjects}>
          <Text>No more projects</Text>
        </View>
      )
    }
  }
  
  // var cards = [
  //   {name: '1', image: 'https://media.giphy.com/media/GfXFVHUzjlbOg/giphy.gif'},
  //   {name: '2', image: 'https://media.giphy.com/media/irTuv1L1T34TC/giphy.gif'},
  //   {name: '3', image: 'https://media.giphy.com/media/LkLL0HJerdXMI/giphy.gif'},
  //   {name: '4', image: 'https://media.giphy.com/media/fFBmUMzFL5zRS/giphy.gif'},
  //   {name: '5', image: 'https://media.giphy.com/media/oDLDbBgf0dkis/giphy.gif'},
  //   {name: '6', image: 'https://media.giphy.com/media/7r4g8V2UkBUcw/giphy.gif'},
  //   {name: '7', image: 'https://media.giphy.com/media/K6Q7ZCdLy8pCE/giphy.gif'},
  //   {name: '8', image: 'https://media.giphy.com/media/hEwST9KM0UGti/giphy.gif'},
  //   {name: '9', image: 'https://media.giphy.com/media/3oEduJbDtIuA2VrtS0/giphy.gif'},
  // ]
  
  // const cards2 = [
  //   {name: '10', image: 'https://media.giphy.com/media/12b3E4U9aSndxC/giphy.gif'},
  //   {name: '11', image: 'https://media4.giphy.com/media/6csVEPEmHWhWg/200.gif'},
  //   {name: '12', image: 'https://media4.giphy.com/media/AA69fOAMCPa4o/200.gif'},
  //   {name: '13', image: 'https://media.giphy.com/media/OVHFny0I7njuU/giphy.gif'},
  // ]
  
  export default class Swipe extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        projects: [],
        outOfProjects: false
      }
    }

    componentDidMount(){
      this.getData();
    }

    getData(){
      var arrayProjects = [];
      return fetch('https://brokoli.eu-gb.mybluemix.net/api/visitors', {  
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      })
        // .then(function(response) { return response.json(); })
        // .then(function(responseData) {
        //   this.setState({ data : responseData})});

        .then((response) => response.json())
        .then((responseData) => {
          for (var i = 0; i < responseData.length; i++) {
            var object = responseData[i];
            arrayProjects.push(object);
          }
          this.setState({projects: arrayProjects})
        });

    }
  
    handleYup (card) {
      console.log("yup")
    }
  
    handleNope (card) {
      console.log("nope")
    }
  
    
    render() {
      return (
        <SwipeCards
          cards={this.state.projects}
          renderCard={(projectData) => <Project {...projectData} />}
          renderNoMoreProjects={() => <NoMoreProjects />}

          handleYup={this.handleYup}
          handleNope={this.handleNope}
          handleMaybe={this.handleMaybe}
          hasMaybeAction
        />
      )
    }
  }
  
  const styles = StyleSheet.create({
    card: {
      flex: 1,
      alignItems: 'center',
      borderRadius: 15,
      borderColor: 'grey',
      backgroundColor: 'white',
      borderWidth: 0.7,
      borderColor: '#50C878',
      elevation: 1,
      marginBottom: 10,
      marginTop: 30,
      width: width - 20,
    },
    thumbnail: {
      width: 300,
      height: 300,
    },
    text: {
      fontSize: 20,
      paddingTop: 10,
      paddingBottom: 10
    },
    projectTitle: {
      fontSize: 40,
      paddingTop: 20,
      paddingBottom: 10,
      borderColor: 'grey'
    },
    noMoreProjects: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    tieCont:{
      marginTop: 10,
      width: 80,
      height: 80,
      position: 'absolute',
      justifyContent: 'center',
      backgroundColor: 'white',
      marginTop: 25,
      borderRadius: width / 2,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: '#50C878'
    },
    header: {
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      width: width, 
      height: 60,
      backgroundColor: '#50C878',
    },
    tie: {
      width: 70,
      height: 70,
      resizeMode: 'cover'
    },
    nameCont: {
        flex: 1,
        marginTop: 60,
    },
    infoCont: {
        flex: 1,
        paddingBottom: 10,
        borderBottomWidth: 0.7,
        borderColor: 'grey',
        width: width,
        alignItems: 'center'
        
    },
    name:{
      fontSize: 20,
      color: 'grey'
    },
    info:{
      fontSize: 16,
      color: 'grey',
    },
    projectCont: {
      flex: 9,
      alignItems: 'center'
    }
  })