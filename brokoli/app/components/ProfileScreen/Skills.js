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



const width = Dimensions.get('window').width

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
        isModalVisible: false,
        newSkill : '',
        newExperience: "1",
        flip: false
        }
    }

    /* this.state.data contains mockup data. Need to fetch the real data 
    from the db. Momentarily when adding skills in register only the skill
    name is required and no exp yet. 
    */

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

      _toggleModal = () => {
          this.state.isModalVisible = !this.state.isModalVisible
          this.setState(function(prevState, props){
              return {isModalVisible: prevState.isModalVisible}
          })
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
                                style={[styles.button,{borderWidth: 1, borderColor: '#254D32', backgroundColor: this.state.flip ? '#254D32' : 'white'} ]} 
                                onPress={() => this._toggleModal()}>
                <Text style={[styles.btnTxt, {color: this.state.flip ? 'white' : '#254D32'}]}>Add</Text>
 
              </TouchableOpacity>

              <TouchableOpacity style={[styles.button, {backgroundColor: '#A7333F'}]} 
                                onPress={() => this._toggleModal()}>
                <Text style={[styles.btnTxt, {color: 'white'}]}>Close</Text>
 
              </TouchableOpacity>

              </View>
            
            </View>
          );
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
                            <Text style={styles.item}>{item.skill}</Text>
                            {this._renderBrokolis({item})} 
                             </View>
                    
                     )}
                     keyExtractor={item => item.skill}
                     ItemSeparatorComponent={this._renderSeparator}
                 />

                 <FloatingAction 
                           actions={actions}
                           visible={actionButtonVisible}
                           overrideWithAction
                           onPressItem={() => this._toggleModal()}/>

                  <Modal isVisible = {this.state.isModalVisible}
                  animationIn={'slideInLeft'}
          animationOut={'slideOutRight'}>

          {this._renderModalContent()}
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
    }
})