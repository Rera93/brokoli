import React, { Component } from 'react';
import {ScrollView,
        StyleSheet, 
        Text, 
        View, 
        Image, 
        Dimensions,
        TouchableOpacity,
        TouchableWithoutFeedback,
        FlatList} from 'react-native';

import SwipeCards from '../../lib/SwipeCards'
import Modal from 'react-native-modal'
import * as Animatable from 'react-native-animatable'
import Swiper from 'react-native-deck-swiper'

const window = Dimensions.get('window');
const width = window.width

import tie from '../../../img/icons/tie.png'

class Project extends React.Component {
    constructor(props) {
      super(props);
      
    }

    //Alan you used this format to fetch positions from db  {this.props.doc.positions}

   

     render() {
      return (
        
        <View style={styles.card}>

          

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
  
  export default class Swipe extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        projects: [],
        bookmark: false,
        isInfoVisible: false,
        applicants: 17,
        brokoliCounter: 0,
        totalBrokolis : 17,
        isExceedBrokolisVisible: false,
        posData: [
                    {pos: 'Java Developer', exp: 4, posNr: 2},
                    {pos: 'React Native Architect', exp: 2, posNr: 2},
                    {pos: 'Financial Analyst', exp: 3, posNr: 1},
                    {pos: 'Managerial Accountant', exp: 5, posNr: 1},
                    {pos: 'C# Software Engineer', exp: 4, posNr: 1},
                    {pos: 'Unit Tester', exp: 1, posNr: 3},

        ],
        brokolis: [true,false,false,false,false],
        cards: [
          {projectOwner: 'Alan Andrade', title: 'Brokoli', abstract: 'someAbstract', header: 'Tinder for Project. Bringing people and projects together in a virtual environment.'},
          {projectOwner: 'Brigel Pineti', title: 'Finding Dory', abstract: 'someAbstract1', header: 'I like purple shells.'},
        ]
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
        .then((response) => response.json())
        .then((responseData) => {
          for (var i = 0; i < responseData.length; i++) {
            var object = responseData[i];
            arrayProjects.push(object);
          }
          this.setState({projects: arrayProjects})
         
        });

        console.log('Projects: ', this.state.projects)

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

    _renderModalInfo = ({card}) =>
    (

      <View style={{flex: 1}}>

      <View style={styles.infoHeader}>


              <View style={{flex: 3,flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', paddingLeft: 10}}> 

                <Image source={require('../../../img/icons/applicants.png')} style={[styles.icon, {tintColor: 'white'}]} />

                <Text style={[styles.title, {color: 'white'}]}> {this.state.applicants} </Text> 

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
      
          <Text style={[styles.title, {color: 'grey'}]}>{card.abstract}</Text>

          </View>
      
              
      </View>
      </View>
    )

    _giveBrokoli()
    { 

      if(this.state.brokoliCounter < 5)
      {
      //increment if brokoliCounter is less than or equal to 5
      this._incrementBrokoliCounter()

      this.state.totalBrokolis = this.state.totalBrokolis + 1
      this.setState(function(prevState, props){
        return { totalBrokolis: this.state.totalBrokolis}
      })

      console.log('Brokolis: ', this.state.totalBrokolis)
      }
      else{
        
        this._toggleExceedBrokolis()
        
      }
    }

    _takeBrokoli()
    {
      if(this.state.brokoliCounter > 0)
      {
      //decrement if brokoliCounter is greater than or equal to 0
      this._decrementBrokoliCounter()

      this.state.totalBrokolis = this.state.totalBrokolis - 1
      this.setState(function(prevState, props){
        return { totalBrokolis: this.state.totalBrokolis}
      })

      console.log('Brokolis: ', this.state.totalBrokolis)
      }
    }

    

    _incrementBrokoliCounter()
    {    
     
        this.state.brokoliCounter = this.state.brokoliCounter + 1
        this.setState(function(prevState, props){
          return { brokoliCounter: this.state.brokoliCounter}
        })

        console.log('BrokoliCount: ', this.state.brokoliCounter)
      
    }

    _decrementBrokoliCounter()
    {
      
        this.state.brokoliCounter = this.state.brokoliCounter - 1
        this.setState(function(prevState, props){
          return { brokoliCounter: this.state.brokoliCounter}
        })

        console.log('BrokoliCount: ', this.state.brokoliCounter)
    }

    _renderExceedBrokolis = () => (

      <View style={[styles.modalContent, {backgroundColor: '#254D32'}]}>
      
          <Text style={[styles.title, {color: 'white'}]}>No more than 5 brokoli's can be given to a project.</Text>
      
          <View style={{flexDirection: 'row'}}>
      
                              <TouchableOpacity style={[styles.button, {backgroundColor: '#A7333F'}]} 
                                              onPress={() => this._toggleExceedBrokolis()}>
                              <Text style={[styles.btnTxt, {color: 'white'}]}>Understood</Text>
              
                              </TouchableOpacity>
      
                          </View>
      
                      </View>


    )

    _toggleExceedBrokolis(){

      this.state.isExceedBrokolisVisible = !this.state.isExceedBrokolisVisible
      this.setState(function(prevState, props){
        return { isExceedBrokolisVisible: prevState.isExceedBrokolisVisible}
      })
      console.log('BrokoliModal: ', this.state.isExceedBrokolisVisible)
    }

    _renderSeparator = () => {
      return (
        <View
          style={{
            height: 0.5,
            width: width - 10,
            backgroundColor: "#C7C7CD",
          }}
        />
      )
  }
  _renderBrokolis = ({item}) =>{
    var rows = []
    for(let i=1; i <= this.state.brokolis.length; i++)
    {
        rows.push(

           <View key = {i}>

               <Image  style = {[styles.brokolIcon,{tintColor: i<=item.exp ? '#42D260' : '#C7C7CD'}]} 
                       source={require('../../../img/icons/broccoli.png')}  />

               </View>
        )
    }
    return(
        <View style={styles.expContainer}>
            {rows}
            </View>
    )
  }
  
    
    render() {
      return (

       

        <Swiper
            cards={this.state.cards}
            renderCard={(card) => {
                return (
                  <View style={styles.card} card={card}>
                  <View style = {styles.header}>

              <TouchableOpacity style={styles.iCont} onPress={() => this._toggleInfoModal()}>
                <Image source={require('../../../img/icons/info.png')} style={styles.icon} />
              </TouchableOpacity> 

              <View style={styles.titleCont}>
                <Text style={styles.title}> {card.title} </Text>
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

          <View style={styles.body}>

            <View style={styles.headerCont}>
              <Text style={styles.headerTitle}>{card.header}</Text>
            </View>

            <View style={styles.posiCont}>
            
            

                  <FlatList
          extraData={this.state}
          data={this.state.posData}
          renderItem={({ item, index }) => (
                <View item={item} index={index} style={styles.itemCont}> 
                <Text style={styles.item}>{item.pos}</Text>
                <Text style={styles.item}>{item.posNr} </Text> 
                {this._renderBrokolis({item})}  
                
              </View>   
      
          )}
          keyExtractor={item => item.pos}
        />

          
                   
            </View>
          </View>

          <View style={styles.footer}> 

              <View style={{flex:1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingLeft: 5}}>
             
                <Image source={require('../../../img/icons/profile_pic.png')} style={{resizeMode: 'center', width: 40, height: 40}}  />
                <Text style={{fontSize: 20, fontWeight: '100', color: '#C7C7CD', paddingLeft: 5}}> {card.projectOwner} </Text>
                     
              </View>

              <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>

                <View style={{flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'flex-end', paddingRight: 10}}> 

                  <Text style={{fontSize: 20, fontWeight: '100',paddingRight: 5, color: this.state.brokoliCounter == 1 ? '#85c59a' : 
                                                                                        this.state.brokoliCounter == 2 ? '#5eb179' : 
                                                                                        this.state.brokoliCounter == 3 ? '#4b9c66' : 
                                                                                        this.state.brokoliCounter == 4 ? '#38754c' : 
                                                                                        this.state.brokoliCounter == 5 ? '#2b5a3b' : '#C7C7CD'}}> 
                        {this.state.totalBrokolis} 
                        </Text>

                  <TouchableWithoutFeedback onPress={() => this._giveBrokoli()}
                                            onLongPress={() => this._takeBrokoli()}
                                            style={{borderWidth: 0.5}}>

                        <Animatable.Image source={require('../../../img/icons/brokoli-counter.png') } 
                                          animation={this.state.brokoliCounter == 5 ? 'rubberBand' : ''}
                                          style={{resizeMode: 'center', width: 40, height: 40, tintColor: this.state.brokoliCounter == 1 ? '#85c59a' : 
                                                                                              this.state.brokoliCounter == 2 ? '#5eb179' : 
                                                                                              this.state.brokoliCounter == 3 ? '#4b9c66' : 
                                                                                              this.state.brokoliCounter == 4 ? '#38754c' : 
                                                                                              this.state.brokoliCounter == 5 ? '#2b5a3b' : '#C7C7CD'}} />
                  </TouchableWithoutFeedback>

                  </View>


                
                </View>



            </View>

          <Modal isVisible = {this.state.isInfoVisible}
                         animationIn={'slideInLeft'}
                         animationOut={'slideOutRight'}
                         onBackdropPress={() => this.setState({ isInfoVisible: false })}
                         avoidKeyboard={true}>

                         {this._renderModalInfo({card})}

                  </Modal>  

            <Modal isVisible = {this.state.isExceedBrokolisVisible}
                   animationIn={'slideInLeft'}
                   animationOut={'slideOutRight'}
                   onBackdropPress={() => this.setState({ isExceedBrokolisVisible: false })}>

                         {this._renderExceedBrokolis()}

                  </Modal> 
                  </View>
                )
            }}
            onSwiped={(cardIndex) => {console.log(cardIndex)}}
            onSwipedAll={() => {console.log('onSwipedAll')}}
            cardIndex={0}
            backgroundColor={'#42D260'}>
        </Swiper>

        
      )
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF'
    },
    card: {
      flex: 1,
      borderRadius: 4,
      borderWidth: 2,
      borderColor: '#E8E8E8',
      justifyContent: 'center',
      backgroundColor: 'white',
      marginBottom: 40,
    },
    header: {
      flexDirection: 'row',
      flex: 1,
      backgroundColor: 'white',
    },
    body: {
      flex: 8,
    },
    titleCont:{
      flex: 3,
      alignItems: 'center',
      justifyContent: 'center'
    },
    posiCont: {
      flex: 6,
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
      width: 25,
      height: 25,
      resizeMode: 'center',
      tintColor: '#42D260'
    },
    title: {
      fontSize: 20,
      fontWeight: '400',
      color: '#42D260'
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
    footer:{
      flex: 1,
      backgroundColor: 'white',
      flexDirection: 'row',
      borderTopWidth: 0.5,
      borderColor: '#C7C7CD',
      justifyContent: 'space-between'
    
    },
    button: {
      padding: 12,
      margin: 16,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    modalContent: {
      backgroundColor: 'white',
      padding: 22,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    headerCont: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'center',
      borderBottomWidth: 0.5,
      borderColor: '#C7C7CD',
      width: width - 45,
      paddingLeft: 10,
      paddingRight: 10
    },
    headerTitle: {
      fontSize: 17,
      fontWeight: '400',
      color: '#C7C7CD',
    },
    brokolIcon:{
      width: 20,
      height: 20,
      resizeMode: 'center'
    },
    itemCont:{
      flex: 1,
      backgroundColor: 'white',
      flexDirection: 'row',
      marginLeft: 10,
      marginRight: 10,
      paddingTop: 10,
      paddingBottom: 10
    },
    expContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 5,
      marginBottom: 5
  },
  })