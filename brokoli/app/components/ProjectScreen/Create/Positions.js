'use strict'
import React from 'react';
import { StyleSheet, 
         Text, 
         TextInput, 
         Alert, 
         ScrollView, 
         View,
         TouchableOpacity,
         Dimensions,
         Image,
         FlatList
         } from 'react-native';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

import FloatingAction from '../../FloatingComponents/FloatingAction';
import { Picker } from 'react-native-picker-dropdown'
import Swipeout from 'react-native-swipeout'

var tempArr = []
var valueToPush = new Array ()

export default class Positions extends React.Component {


    static navigationOptions = {
        title: 'Positions',
        headerStyle: { backgroundColor: '#42D260', marginTop: 24 },
        headerTitleStyle: { color: 'white' },
      };

    constructor(props){
        super(props)

        this.state = {
            flip: false,
            positions : [],
            position : '',
            actionButtonVisible: true,
            experience: "1",
            brokolis: [true,false,false,false,false],
            tempExp: "1",
            nrOfPos: '1',
            activeRowKey : null
        }

    }


    
    offset = 0;
    
      handleScroll = (event) => {
        const currentOffset = event.nativeEvent.contentOffset.y;
    
        if (currentOffset <= 0) {
          this.setState({
            actionButtonVisible: true
          });
    
          return;
        }
    
        const direction = currentOffset > this.offset ? 'down' : 'up';
        this.offset = currentOffset;
    
        if (this.state.actionButtonVisible !== direction) {
          this.setState({
            actionButtonVisible: direction === 'up'
          });
        }
      }

      _grabPosition = (text) => {
          this.state.position = text
          this.setState(function(prevState,props){
              return {position: prevState.position}
          })
          console.log('Position: ', this.state.position)

          this._flip()
      }

      _flip(){

      if(this.state.position != '')
      {
          this.state.flip = true
          this.setState(function(prevState,props){
              return {flip: prevState.flip}
          })
      }
      else {
        this.state.flip = false
        this.setState(function(prevState,props){
            return {flip: prevState.flip}
        })

      }
      
      console.log('Flip: ', this.state.flip)

    }

      _onAdd(){
            tempArr.push({pos: this.state.position, exp: this.state.experience, posNr: this.state.nrOfPos})
            console.log('tempArr: ', tempArr)
            this.state.positions = tempArr
            this.setState(function(prevState,props){
                return {positions: prevState.positions}
            })
            console.log('posArr: ', this.state.positions)
            //Release text inputs value
            this.state.position = ''
            this.setState(function(prevState,props){
                return {position: prevState.position}
            })
            this._flip()
            //Release experience value
            this.state.experience = "1"
            this.setState(function(prevState,props){
                return {experience: prevState.experience}
            })
            //Release number of positions value
            this.state.nrOfPos = "1"
            this.setState(function(prevState,props){
                return {nrOfPos: prevState.nrOfPos}
            })

            


      }

      _renderBrokolis = ({item}) =>{
        var rows = []
        console.log('Exp: ', item.exp)
        for(let i=1; i <= this.state.brokolis.length; i++)
        {
            rows.push(

               <View key = {i}>

                   <Image  style = {[styles.icon,{tintColor: i<=item.exp ? '#42D260' : 'grey'}]} 
                           source={require('../../../../img/icons/broccoli.png')}  />

                   </View>
            )
        }
        return(
            <View style={styles.expContainer}>
            <Text style={styles.itemExp} >Experience Level: </Text>
                {rows}
                </View>
        )
      }

      _grabExperience = (experience) => {

        this.state.experience = experience
        this.setState(function(prevState,props){
            return {experience: prevState.experience}
        })
        console.log("Experience: ", this.state.experience)

      }

      _grabNrOfPos = (nrOfPos) => {

        this.state.nrOfPos = nrOfPos
        this.setState(function(prevState,props){
            return {nrOfPos: prevState.nrOfPos}
        })
        console.log("Positions Number: ", this.state.nrOfPos)
      }
      

