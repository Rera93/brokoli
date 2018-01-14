import React from 'react';
import { StyleSheet, 
         Text, 
         Image, 
         View,
         FlatList,
         TouchableOpacity,
         Dimensions } from 'react-native';

import Modal from 'react-native-modal'
import * as Animatable from 'react-native-animatable'
import Swiper from 'react-native-deck-swiper'

const window = Dimensions.get('window');
const width = window.width
var tempArr = []

var tempExampleArr = [{name: 'Alan Andrade', picture: require('../../../img/icons/ppl2.png'), header: 'Time you enjoy wasting was not wasted',
skillData: [
 {skill: 'Java Developer', exp: 4}, 
 {pos: 'React Native Architect', exp: 2},
 {pos: 'Financial Analyst', exp: 3},
 {pos: 'Managerial Accountant', exp: 5},
 {pos: 'C# Software Engineer', exp: 4}]}]

export default class People extends React.Component{

    static navigationOptions = ({ navigation}) => ({
        title: `${navigation.state.params.selectedItem.position}`,
        headerStyle: { backgroundColor: '#42D260', marginTop: 24 },
        headerTitleStyle: { color: 'white' },
      });

      constructor(props){
          super(props)

          this.state = {
              positionId: null,
              brokolis: [true,false,false,false,false],
              isEducationModalVisible: false,
              isJobExpModalVisible: false,
              isProjectExpModalVisible: false,
              isSkillsModalVisible: false,
              cards: [
                {name: 'Alan Andrade', picture: require('../../../img/icons/ppl1.png'), header: 'Time you enjoy wasting was not wasted',
                 skillData: [
                  {skill: 'Java Developer', exp: 4}, 
                  {pos: 'React Native Architect', exp: 2},
                  {pos: 'Financial Analyst', exp: 3},
                  {pos: 'Managerial Accountant', exp: 5},
                  {pos: 'C# Software Engineer', exp: 4}]},
      
                {name: 'Alan Andrade', picture: require('../../../img/icons/ppl3.png'), header: 'Time you enjoy wasting was not wasted',
                 skillData: [
                        {skill: 'Java Developer1', exp: 4}, 
                        {pos: 'React Native Architect', exp: 2},
                        {pos: 'Financial Analyst', exp: 3},
                        {pos: 'Managerial Accountant', exp: 5},
                        {pos: 'C# Software Engineer', exp: 4}],
              }],
              cardIndex: 0,
            }
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
          
      

      componentDidMount(){
        
                this.state.positionId = this.props.navigation.state.params.selectedItem.id
                this.setState(function(prevState, props){
                     return { positionId: prevState.positionId }
                })
                console.log('Passed positionId: ', this.state.positionId)
                // Use positionId to sent request to db and fetch the correct project. 
                this._fetchCorrenspondingProject()
            }
        
            _fetchCorrenspondingProject(){
                
                        /*
                            Store the array as the state of peopleData define above.
                            The code will generate the right data in the right position 
                            if you keep the format of key-value pairs the same.
                        */
                      }

            _toggleEducationModel(){
                this.state.isEducationModalVisible = !this.state.isEducationModalVisible
                this.setState(function(prevState, props){
                    return { isEducationModalVisible: prevState.isEducationModalVisible }
                })
                console.log('isEducationModalVisible: ', this.state.isEducationModalVisible)
            }

            _toggleJobModel(){
                this.state.isJobExpModalVisible = !this.state.isJobExpModalVisible
                this.setState(function(prevState, props){
                    return { isJobExpModalVisible: prevState.isJobExpModalVisible }
                })
                console.log('isJobExpModalVisible: ', this.state.isJobExpModalVisible)
            }

            _toggleEducationModel(){
                this.state.isProjectExpModalVisible = !this.state.isProjectExpModalVisible
                this.setState(function(prevState, props){
                    return { isProjectExpModalVisible: prevState.isProjectExpModalVisible }
                })
                console.log('isProjectExpModalVisible: ', this.state.isProjectExpModalVisible)
            }

            _fetchCards(){
                
                    this.state.cards = tempExampleArr
                    this.setState(function(prevState, props){
                      return { cards: prevState.cards}
                    })
                
                    console.log('New cards: ', this.state.cards)
                
                  }
                
                  _setIndexToZero(){
                
                    this.state.cardIndex = 0
                    this.setState(function(prevState, props){
                      return { cardIndex: prevState.cardIndex}
                    })
                  }
                   _incrementCardIndex(cardIndex){
      this.state.cardIndex = cardIndex + 1
      this.setState(function(prevState, props){
        return { cardIndex: prevState.cardIndex }
      })
      console.log('Card Index: ', this.state.cardIndex)
    }

    _renderModalEducation = () => (
        <View>

            </View>
    ) 

    _renderModalJobExp = () => (
        <View>

            </View>
    ) 

    _renderModalProjectExp = () => (
        <View>

            </View>
    ) 

    _renderModalSkills = () => (
        <View>

            </View>
    ) 
                

    render(){

        return(
            <Swiper
            cards={this.state.cards}
            renderCard={(card) => {
                if(this.state.cardIndex < this.state.cards.length )
                {
                return (
                  <View style={styles.card} card={card}>

                  {/*Header*/}
                  <View style = {{flex: 2, justifyContent: 'center', alignItems: 'center', borderBottomWidth: 0.7, borderColor: '#E8E8E8',}}>

                  
                  <View style={{borderWidth: 2, borderColor: '#42D260', borderRadius: 100, justifyContent: 'center', alignItems: 'center'}}>

                      <Image source={card.picture}
                             style={{width: 100, height: 100, borderRadius: 55, padding: 30, resizeMode: 'center'}} />

                      </View>

                  <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 10, marginBottom: 10}}> 

                      <Text style={{fontSize: 20, color: '#C7C7CD', fontWeight: '300'}}> {card.name}  </Text>

                      </View>

                  <View style={{alignItems: 'center', justifyContent: 'center'}}> 

                      <Text style={{fontSize: 18.5, color: '#C7C7CD', fontWeight: '300'}}> {card.header}  </Text>

                      </View>   

          
           
          </View>


          <View style={{flex:2}}>


          </View>

          <View style={{flex: 1}}> 

             



            </View>

          <Modal isVisible = {this.state.isEducationModalVisible}
                         animationIn={'slideInLeft'}
                         animationOut={'slideOutRight'}
                         onBackdropPress={() => this.setState({ isEducationModalVisible: false })}>

                         {this._renderModalEducation()}

                  </Modal>  

            <Modal isVisible = {this.state.isJobExpModalVisible}
                   animationIn={'slideInLeft'}
                   animationOut={'slideOutRight'}
                   onBackdropPress={() => this.setState({ isJobExpModalVisible: false })}>

                         {this._renderModalJobExp()}

                  </Modal> 

                  <Modal isVisible = {this.state.isProjectExpModalVisible}
                   animationIn={'slideInLeft'}
                   animationOut={'slideOutRight'}
                   onBackdropPress={() => this.setState({ isProjectExpModalVisible: false })}>

                         {this._renderModalProjectExp()}

                  </Modal> 

                  <Modal isVisible = {this.state.isSkillsModalVisible}
                   animationIn={'slideInLeft'}
                   animationOut={'slideOutRight'}
                   onBackdropPress={() => this.setState({ isSkillsModalVisible: false })}>

                         {this._renderModalSkills()}

                  </Modal> 

                  </View>
                )
          }
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
              title: 'Nice Idea',
              style: {
                label: {
                  backgroundColor: 'white',
                  borderColor: '#42D260',
                  color: '#42D260',
                  borderWidth: 2
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }
              }
            }
          }}
            cardIndex={this.state.cardIndex}
            backgroundColor={'white'}
            onSwipedAll = { () => this._setIndexToZero() }
            onSwiped={(cardIndex) => this._incrementCardIndex(cardIndex)}
            cardVerticalMargin={20}
            animateOverlayLabelsOpacity
            animateCardOpacity>

            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

                    <TouchableOpacity onPress = { () => this._fetchCards()}>  

                      <Image source={require('../../../img/icons/brokoli.png')}
                             style={{resizeMode: 'center', width: 200, height: 200, tintColor: 'white'}}/>

                      </TouchableOpacity> 

                      <Text style={{color: 'white', fontWeight: '600', fontSize: 22}}> Tap Brokoli to fetch more people </Text>



                      </View>

            </Swiper>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#42D260',
        justifyContent: 'center',
        backgroundColor: 'white',
        marginBottom: 150,
      },
}) 