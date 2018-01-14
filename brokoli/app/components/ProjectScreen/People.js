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
              cards: [
                {name: 'Alan Andrade', picture: '', header: 'Time you enjoy wasting was not wasted',
                 skillData: [
                  {skill: 'Java Developer', exp: 4}, 
                  {pos: 'React Native Architect', exp: 2},
                  {pos: 'Financial Analyst', exp: 3},
                  {pos: 'Managerial Accountant', exp: 5},
                  {pos: 'C# Software Engineer', exp: 4}]},
      
                {name: 'Alan Andrade', picture: '', header: 'Time you enjoy wasting was not wasted',
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
                

    render(){

        return(
            <View>
                </View>
        )
    }
}