import React from 'react';
import { StyleSheet, 
         Text, 
         TouchableOpacity, 
         TextInput, 
         View, 
         Dimensions, 
         FlatList,
         Image } from 'react-native';
import Modal from 'react-native-modal'
const width = Dimensions.get("window").width

var tempArr = []

export default class ProjectExp extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            projectName : '',
            position : '',
            course: '',
            projects: [],
            flip: false,
            index: null,
            isModalDeleteVisible: false
        }
    }

    _grabProjectName = (text) => {
        
                this.state.projectName = text
                this.setState(function(prevState, props){
                  return {projectName: prevState.projectName}
                 });
                console.log('Project Name: ', this.state.projectName)

                this._flip()
                
    }

    _grabPosition = (text) => {
                
                this.state.position= text
                this.setState(function(prevState, props){
                return {position: prevState.position}
                });
                console.log('Position: ', this.state.position)

                this._flip()

                        
    }
    _grabCourse = (text) => {
        
                this.state.course = text
                this.setState(function(prevState, props){
                  return {course: prevState.course}
                 });
                console.log('Course: ', this.state.course)

                this._flip()
                
    }

    _deleteItem(){
        //Use temp array(object) instead to state.someArr to apply javascript functionalities on arrays. 
         var tempProjArr = []
         tempProjArr = this.state.projects
         console.log('tempArrChild: ', tempProjArr)
    
         //Returns the part of array we want to remove
         tempProjArr.splice(this.state.index, 1)
    
         //Assign the tempArr with the removed element to projects
         this.state.projects = tempProjArr
         this.setState(function(prevState, props){
             return { projects : prevState.projects }
         })
    
         
         console.log('Update ProjectsChild: ', this.state.projects)
         this.props.callbackFromParentProjects(this.state.projects);
    
         //Close modal
         this._untoggleModalDelete()
       }

       _onAdd(){
        tempArr.unshift({proj: this.state.projectName, pos: this.state.position, course: this.state.course})
        console.log('tempArrChild: ', tempArr)
        this.state.projects = tempArr
        this.setState(function(prevState,props){
            return {projects: prevState.projects}
        })
        console.log('projectsArrChild: ', this.state.projects)
        this.props.callbackFromParentProjects(this.state.projects);

        //Release text inputs value
        this.state.projectName = ''
        this.setState(function(prevState,props){
            return {projectName: prevState.projectName}
        })
        this.state.position = ''
        this.setState(function(prevState,props){
            return {position: prevState.position}
        })
        this.state.course = ''
        this.setState(function(prevState,props){
            return {course: prevState.course}
        })

        this._flip()
  }

  _flip(){
    
          if(this.state.projectName != '' && this.state.position != '' && this.state.course != '')
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

        _renderDeleteModalContent = () => (
            
                        <View style={[styles.modalContent, {backgroundColor: '#254D32'}]}>
                        
                            <Text style={[styles.title, {color: 'white'}]}>Are you sure you want to delete the selected project from your registration?</Text>
                        
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


    render(){

        return(

            <View style={styles.projectContainer}>

                <View style={{flexDirection: 'row', padding: 10, backgroundColor: 'white'}}>

                <View style={{flex: 6}}> 

                <View style={styles.inputCont}>  

                <TextInput style={styles.singleInput} 
                            placeholder='Project Name '
                            onChangeText={(text) => this._grabProjectName(text)}
                            placeholderTextColor='#C7C7CD'
                            underlineColorAndroid='transparent'
                            value={this.state.projectName}/>

                </View>

                <View style={styles.inputCont}>

                <TextInput style={styles.singleInput} 
                            placeholder='Position'
                            placeholderTextColor='#C7C7CD'
                            underlineColorAndroid='transparent'
                            onChangeText={(text) => this._grabPosition(text)}
                            value={this.state.position}/>

                </View>

                <View style={styles.inputCont}>

                <TextInput style={styles.singleInput} 
                            placeholder={'Course'}
                            placeholderTextColor='#C7C7CD'
                            underlineColorAndroid='transparent'
                            onChangeText={(text) => this._grabCourse(text)}
                            value={this.state.course}/>

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
                        data={this.state.projects}
                        renderItem={({ item, index }) => (
                            <View style={styles.projContainer}>
                            <View style={{paddingTop: 10, paddingBottom: 5, flex: 5, alignItems: 'flex-start', justifyContent: 'center'}}>
                            <View style={styles.project}>
                            <Image source={require('../../../../img/icons/projection-screen.png')} 
                                   style={styles.icon}/>
                            <Text style={styles.projText}>{item.proj} </Text>
                            </View>
                            <View style={styles.project}>
                            <Image source={require('../../../../img/icons/workpos.png')} 
                                   style={styles.icon}/>
                            <Text style={styles.projText}>{item.pos}</Text>
                            </View>
                            <View style={styles.project}>
                            <Image source={require('../../../../img/icons/books.png')} 
                                   style={styles.icon}/>
                            <Text style={styles.projText}>{item.course}</Text>
                            </View>
                            </View>
                            <TouchableOpacity style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}
                                                        onPress = {() => this._toggleModalDelete({item, index})}>
                                            <Image source={require('../../../../img/icons/delete.png')}
                                                style = {{resizeMode: 'center', width: 35, height: 35, tintColor: '#A7333F'}} />
                                        </TouchableOpacity>
                </View>
            )}
            keyExtractor={item => item.proj}
            style={{flex: 1, marginTop: 10}}
          />

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
        
            projectContainer: {
                alignItems: 'center',
                justifyContent: 'center',
            },
            inputCont: {
                flex: 1,
                marginTop: 10,
                marginBottom: 10,
                borderWidth: 2,
                marginRight: 10,
                padding: 5,
                borderRadius: 5,
                borderColor: 'grey', 
            },
            singleInput: {
                color: '#C7C7CD',
                fontSize: 17,
                fontWeight: '400',
                paddingLeft: 5, 
            },
            btnContainer: {
                flex: 1,
                borderWidth: 2,
                borderColor: '#42D260',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
                marginTop: 10,
                marginBottom: 10,
            },
            btnText: {
                fontSize: 17,
                fontWeight: '600',
            },
            icon: {
                width: 22.5,
                height: 22.5,
                resizeMode: 'center',
                tintColor: '#C7C7CD'
            },
            project:{
                width: width - 20,
                backgroundColor: 'white',
                marginBottom: 5,
                marginLeft: 5,
                marginRight: 5,
                paddingLeft: 10,
                paddingRight: 10,
                flexDirection: 'row'
              },
        projText: {
                color: 'grey',
                fontSize: 17,
                fontWeight: '400',
                paddingLeft: 10,
            },
        projContainer:{
                flex: 1,
                flexDirection: 'row',
                    width: width - 20,
                    backgroundColor: 'white',
                    marginBottom: 5,
                    marginLeft: 10,
                    marginRight: 5,
                    paddingLeft: 10,
                    paddingRight: 10,
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
              title:{
                fontSize: 17,
                fontWeight: '500',
                color: 'grey'
            },
        

        })