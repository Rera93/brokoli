import React, { Component } from 'react';
import {ScrollView,
        StyleSheet, 
        Text, 
        View, 
        Image, 
        Dimensions,
        TouchableOpacity,
        TouchableWithoutFeedback} from 'react-native';

import SwipeCards from '../../lib/SwipeCards'
import Modal from 'react-native-modal'

const window = Dimensions.get('window');
const width = window.width


import tie from '../../../img/icons/tie.png'

class Project extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
          bookmark: false,
          isInfoVisible: false,
          applicants: 17,
          projectAbstract: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremququo voluptas nulla pariatur?Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremququo voluptas nulla pariatur?Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremququo voluptas nulla pariatur.',
      }
      
    }

    _toogleBookmark()
    {
      this.state.bookmark = true
      this.setState(function(prevState, props){
        return {bookmark: prevState.bookmark}
      })
      console.log('Toogled Bookmark: ', this.state.bookmark)
    }

    _untoogleBookmark()
    {
      this.state.bookmark = false
      this.setState(function(prevState, props){
        return {bookmark: prevState.bookmark}
      })
      console.log('Untoogled Bookmark: ', this.state.bookmark)
    }
    
    _toggleInfoModal()
    {
      this.state.isInfoVisible = !this.state.isInfoVisible
      this.setState(function(prevState, props){
        return { isInfoVisible: prevState.isInfoVisible}
      })
      console.log('isInfoVisible: ', this.state.isInfoVisible)
    }

    _renderModalInfo = () =>
    (

      <View style={{flex: 1}}>

      <View style={styles.infoHeader}>


              <View style={{flex: 3,flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', paddingLeft: 10}}> 

                <Image source={require('../../../img/icons/applicants.png')} style={styles.icon} />

                <Text style={styles.title}> {this.state.applicants} </Text> 

                </View>
      
              <TouchableOpacity style={{alignItems: 'center', backgroundColor: '#A7333F', justifyContent: 'center', paddingRight: 10,paddingLeft: 10, borderTopRightRadius: 4,}}
                                onPress={()=> this._toggleInfoModal()}>
      
                        <Text style={[styles.btnTxt, {color: 'white'}]}>Close</Text>

                        </TouchableOpacity>



                        </View>
      
      <View style={styles.infoModalContent}>

          <View style={{paddingBottom: 10}}>

          <Text style={[styles.title, {fontWeight: '600', color: '#254D32'}]}>Project Abstract</Text>

          </View>

          <View style={{paddingTop: 10,}}>
      
          <Text style={[styles.title, {color: 'grey'}]}>{this.state.projectAbstract}</Text>

          </View>
      
              
      </View>
      </View>
    )
      
    

  
     render() {
      return (
        
        <View style={[styles.card]}>

          <View style = {styles.header}>

              <TouchableOpacity style={styles.iCont} onPress={() => this._toggleInfoModal()}>
                <Image source={require('../../../img/icons/info.png')} style={styles.icon} />
              </TouchableOpacity> 

              <View style={styles.titleCont}>
                <Text style={styles.title}> Project Title </Text>
              </View>

              <View style={styles.bookmarkCont}>
                <TouchableWithoutFeedback
                                  onPress={() => this._toogleBookmark()}
                                  onLongPress={() => this._untoogleBookmark()}>

                      <Image source={this.state.bookmark ? require('../../../img/icons/bookmark-fill.png')
                                      : require('../../../img/icons/bookmark-outline.png') } 
                                    style={styles.icon} />
                </TouchableWithoutFeedback>
              </View>

          
           
          </View>

          <View style = {styles.nameCont}>
            <Text style={styles.name}> firstName </Text>
          </View>

          <View style = {styles.infoCont}>
            <Text style={styles.info}> Master student at Radboud University Nijmegen </Text>
          </View>

          <View style={styles.projectCont}>

            <View style={styles.titleCont}>
              <Text style={styles.projectTitle}>{this.props.doc.name}</Text>
            </View>

            <View style={styles.abstractCont}>
              <Text style={styles.abstract}>{this.props.doc.description}</Text>
            </View>

            <View style={styles.posiCont}>
              <Text style={styles.positions}>Position(s) available in this project: {"\n"}
                   {this.props.doc.positions}</Text>
            </View>
          </View>

          <Modal isVisible = {this.state.isInfoVisible}
                         animationIn={'slideInLeft'}
                         animationOut={'slideOutRight'}>

                         {this._renderModalInfo()}

                  </Modal>   

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
      borderColor: 'grey',
      backgroundColor: 'white',
      borderWidth: 0.7,
      borderColor: '#50C878',
      elevation: 1,
      marginBottom: 10,
      marginTop: 30,
      width: width - 10,
    },
    text: {
      fontSize: 20,
      paddingTop: 10,
      paddingBottom: 10
    },
    projectTitle: {
      fontSize: 40,
      paddingBottom: 10,
      borderColor: 'grey'
    },
    noMoreProjects: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    header: {
      flexDirection: 'row',
      flex: 1,
      height: 60,
      backgroundColor: '#50C878',
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
      flex: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },
    titleCont:{
      flex: 3,
      alignItems: 'center',
      justifyContent: 'center'
    },
    abstractCont: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    abstract:{

    },
    posiCont: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    iCont: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-start',
      paddingLeft: 10,
    },
    bookmarkCont: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingRight: 10,
    },
    icon: {
      width: 20,
      height: 20,
      resizeMode: 'center',
      tintColor: 'white'
    },
    title: {
      fontSize: 20,
      fontWeight: '400',
      color: 'white'
    },
    button: {
      padding: 12,
      margin: 16,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    infoModalContent: {
      backgroundColor: 'white',
      padding: 22,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      borderBottomRightRadius: 4,
      borderBottomLeftRadius: 4,
      borderColor: '#C7C7CD',
      flex: 3,
    },
    infoHeader: {
      flexDirection: 'row', 
      justifyContent: 'center', 
      height: 40, 
      backgroundColor: '#254D32',
      borderTopRightRadius: 4,
      borderTopLeftRadius: 4,
    },
  })