    render(){
        const { navigate } = this.props.navigation

        const { actionButtonVisible } = this.state;

        const actions = [{
            text: 'Done',
            icon: require('../../../../img/icons/done.png'),
            name: 'bt_done',
            position: 1
          }];

        const swipeSettings = {
            autoClose: true,
            onClose: (secId, rowId, direction) => {
                if(this.state.activeRowKey != null)
                {
                    this.state.activeRowKey = null 
                    this.setState(function(prevState, props){
                        return {activeRowKey: prevState.activeRowKey}
                    })
                }
            },
            onOpen: (secId, rowId, direction) => {
                console.log(this.props.item)
                this.state.activeRowKey = this.props.item
                this.setState(function(prevState, props){
                    return {activeRowKey: prevState.activeRowKey}
                })

            },
            right: [
                {
                    onPress: () => {

                        Alert.alert(
                            'Alert',
                            'Are you sure you want to delete?',
                            [
                                {text: 'No', onPress: () => console.log('Cancel Pressed'), style:'cancel'},
                                {text: 'Yes', onPress: () => {

                                    this.state.positions.splice(this.props.index, 1);

                                }},
                            ],
                            {cancelable: true}
                        );

                    },
                    text: 'Delete', type: 'delete'
                }
            ],
            rowId: this.props.index,
            secId: 1,

        }

        return(
            <View style={styles.container}>

            <View style={styles.posForm}>

                <View style={styles.inputContainer}>
                   
                <View style={styles.posInputContainer}>

                    <TextInput placeholder='Position'
                               style={styles.input}
                               onChangeText={(text) => this._grabPosition(text)}
                               value={this.state.position}/>

                </View>

                <View style={{flexDirection:'row'}}>

                <View style={styles.expInput}>

                    <Picker
                        selectedValue={this.state.experience}
                        onValueChange={(experience) => this._grabExperience(experience)}
                        mode="dropdown"
                        itemStyle = {{fontSize: 12}}
                        style={{
                        color: '#C7C7CD',
                        height: 40,
                        }}>
                        <Picker.Item label="Beginner (basic knowledge)" value="1" />
                        <Picker.Item label="Novice (limited experience)" value="2" />
                        <Picker.Item label="Intermediate (practical application)" value="3" />
                        <Picker.Item label="Advanced (applied theory)" value="4" />
                        <Picker.Item label="Expert (recognized authority)" value="5" />
                    </Picker>
                 
                </View>

                <View style={styles.nrOfPosInput}>

                    <Picker
                        selectedValue={this.state.nrOfPos}
                        onValueChange={(nrOfPos) => this._grabNrOfPos(nrOfPos)}
                        mode="dropdown"
                        itemStyle = {{fontSize: 10}}
                        style={{
                        color: '#C7C7CD',
                        height: 40,
                        }}>
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="3" value="3" />
                        <Picker.Item label="4" value="4" />
                        <Picker.Item label="5" value="5" />
                    </Picker>
                 
                </View>

                </View>


                </View>
                   
                <TouchableOpacity  disabled={!this.state.flip}
                                   style={[styles.btnContainer, {backgroundColor: this.state.flip ? '#42D260' : 'white' }]}
                                   onPress={() => this._onAdd()}>
                        <Text style={[styles.btnText,{color: this.state.flip ? 'white' : '#42D260'}]}> ADD </Text>
                </TouchableOpacity>
            
            </View>

            

            <FlatList
            extraData={this.state}
            data={this.state.positions}
            renderItem={({ item, index }) => (
                <Swipeout {...swipeSettings} item={item} index={index}>
                <View style={styles.posContainer}>
                <Text style={styles.pos}>Position: {item.pos} </Text>
                {this._renderBrokolis({item})} 
                <Text style={styles.pos}>Number of Positions: {item.posNr} </Text>    
                </View>
                </Swipeout>
            )}
            keyExtractor={item => item.pos}
            style={styles.posList}
          />
               

                <FloatingAction  actions={actions}
                           visible={actionButtonVisible}
                           overrideWithAction
                           onPressItem={() => Alert.alert('Your project has been successfully created.')}/>
            </View>
        )
    }



}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    posForm: {
        flexDirection: 'row',
        padding: 10,
    },
    inputContainer: {
        flex: 6,
    },
    input: {
        borderWidth: 2,
        borderColor: 'grey',
        backgroundColor: '#F8F9FB',
        borderRadius: 5,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 15,
        paddingRight: 15,
        marginRight: 5,
        marginBottom: 5,
        color: '#C7C7CD',
    },
    expInput: {
        flex: 5,
        borderWidth: 2,
        borderColor: 'grey',
        backgroundColor: '#F8F9FB',
        borderRadius: 5,
        marginRight: 5,
    },
    nrOfPosInput: {
        flex: 1,
        borderWidth: 2,
        borderColor: 'grey',
        backgroundColor: '#F8F9FB',
        borderRadius: 5,
        marginRight: 5,
        marginLeft: 5,
    },
    btnContainer: {
        flex: 1,
        borderWidth: 2,
        borderColor: '#42D260',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        marginLeft: 5,
    },
    btnText: {
        fontSize: 16,
        fontWeight: '600',
    },
    btnIcon:{
        height: 14,
        width: 14,
        resizeMode: 'contain'
    },
    posContainer:{
        width: width - 20,
        backgroundColor: 'white',
        marginBottom: 5,
        marginLeft: 5,
        marginRight: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 20,
        paddingTop: 20,
      },
    pos: {
        color: 'grey',
        fontSize: 17,
        fontWeight: '400'
    },
    icon: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },
    expContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 5
    },
    itemExp: {
        fontSize: 17,
        color: 'grey',
        fontWeight: '400'
    }



})
