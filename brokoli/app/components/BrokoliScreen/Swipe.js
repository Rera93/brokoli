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
var tempArr = []

  export default class Swipe extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        projects: [],
        isInfoVisible: false,
        applicants: 17,
        isExceedBrokolisVisible: false,
        brokolis: [true,false,false,false,false],

        /*The format of the cards is shown below. The info is hardcoded and need to be replaced with real data from db. 
          The db fields need to match the format below. Once fetching data from db, setState of the `cards`. 
          I believe setState will not work if you save data to cards directly. What you must do is to assign it to a temporary array 
          and then setState of cards grabbing value of temp array. I have created a global array called tempArr. 

          Use this format. 

          tempArr = dataFromDb
          this.state.cards = tempArr
          this.setState(function(prevState, props){
            return { cards: prevState.cards }
          })

          Also everytime you setState, set it like I did above. State has a tendency to remain one step behind since it manages new state
          requests synchronously. Dont do this: 
          
          this.setState(cards: tempArr)

          This is doing two things in one statement. 

          */

        cards: [
          {projectOwner: 'Alan Andrade', bookmark: true, brokoliCounter: 2, totalBrokolis: 17, applicants: 34, title: 'Brokoli1',
           abstract: 'someAbstract', header: 'Tinder for Project. Bringing people and projects together in a virtual environment.',
           posData: [
            {pos: 'Java Developer', exp: 4, posNr: 2},
            {pos: 'React Native Architect', exp: 2, posNr: 2},
            {pos: 'Financial Analyst', exp: 3, posNr: 1},
            {pos: 'Managerial Accountant', exp: 5, posNr: 1},
            {pos: 'C# Software Engineer', exp: 4, posNr: 1}]},

          {projectOwner: 'Brigel Pineti', bookmark: false, brokoliCounter: 4, totalBrokolis: 99, applicants: 8, title: 'Finding Dory1',
           abstract: 'someAbstract2', header: 'I like purple shells.',
           posData: [
            {pos: 'Java Developer1', exp: 4, posNr: 2},
            {pos: 'React Native Architect', exp: 2, posNr: 2},
            {pos: 'Financial Analyst', exp: 3, posNr: 1},
            {pos: 'Managerial Accountant', exp: 5, posNr: 1},
            {pos: 'C# Software Engineer', exp: 4, posNr: 1},
            {pos: 'Unit Tester', exp: 1, posNr: 3}]},

          {projectOwner: 'Alan Andrade', bookmark: true, brokoliCounter: 2, totalBrokolis: 17, applicants: 35, title: 'Brokoli2', 
           abstract: 'someAbstract', header: 'Tinder for Project. Bringing people and projects together in a virtual environment.',
           posData: [
            {pos: 'Java Developer2', exp: 4, posNr: 2},
            {pos: 'React Native Architect', exp: 2, posNr: 2},
            {pos: 'Financial Analyst', exp: 3, posNr: 1}]},

          {projectOwner: 'Brigel Pineti', bookmark: false, brokoliCounter: 4, totalBrokolis: 99, applicants: 9, title: 'Finding Dory2',
           abstract: 'someAbstract2', header: 'I like purple shells.',
           posData: [
            {pos: 'Java Developer3', exp: 4, posNr: 2},
            {pos: 'React Native Architect', exp: 2, posNr: 2},
            {pos: 'Financial Analyst', exp: 3, posNr: 1},
            {pos: 'Managerial Accountant', exp: 5, posNr: 1}]},
        ],
        cardIndex: 0,
        allCardsSwiped: false,
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

    _incrementCardIndex(cardIndex){
      this.state.cardIndex = cardIndex + 1
      this.setState(function(prevState, props){
        return { cardIndex: prevState.cardIndex }
      })
      console.log('Card Index: ', this.state.cardIndex)
    }
    _toogleBookmark()
    {
      this.state.cards[this.state.cardIndex].bookmark = true
      this.setState(function(prevState, props){
        return {cards: prevState.cards}
      })
      console.log('Toogled Bookmark: ', this.state.cards[this.state.cardIndex].bookmark)
    }

    _untoogleBookmark()
    {
      this.state.cards[this.state.cardIndex].bookmark = false
      this.setState(function(prevState, props){
        return {bookmark: prevState.bookmark}
      })
      console.log('Untoogled Bookmark: ', this.state.cards[this.state.cardIndex].bookmark)
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

                <Text style={[styles.title, {color: 'white'}]}> {this.state.cards[this.state.cardIndex].applicants} </Text> 

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
      
          <Text style={[styles.title, {color: 'grey'}]}>{this.state.cards[this.state.cardIndex].abstract}</Text>

          </View>
      
              
      </View>
      </View>
    )

    _giveBrokoli()
    { 

      if(this.state.cards[this.state.cardIndex].brokoliCounter < 5)
      {
      //increment if brokoliCounter is less than or equal to 5
      this._incrementBrokoliCounter()

      this.state.cards[this.state.cardIndex].totalBrokolis = this.state.cards[this.state.cardIndex].totalBrokolis + 1
      this.setState(function(prevState, props){
        return { cards: this.state.cards}
      })

      console.log('Brokolis: ', this.state.cards[this.state.cardIndex].totalBrokolis)
      }
      else{
        
        this._toggleExceedBrokolis()
        
      }
    }

    _takeBrokoli()
    {
      if(this.state.cards[this.state.cardIndex].brokoliCounter > 0)
      {
      //decrement if brokoliCounter is greater than or equal to 0
      this._decrementBrokoliCounter()

      this.state.cards[this.state.cardIndex].totalBrokolis = this.state.cards[this.state.cardIndex].totalBrokolis - 1
      this.setState(function(prevState, props){
        return { cards: this.state.cards}
      })

      console.log('Brokolis: ', this.state.cards[this.state.cardIndex].brokoliCounter)
      }
    }

    

    _incrementBrokoliCounter()
    {    
     
      this.state.cards[this.state.cardIndex].brokoliCounter = this.state.cards[this.state.cardIndex].brokoliCounter + 1
        this.setState(function(prevState, props){
          return { cards: prevState.cards}
        })

        console.log('BrokoliCount: ', this.state.cards[this.state.cardIndex].brokoliCounter)
      
    }

    _decrementBrokoliCounter()
    {
      
      this.state.cards[this.state.cardIndex].brokoliCounter = this.state.cards[this.state.cardIndex].brokoliCounter - 1
        this.setState(function(prevState, props){
          return { cards: prevState.cards}
        })

        console.log('BrokoliCount: ', this.state.cards[this.state.cardIndex].brokoliCounter)
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

  _allCardsSwiped(){

    this.state.allCardsSwiped = true
    this.setState(function(prevState, props){
      return { allCardsSwiped: prevState.allCardsSwiped}
    })
    console.log("All cards have been swiped. Deck is empty")
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

                      <Image source={card.bookmark ? require('../../../img/icons/bookmark-fill.png')
                                      : require('../../../img/icons/bookmark-outline.png') } 
                                    style={styles.icon} />
                </TouchableWithoutFeedback>
              </View>

          
           
          </View>

          <View style={styles.body}>

            <View style={styles.headerCont}>
              <Text style={styles.headerTitle}>{card.header}</Text>
            </View>

            <TouchableWithoutFeedback>

            <View style={styles.posiCont}>
            
            

                  <FlatList
          extraData={this.state}
          data={card.posData}
          renderItem={({ item, index }) => (

                <View style={{paddingTop: 10, paddingBottom: 10}}>
       

                  <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>

                  <View style={{flex: 3, justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 5}}>
                  <Text style={styles.itemText}>{item.pos}</Text>
                  </View>
                  {this._renderBrokolis({item})} 
                  </View> 

                  <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>

                  <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 5}}>
                  <Text style={[styles.itemText, {color: '#A7333F', padding: 5}]}>{item.posNr} left</Text>
                  </View>

                  <View style={{alignContent: 'flex-end', alignItems: 'center', justifyContent: 'center', marginRight: 5, backgroundColor: '#42D260', borderRadius: 5}}> 

                  <Text style={[styles.itemText, {color: 'white', padding: 5}]}>Apply</Text>

                    </View>
                  
                  </View> 

              </View>


              
      
          )}
          keyExtractor={item => item.pos}
        />

          
                   
            </View>
            </TouchableWithoutFeedback>
          </View>

          <View style={styles.footer}> 

              <View style={{flex:1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingLeft: 5}}>
             
                <Image source={require('../../../img/icons/profile_pic.png')} style={{resizeMode: 'center', width: 40, height: 40}}  />
                <Text style={{fontSize: 20, fontWeight: '100', color: '#C7C7CD', paddingLeft: 5}}> {card.projectOwner} </Text>
                     
              </View>

              <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>

                <View style={{flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'flex-end', paddingRight: 10}}> 

                  <Text style={{fontSize: 20, fontWeight: '100',paddingRight: 5, color: card.brokoliCounter == 1 ? '#85c59a' : 
                                                                                        card.brokoliCounter == 2 ? '#5eb179' : 
                                                                                        card.brokoliCounter == 3 ? '#4b9c66' : 
                                                                                        card.brokoliCounter == 4 ? '#38754c' : 
                                                                                        card.brokoliCounter == 5 ? '#2b5a3b' : '#C7C7CD'}}> 
                        {card.totalBrokolis} 
                        </Text>

                  <TouchableWithoutFeedback onPress={() => this._giveBrokoli()}
                                            onLongPress={() => this._takeBrokoli()}
                                            style={{borderWidth: 0.5}}>

                        <Animatable.Image source={require('../../../img/icons/brokoli-counter.png') } 
                                          animation={card.brokoliCounter == 5 ? 'rubberBand' : ''}
                                          style={{resizeMode: 'center', width: 40, height: 40, tintColor: card.brokoliCounter == 1 ? '#85c59a' : 
                                                                                              card.brokoliCounter == 2 ? '#5eb179' : 
                                                                                              card.brokoliCounter == 3 ? '#4b9c66' : 
                                                                                              card.brokoliCounter == 4 ? '#38754c' : 
                                                                                              card.brokoliCounter == 5 ? '#2b5a3b' : '#C7C7CD'}} />
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
             overlayLabels={{
            bottom: {
              title: 'Bleah',
              style: {
                label: {
                  backgroundColor: 'white',
                  borderColor: '#A7333F',
                  color: '#A7333F',
                  borderWidth: 2
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }
              }
            },
            left: {
              title: 'Discard',
              style: {
                label: {
                  backgroundColor: 'white',
                  borderColor: '#A7333F',
                  color: '#A7333F',
                  borderWidth: 2
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  marginRight: 10
                }
              }
            },
            right: {
              title: 'Discard',
              style: {
                label: {
                  backgroundColor: 'white',
                  borderColor: '#A7333F',
                  color: '#A7333F',
                  borderWidth: 2
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  marginLeft: 10,
                }
              }
            },
            top: {
              title: 'Nice',
              style: {
                label: {
                  backgroundColor: 'white',
                  borderColor: '#42D260',
                  color: '#42D260',
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }
              }
            }
          }}
            onSwipedAll={() => this._allCardsSwiped() }
            cardIndex={this.state.cardIndex}
            backgroundColor={'#42D260'}
            onSwiped={(cardIndex) => this._incrementCardIndex(cardIndex)}
            cardVerticalMargin={40}
            animateOverlayLabelsOpacity
            animateCardOpacity>
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
      fontSize: 18,
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
      marginTop: 10,
      marginBottom: 10
    },
    expContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 5,
      marginBottom: 5,
      marginRight: 20,

  },
  itemText: {
    fontSize: 17,
    fontWeight: '300',
    color: '#C7C7CD'
  }
  })