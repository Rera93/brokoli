import React from 'react';
import { StyleSheet, 
         Text, 
         View, 
         Image, 
         Dimensions,
         FlatList,
         Alert,
         TextInput,
         TouchableOpacity,
         KeyboardAvoidingView } from 'react-native';

import FloatingAction from '../FloatingComponents/FloatingAction'
import Modal from 'react-native-modal'
import { Picker } from 'react-native-picker-dropdown'
import Swipeout from 'react-native-swipeout'

const width = Dimensions.get('window').width

var tempArr = []
const minYY = 1990
const maxYY = 2018

export default class Projects extends React.Component
{

    constructor(props){
        super(props)

        this.state = {
            data: [
                {project: 'Brokoli', position: 'React Native Developer', course: 'Software Development Entrepreneurship'},
                {project: 'Mars Rover Robot', position: 'DSL Developer', course: 'Design of Embedded Systems'},
                {project: 'Calculator', position: 'JUnit Tester', course: 'Testing Techniques'},
        ],
            actionButtonVisible: true,
            isModalAddVisible: false,
            isModalDeleteVisible: false,
            newPosition : '',
            newProject: '',
            newCourse: '',
            flip: false,
            activeRowKey : null,
            deleteRowKey : null
        }
    }


    componentDidMount() {
        //When compoment is first loaded the temp array is used as a placeholder for the skils key value pair array 
        tempArr = this.state.data
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

        _toggleModalDelete = () => {
            this.state.isModalDeleteVisible = !this.state.isModalDeleteVisible
            this.setState(function(prevState, props){
                return {isModalDeleteVisible: prevState.isModalDeleteVisible}
            })
            console.log('deleteModal: ', this.state.isModalDeleteVisible)
          }

        _grabNewProject = (project) => {
            this.state.newProject = project
            this.setState(function(prevState,props){
                return {newProject: prevState.newProject}
            })
            console.log('New Project: ', this.state.newProject)
  
            this._flip()
        }
        _grabNewPosition = (position) => {
            this.state.newPosition =position
            this.setState(function(prevState,props){
                return {newPosition: prevState.newPosition}
            })
            console.log('New Position: ', this.state.newPosition)
  
            this._flip()
        }

        _grabNewCourse = (course) => {
            this.state.newCourse = course
            this.setState(function(prevState,props){
                return {newCourse: prevState.newCourse}
            })
            console.log('New Course: ', this.state.newCourse)
  
            this._flip()
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
            
                  if(this.state.newProject != '' && this.state.newPosition != '' && this.state.newCourse != '' )
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

              <Text style={styles.title}>Add new project</Text> 

              <View style={{marginTop: 20}}>
              
              <TextInput placeholder='project'
                         style={styles.input}
                         underlineColorAndroid='transparent'
                         onChangeText={(text) => this._grabNewProject(text)}
                         value={this.state.newProject}/>

              </View>

              <View style={{marginTop: 10}}>
              
              <TextInput placeholder='position'
                         style={styles.input}
                         underlineColorAndroid='transparent'
                         onChangeText={(text) => this._grabNewPosition(text)}
                         value={this.state.newPosition}/>

              </View>

              <View style={{marginTop: 10}}>
              
              <TextInput placeholder='course'
                         style={styles.input}
                         underlineColorAndroid='transparent'
                         onChangeText={(text) => this._grabNewCourse(text)}
                         value={this.state.newCourse}/>

              </View>

              </View>

              <View style={{flexDirection: 'row', paddingTop: 20}}>

              <TouchableOpacity  disabled={!this.state.flip}
                                style={[styles.button,{borderWidth: 2, borderColor: '#254D32', backgroundColor: this.state.flip ? '#254D32' : 'white'} ]} 
                                onPress={() => this._addProject()}>
                <Text style={[styles.btnTxt, {color: this.state.flip ? 'white' : '#254D32'}]}>Add</Text>
 
              </TouchableOpacity>

              <TouchableOpacity style={[styles.button, {backgroundColor: '#A7333F'}]} 
                                onPress={() => this._toggleModalAdd()}>
                <Text style={[styles.btnTxt, {color: 'white'}]}>Close</Text>
 
              </TouchableOpacity>

              </View>
            
            </View>
          );

          _addProject(){
            tempArr.unshift({project: this.state.newProject, 
                             position: this.state.newPosition,
                             course: this.state.newCourse})
            console.log('tempArr: ', tempArr)
            this.state.data = tempArr
            this.setState(function(prevState,props){
                return {data: prevState.data}
            })
            console.log('updatedDataArr: ', this.state.data)
            this._toggleModalAdd()
          }

          _releaseNewData(){
            //Release text inputs values
            this.state.newProject = ''
            this.setState(function(prevState,props){
                return {newProject: prevState.newProject}
            })
            this.state.newPosition = ''
            this.setState(function(prevState,props){
                return {newPosition: prevState.newPosition}
            })
            this.state.newCourse = ''
            this.setState(function(prevState,props){
                return {newCourse: prevState.newCourse}
            })

            this._flip()
          }
          _renderDeleteModalContent = () => (

            <View style={[styles.modalContent, {backgroundColor: '#254D32'}]}>
            
                <Text style={[styles.title, {color: 'white'}]}>Are you sure you want to delete the selected project from your profile?</Text>
            
                <View style={{flexDirection: 'row'}}>
            
                                    <TouchableOpacity 
                                                    style={[styles.button,{backgroundColor: 'white'}]} 
                                                    onPress={() => this._deleteItem() }>
                                    <Text style={[styles.btnTxt, {color: '#254D32'}]}>Ok</Text>
                    
                                    </TouchableOpacity>
            
                                    <TouchableOpacity style={[styles.button, {backgroundColor: '#A7333F'}]} 
                                                    onPress={() => this._toggleModalDelete()}>
                                    <Text style={[styles.btnTxt, {color: 'white'}]}>Cancel</Text>
                    
                                    </TouchableOpacity>
            
                                </View>
            
                            </View>
            
          )
          _deleteItem(){
            const deletingRow = this.state.activeRowKey            
            this.state.data.splice(this.props.index, 1)
            //Refresh FlatList
            this.refreshFlatList(deletingRow)
            this._toggleModalDelete()
          }



    render(){
        const { actionButtonVisible } = this.state;
        
        const actions = [{
                text: 'Add',
                icon: require('../../../img/icons/add.png'),
                name: 'bt_add',
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
            left: [
                {
                    onPress: () => {

                        this._toggleModalDelete()
                        
                    },
                    text: 'Delete', type: 'delete'
                }
            ],
            rowId: this.props.index,
            secId: 1,

        }
        return(

            <View style={styles.container}> 

                 <FlatList
                     onScroll={this.handleScroll}  
                     extraData={this.state}
                     data={this.state.data}
                     renderItem={({ item, index }) => (
                         <Swipeout {...swipeSettings} item={item} index={index} style={styles.skillContainer}>

                            <View style={{flexDirection: 'row', marginTop: 5}}>
                            <Image source={require('../../../img/icons/projection-screen.png')} style={styles.itemIcon} />
                            <Text style={styles.item}>{item.project}</Text>
                            </View>

                            <View style={{flexDirection: 'row', marginTop: 5}}>
                            <Image source={require('../../../img/icons/workpos.png')} style={styles.itemIcon} />
                            <Text style={styles.item}>{item.position}</Text>
                            </View>
                           
                            <View style={[styles.period, {marginTop: 5}]}>
                            <Image source={require('../../../img/icons/books.png')} style={styles.itemIcon} />
                            <Text style={styles.item}>{item.course}</Text>
                            </View>

                          </Swipeout>   
                    
                     )}
                     keyExtractor={item => item.position}
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
        width: width - 100,
    },
    dateInputCont:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        marginBottom: 5,
    },
    dateInput:{
        flex: 1,
        borderWidth: 2,
        borderColor: 'grey',
        backgroundColor: '#F8F9FB',
        borderRadius: 5,
        marginTop: 5,
        marginRight: 5,
    },
    title: {
        color: '#254D32',
        fontSize: 20,
        fontWeight: '400'
    },
    period:{
        flexDirection: 'row'
    },
    arrow: {
        borderWidth: 1,
        width: 20,
        height: 20,
        resizeMode: 'center'
    },
    yearCounter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 5,
    },
    arrowCont: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    itemIcon: {
        resizeMode: 'center',
        width: 20,
        height: 20,
        tintColor: '#C7C7CD',
        marginRight: 10,
    }
})