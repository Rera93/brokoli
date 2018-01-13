import React from 'react';
import { StyleSheet, 
         Text, 
         TouchableOpacity, 
         View, 
         Dimensions, 
         TextInput,
         FlatList,
         Image,
         Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';

import FloatingAction from '../../FloatingComponents/FloatingAction';

import { Picker } from 'react-native-picker-dropdown'
import Modal from 'react-native-modal'

const width = Dimensions.get('window').width

var tempArr = []
var valueToPush = new Array ()

export default class Skills extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            flip: false,
            skills : [],
            skill : '',
            actionButtonVisible: true,
            experience: "1",
            brokolis: [true,false,false,false,false],
            tempExp: "1",
            index: null,
            isModalDeleteVisible: false,
            countSkills: 0, //bound to 5 max
            flipReg: false,
            isModalSkillVisible: false
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

    _renderDeleteModalContent = () => (
        
                    <View style={[styles.modalContent, {backgroundColor: '#254D32'}]}>
                    
                        <Text style={[styles.title, {color: 'white'}]}>Are you sure you want to delete the selected skill from your profile?</Text>
                    
                        <View style={{flexDirection: 'row'}}>
                    
                                            <TouchableOpacity 
                                                            style={[styles.button,{backgroundColor: 'white'}]} 
                                                            onPress={() => this._deleteItem() }>
                                            <Text style={[styles.btnTxt, {color: '#254D32'}]}>Ok</Text>
                            
                                            </TouchableOpacity>
                    
                                            <TouchableOpacity style={[styles.button, {backgroundColor: '#A7333F'}]} 
                                                            onPress={() => this._untoggleModalDelete()}>
                                            <Text style={[styles.btnTxt, {color: 'white'}]}>Cancel</Text>
                            
                                            </TouchableOpacity>
                    
                                        </View>
                    
                                    </View>
                    
                  )

    _toggleModalDelete = ({item, index}) => {
        
                    this.state.index = index 
                    this.setState(function(prevState, props){
                        return { index: prevState.index }
                    })
            
                    console.log('Selected Index: ', this.state.index)
            
                    this.state.isModalDeleteVisible = true
                    this.setState(function(prevState, props){
                        return {isModalDeleteVisible: prevState.isModalDeleteVisible}
                    })
                    console.log('deleteModal: ', this.state.isModalDeleteVisible)
                  }
        
                  _untoggleModalDelete(){
        
                    this.state.isModalDeleteVisible = false
                    this.setState(function(prevState, props){
                        return { isModalDeleteVisible: prevState.isModalDeleteVisible }
                    })
                    console.log('isModalDeleteVisible', this.state.isModalDeleteVisible)
        
                  }

     _toggleModalSkill(){

        this.state.isModalSkillVisible = !this.state.isModalSkillVisible
        this.setState(function(prevState, props){
            return { isModalSkillVisible: prevState.isModalSkillVisible }
        })

        console.log('isModalSkillVisible: ', this.state.isModalSkillVisible)

     }

     _renderSkillModalContent = () => (

        <View style={[styles.modalContent, {backgroundColor: '#254D32'}]}>
        
            <Text style={[styles.title, {color: 'white'}]}>Cannot proceed with registration. At least 5 skills are needed. {5 - this.state.countSkills} more are needed.</Text>
        
            <View>
        
                                <TouchableOpacity 
                                                style={[styles.button,{backgroundColor: 'white'}]} 
                                                onPress={() => this._toggleModalSkill() }>
                                <Text style={[styles.btnTxt, {color: '#254D32'}]}>Ok</Text>
                
                                </TouchableOpacity>
        
                            </View>
        
                        </View>

     )         
     

                  
    _grabSkill = (text) => {
        this.state.skill = text
        this.setState(function(prevState,props){
            return {skill: prevState.skill}
        })
        console.log('Skill: ', this.state.skill)

        this._flip()
    }

    _flip(){
        
              if(this.state.skill != '')
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
        tempArr.unshift({skill: this.state.skill, exp: this.state.experience})
        console.log('tempArrChild: ', tempArr)
        this.state.skills = tempArr
        this.setState(function(prevState,props){
            return {skills: prevState.skills}
        })
        console.log('skillsArrChild: ', this.state.skills)
        this.props.callbackFromParent(this.state.skills);

        //The length of array this.state.skills
        this._countSkills()

        //Release text inputs value
        this.state.skill = ''
        this.setState(function(prevState,props){
            return {skill: prevState.skill}
        })
        this._flip()
        //Release experience value
        this.state.experience = "1"
        this.setState(function(prevState,props){
            return {experience: prevState.experience}
        })
  }

  _countSkills(){

    this.state.countSkills = this.state.skills.length
    this.setState(function(prevState, props){
        return { countSkills: prevState.countSkills }
    })
    console.log('Number of Skills: ', this.state.countSkills)

    if(this.state.countSkills >=5)
    {
        this.state.flipReg = true
        this.setState(function(prevState, props){
            return { flipReg: prevState.flipReg }
        })
        console.log('FlipReg: ', this.state.flipReg )
    }
    else
    {
        this.state.flipReg = false
        this.setState(function(prevState, props){
            return { flipReg: prevState.flipReg }
        })
        console.log('FlipReg: ', this.state.flipReg )
    }

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

  _onSubmit(){

    if(this.state.flipReg){
        this.props.callbackToDB();
        // Alert.alert('Registration Completed.')
        //const {navigate} = this.props.navigation
        //navigate('Login')
     }
      else {

        this._toggleModalSkill()

     } 
  }

  _grabExperience = (experience) => {

    this.state.experience = experience
    this.setState(function(prevState,props){
        return {experience: prevState.experience}
    })
    console.log("Experience: ", this.state.experience)

  }

  _deleteItem(){
    //Use temp array(object) instead to state.someArr to apply javascript functionalities on arrays. 
     var tempSkillArr = []
     tempSkillArr = this.state.skills
     console.log('tempArrChild: ', tempSkillArr)

     //Returns the part of array we want to remove
     tempSkillArr.splice(this.state.index, 1)

     //Assign the tempArr with the removed element to skills
     this.state.skills = tempSkillArr
     this.setState(function(prevState, props){
         return { skills : prevState.skills }
     })

     
     console.log('Update SkillsChild: ', this.state.skills)
     this.props.callbackFromParent(this.state.skills);

     //The length of array this.state.skills
     this._countSkills()
     
     //Close modal
     this._untoggleModalDelete()
   }

  

    
    render(){

        const { actionButtonVisible } = this.state;
        
                const actions = [{
                    text: 'Done',
                    icon: this.state.flipReg ? require( '../../../../img/icons/move-to-next_yes.png') : require('../../../../img/icons/move-to-next_no.png'),
                    name: 'bt_done',
                    position: 1,
                  }];
    
        return(

            <View style={styles.container}>

                <View style={styles.titleCont}>

                    <Text style={styles.title}> What do you know? List at least five skills </Text>

                </View>
                <View style={styles.posForm}>
                
                                <View style={styles.inputContainer}>
                                   
                                <View style={{height: 50}}>
                
                                    <TextInput placeholder='Skill'
                                               underlineColorAndroid = 'transparent'
                                               style={styles.input}
                                               onChangeText={(text) => this._grabSkill(text)}
                                               value={this.state.skill}/>
                
                                </View>
                
                                <View style={styles.expInput}>
                
                                    <Picker
                                        selectedValue={this.state.experience}
                                        onValueChange={(experience) => this._grabExperience(experience)}
                                        mode="dropdown"
                                        itemStyle = {{fontSize: 12}}
                                        style={{
                                        color: '#C7C7CD',
                                        height: 20,
                                        marginTop: 7.5,
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
                            onScroll={this.handleScroll}
            extraData={this.state}
            data={this.state.skills}
            renderItem={({ item, index }) => (
                <View style={styles.skillContainer}>
                 <View style={{flex: 5, alignItems: 'flex-start', justifyContent: 'center'}}>
                <View style={styles.posContainer}>
                <Text style={styles.pos}>Skill: {item.skill} </Text>
                {this._renderBrokolis({item})}  
                </View>
                </View>
                <TouchableOpacity style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}
                                              onPress = {() => this._toggleModalDelete({item, index})}>
                                <Image source={require('../../../../img/icons/delete.png')}
                                       style = {{resizeMode: 'center', width: 35, height: 35, tintColor: '#A7333F'}} />
                            </TouchableOpacity>
                </View>
            )}
            keyExtractor={item => item.skill}
            style={{flex: 1, marginTop: 5}}
          />

          
          <FloatingAction  disabled = {true}
                           actions={actions}
                           visible={actionButtonVisible}
                           overrideWithAction
                           buttonColor={ this.state.flipReg ? '#42D260' : 'white'}
                           onPressItem={() => this._onSubmit()}/>
                

          <Modal isVisible = {this.state.isModalDeleteVisible}
                          animationIn={'slideInLeft'}
                          animationOut={'slideOutRight'}>

                         {this._renderDeleteModalContent()}

                    </Modal> 

                    <Modal isVisible = {this.state.isModalSkillVisible}
                          animationIn={'slideInLeft'}
                          animationOut={'slideOutRight'}>

                         {this._renderSkillModalContent()}

                    </Modal> 


                </View>

        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
titleCont: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    width: width,
    backgroundColor: 'white'
},
title: {
    fontSize: 16,
    color: 'grey',
    textAlign: 'left',
    fontWeight: '600'
    
},
posForm: {
    backgroundColor: 'white',
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
    borderWidth: 2,
    borderColor: 'grey',
    backgroundColor: '#F8F9FB',
    borderRadius: 5,
    marginRight: 5,
    height: 40,
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
  btnTxt: {
    fontSize: 16,
    fontWeight: '400'
},
skillContainer:{
    flex: 1,
    flexDirection: 'row',
        width: width - 20,
        backgroundColor: 'white',
        marginBottom: 5,
        marginLeft: 5,
        marginRight: 5,
        paddingLeft: 10,
        paddingRight: 10,
},
});

