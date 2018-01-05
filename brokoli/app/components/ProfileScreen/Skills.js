import React from 'react';
import { StyleSheet, 
         Text, 
         View, 
         Image, 
         Dimensions,
         FlatList,
         Alert,
         TextInput,
         TouchableOpacity } from 'react-native';

import FloatingAction from '../FloatingComponents/FloatingAction'
import Modal from 'react-native-modal'
import { Picker } from 'react-native-picker-dropdown'
import Swipeout from 'react-native-swipeout'

const width = Dimensions.get('window').width

var tempSkillsArr = []

export default class Skills extends React.Component
{

    constructor(props){
        super(props)

        this.state = {
            data: [
                {skill: 'Java', experience: 4},
                {skill: 'C++', experience: 2},
                {skill: 'IOS Development', experience: 1},
                {skill: 'Front-End Development', experience: 5},
        ],
            brokolis: [true,false,false,false,false],
            actionButtonVisible: true,
            isModalAddVisible: false,
            isModalDeleteVisible: false,
            newSkill : '',
            newExperience: "1",
            flip: false,
            activeRowKey : null,
            deleteRowKey : null,
            index: null,
            itemToDelete: [],
        }
    }

    /* this.state.data contains mockup data. Need to fetch the real data 
    from the db. Momentarily when adding skills in register only the skill
    name is required and no exp yet. 
    */

    componentDidMount() {
        //When compoment is first loaded the temp array is used as a placeholder for the skills key value pair array 
        tempSkillsArr = this.state.data
    }

