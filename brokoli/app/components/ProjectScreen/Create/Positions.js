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

var tempArr = []

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
            nrOfBrokoli: 0,
            experience: "1",
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
            tempArr.push(this.state.position)
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

      }

      _renderBrokolis(){
        var rows = []
        for(let i=1; i <= 5; i++)
        {
            rows.push(

               <View key = {i}>

                   <Image onPress={(i)=>this._grapBrokoli(i)} style = {styles.icon} source={require('../../../../img/icons/brokoli.png')}  />

                   </View>
            )
        }
        return(
            <View style={styles.expContainer}>
                {rows}
                </View>
        )
      }

      _grapBrokoli(i){
            this.state.nrOfBrokoli = i
            this.setState(function(prevState,props){
                return {nrOfBrokoli: prevState.nrOfBrokoli}
            })
            console.log('BrokoliNr: ', this.state.nrOfBrokoli )
      }

      _grapExperience = (experience) => {

        this.state.experience = experience
        this.setState(function(prevState,props){
            return {experience: prevState.experience}
        })

        console.log("Experience: ", this.state.experience)
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

        return(
            <View style={styles.container}>

            <View style={styles.posForm}>

                <View style={styles.inputContainer}>
                   
                <View style={styles.posInputContainer}>

                    <TextInput placeholder='position'
                               style={styles.input}
                               onChangeText={(text) => this._grabPosition(text)}
                               value={this.state.position}/>

                </View>

                <View style={styles.expInput}>

                    <Picker
                        selectedValue={this.state.experience}
                        onValueChange={(experience) => this._grapExperience(experience)}
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
            renderItem={({ item }) => (
                <View style={styles.posContainer}>
                <Text style={styles.pos}> {item} </Text>
                </View>
            )}
            keyExtractor={item => item}
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
        flex: 4,
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
    },
    expInput: {
        borderWidth: 2,
        borderColor: 'grey',
        backgroundColor: '#F8F9FB',
        borderRadius: 5,
        marginRight: 5,
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
        width: 27,
        height: 27,
        resizeMode: 'contain'
    },



})