    _renderBrokolis = ({item}) =>{
        var rows = []
        console.log('Exp: ', item.experience)
        for(let i=1; i <= this.state.brokolis.length; i++)
        {
            rows.push(

               <View key = {i}>

                   <Image  style = {[styles.icon,{tintColor: i<=item.experience ? '#42D260' : 'grey'}]} 
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

      _renderSeparator = () => {
        return (
          <View
            style={{
              height: 1,
              width: width,
              backgroundColor: "#C7C7CD",
            }}
          />
        )
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

      _toggleModalAdd = () => {
          this.state.isModalAddVisible = !this.state.isModalAddVisible
          this.setState(function(prevState, props){
              return {isModalAddVisible: prevState.isModalAddVisible}
          })
          this._releaseNewData()
        }

        _toggleModalDelete = ({item, index}) => {

            this.state.index = index 
            this.setState(function(prevState, props){
                return { index: prevState.index }
            })
    
            console.log('Selected Index: ', this.state.index)
    
            this.state.itemToDelete = item
            this.setState(function(prevState, props){
                return { itemToDelete: prevState.itemToDelete }
            })
            console.log('Select Item: ', item)

            this.state.isModalDeleteVisible = true
            this.setState(function(prevState, props){
                return {isModalDeleteVisible: prevState.isModalDeleteVisible}
            })
            console.log('deleteModal: ', this.state.isModalDeleteVisible)
          }

          _untoggleModalDelete(){

            this.state.index = null
            this.setState(function(prevState, props){
                return { index: prevState.index }
            })
    
            console.log('Index: ', this.state.index)

            this.state.itemToDelete = []
            this.setState(function(prevState, props){
                return { itemToDelete: prevState.itemToDelete }
            })
            console.log('ItemToDelete: ', this.state.itemToDelete)
    
            this.state.isModalDeleteVisible = false
            this.setState(function(prevState, props){
                return { isModalDeleteVisible: prevState.isModalDeleteVisible }
            })
            console.log('isModalDeleteVisible', this.state.isModalDeleteVisible)

          }

        _grabNewSkill = (skill) => {
            this.state.newSkill = skill
            this.setState(function(prevState,props){
                return {newSkill: prevState.newSkill}
            })
            console.log('New Skill: ', this.state.newSkill)
  
            this._flip()
        }

        _grabNewExperience = (experience) => {
            this.state.newExperience = experience
            this.setState(function(prevState,props){
            return {newExperience: prevState.newExperience}
            })
            console.log("Experience: ", this.state.newExperience)
                
        }

        refreshFlatList = (deletedKey) => {
            this.state.deleteRowKey = deletedKey
            this.setState(function(prevState, props){
                return {
                    deleteRowKey: prevState.deleteRowKey
                }
        })
      }

        _flip(){
            
                  if(this.state.newSkill != '')
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
        
          _renderModalContent = () => (
            <View style={styles.modalContent}>

              <View style={styles.form}> 

              <Text style={styles.title}>Add new skill</Text> 

              <View style={{marginTop: 10}}>
              
              <TextInput placeholder='New skill'
                         style={styles.input}
                         underlineColorAndroid='transparent'
                         onChangeText={(text) => this._grabNewSkill(text)}
                         value={this.state.newSkill}/>

              </View>

              <View style={styles.expInput}>

                    <Picker
                        selectedValue={this.state.newExperience}
                        onValueChange={(exp) => this._grabNewExperience(exp)}
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

              <View style={{flexDirection: 'row'}}>

              <TouchableOpacity  disabled={!this.state.flip}
                                style={[styles.button,{borderWidth: 2, borderColor: '#254D32', backgroundColor: this.state.flip ? '#254D32' : 'white'} ]} 
                                onPress={() => this._addSkill()}>
                <Text style={[styles.btnTxt, {color: this.state.flip ? 'white' : '#254D32'}]}>Add</Text>
 
              </TouchableOpacity>

              <TouchableOpacity style={[styles.button, {backgroundColor: '#A7333F'}]} 
                                onPress={() => this._toggleModalAdd()}>
                <Text style={[styles.btnTxt, {color: 'white'}]}>Close</Text>
 
              </TouchableOpacity>

              </View>
            
            </View>
          );

          _addSkill(){
            tempArr.unshift({skill: this.state.newSkill, experience: this.state.newExperience})
            console.log('tempArr: ', tempArr)
            this.state.data = tempArr
            this.setState(function(prevState,props){
                return {data: prevState.data}
            })
            console.log('updatedDataArr: ', this.state.data)
            this._toggleModalAdd()
          }

          _releaseNewData(){
            //Release text inputs value
            this.state.newSkill = ''
            this.setState(function(prevState,props){
                return {newSkill: prevState.newSkill}
            })
            this._flip()
            //Release experience value
            this.state.newExperience = "1"
            this.setState(function(prevState,props){
                return {newExperience: prevState.newExperience}
            })
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
          _deleteItem(){
           //Use temp array(object) instead to state.someArr to apply javascript functionalities on arrays. 
            var tempArr = []
            tempArr = this.state.data
            console.log('tempArr: ', tempArr)

            //Returns the part of array we want to remove
            tempArr.splice(this.state.index, 1)

            //Assign the tempArr with the removed element to bookmarkData
            this.state.data = tempArr
            this.setState(function(prevState, props){
                return { bookmarkData : prevState.data }
            })
            console.log('Update SkillsData: ', this.state.data)
            
            //Close modal
            this._untoggleModalDelete()
          }



    render(){
        const { actionButtonVisible } = this.state;
        
        const actions = [{
                text: 'Add',
                icon: require('../../../img/icons/add.png'),
                name: 'bt_add',
                position: 1
        }];
        return(

            <View style={styles.container}> 

                 <FlatList
                     onScroll={this.handleScroll}  
                     extraData={this.state}
                     data={this.state.data}
                     renderItem={({ item, index }) => (
                         <View style={styles.skillContainer}>
                            <View style={{flex: 5, alignItems: 'flex-start', justifyContent: 'center'}}>
                            <Text style={styles.item}>{item.skill}</Text>
                            {this._renderBrokolis({item})}  
                            </View>
                            <TouchableOpacity style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}
                                              onPress = {() => this._toggleModalDelete({item, index})}>
                                <Image source={require('../../../img/icons/delete.png')}
                                       style = {{resizeMode: 'center', width: 25, height: 25, tintColor: '#A7333F'}} />
                            </TouchableOpacity>
                          </View>   
                    
                     )}
                     keyExtractor={item => item.skill}
                     ItemSeparatorComponent={this._renderSeparator}
                 />

                 <FloatingAction 
                           actions={actions}
                           visible={actionButtonVisible}
                           overrideWithAction
                           onPressItem={() => this._toggleModalAdd()}/>

                  <Modal isVisible = {this.state.isModalAddVisible}
                         animationIn={'slideInLeft'}
                         animationOut={'slideOutRight'}>

                         {this._renderModalContent()}
                  </Modal>   

                   <Modal isVisible = {this.state.isModalDeleteVisible}
                          animationIn={'slideInLeft'}
                          animationOut={'slideOutRight'}>

                         {this._renderDeleteModalContent()}

                    </Modal>      
                   

                 </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
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
            paddingBottom: 20,
            paddingTop: 20,
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
    item: {
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
      bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
      },
      btnTxt: {
          fontSize: 16,
          fontWeight: '400'
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
    form:{
        width: width - 100
    },
    expInput:{
        borderWidth: 2,
        borderColor: 'grey',
        backgroundColor: '#F8F9FB',
        borderRadius: 5,
        marginRight: 5,
    },
    title: {
        color: '#254D32',
        fontSize: 20,
        fontWeight: '400'
    },
    
})