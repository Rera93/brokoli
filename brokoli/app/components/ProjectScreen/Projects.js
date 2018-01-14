'use strict'
import React from 'react';
import { StyleSheet, 
         Text, 
         TextInput, 
         Button, 
         Alert, 
         ScrollView, 
         View,
         FlatList,
         TouchableOpacity,
         Image,
         Dimensions} from 'react-native';
         
import Modal from 'react-native-modal'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

import FloatingAction from '../FloatingComponents/FloatingAction';

export default class Projects extends React.Component {

    static navigationOptions = {
        title: 'Your Projects',
        headerStyle: { backgroundColor: '#42D260', marginTop: 24 },
        headerTitleStyle: { color: 'white' },
      };

  constructor(props) {
       super(props);

       this.state = {
        loading: false,
        data: [  {project: 'Brokoli1', applicants: 17, brokolis: 15, id: 100},
        {project: 'Brokoli2', applicants: 145, brokolis: 65, id: 101},
        {project: 'Brokoli3', applicants: 137, brokolis: 32, id: 102},
        {project: 'Brokoli4', applicants: 4, brokolis: 23, id: 103},],
        page: 1,
        seed: 1,
        error: null,
        refreshing: false,
        actionButtonVisible: true,
        isModalDeleteVisible: false,
        index: 0,
        itemToDelete: []
      };
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

     componentDidMount() {
        this.makeRemoteRequest();
      }

      //This is just an example where a bunch of data is being fetched from the API below. 
      //Need to fetch data from db and display them in the flat list.
      makeRemoteRequest = () => {
        // const { page, seed } = this.state;
        // const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
        // this.setState({ loading: true });
        // fetch(url)
        //   .then(res => res.json())
        //   .then(res => {
        //     this.setState({
        //       data: page === 1 ? res.results : [...this.state.data, ...res.results],
        //       error: res.error || null,
        //       loading: false,
        //       refreshing: false
        //     });
        //   })
        //   .catch(error => {
        //     this.setState({ error, loading: false });
        //   });
      };
      _toggleDeleteModal({item, index}){
        
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
                    return { isModalDeleteVisible: prevState.isModalDeleteVisible }
                })
                console.log('isModalDeleteVisible', this.state.isModalDeleteVisible)
            }
        
            _untoggleDeleteModal(){
        
                this.state.index = null
                this.setState(function(prevState, props){
                    return { index: prevState.index }
                })
        
                console.log('Selected Index: ', this.state.index)
        
                this.state.isModalDeleteVisible = false
                this.setState(function(prevState, props){
                    return { isModalDeleteVisible: prevState.isModalDeleteVisible }
                })
                console.log('isModalDeleteVisible', this.state.isModalDeleteVisible)
        
            }
        
            _renderDeleteModalContent = () => (
        
                <View style={[styles.modalContent, {backgroundColor: '#254D32'}]}>
                
                    <Text style={[styles.title, {color: 'white'}]}>Are you sure you want to remove the selected project?</Text>
                
                    <View style={{flexDirection: 'row'}}>
                
                                        <TouchableOpacity 
                                                        style={[styles.button,{backgroundColor: 'white'}]} 
                                                        onPress={() => this._deleteProject() }>
                                        <Text style={[styles.btnTxt, {color: '#254D32'}]}>Ok</Text>
                        
                                        </TouchableOpacity>
                
                                        <TouchableOpacity style={[styles.button, {backgroundColor: '#A7333F'}]} 
                                                        onPress={() => this._untoggleDeleteModal()}>
                                        <Text style={[styles.btnTxt, {color: 'white'}]}>Cancel</Text>
                        
                                        </TouchableOpacity>
                
                                    </View>
                
                                </View>
            )
        
            _deleteProject() {
        
                //Use temp array(object) instead to state.someArr to apply javascript functionalities on arrays. 
                var tempArr = []
                tempArr = this.state.data
                console.log('tempArr: ', tempArr)
        
                //Returns the part of array we want to remove
                tempArr.splice(this.state.index, 1)
        
                //Assign the tempArr with the removed element to bookmarkData
                this.state.data = tempArr
                this.setState(function(prevState, props){
                    return { data : prevState.data }
                })
                console.log('Update ProjectData: ', this.state.data)
                
                //Close modal
                this._untoggleDeleteModal()
            }

      _openProject({item, index})
      {
        const {navigate} = this.props.navigation
        navigate('AvailablePos', {selectedItem: item })
      }
    

      render(){

        const { actionButtonVisible } = this.state;

        const actions = [{
          text: 'Create',
          icon: require('../../../img/icons/create.png'),
          name: 'bt_create',
          position: 1
        }];

        const { navigate } = this.props.navigation

        return(
          
          <View style={styles.container}>
          <FlatList
            onScroll={this.handleScroll}
            data={this.state.data}
            renderItem={({ item, index }) => (
              <TouchableOpacity style={styles.item}
                                onPress = {() => this._openProject({item, index}) }
                                onLongPress = {() => this._toggleDeleteModal({item, index})}>
               <View style={{flex: 5, alignItems: 'flex-start', justifyContent: 'center'}}>
                <View style={styles.nameCont}>
                {/*Name of project*/}
                <Text style={styles.name}> {item.project} </Text>
                </View>
                <View style={styles.reactionsCont}>
                <View style={styles.reactions}>
                {/*Number of applicants until now*/}
                <Image style={styles.icon} source={require('../../../img/icons/applicants.png')} />
                <Text style={{fontSize: 17, fontWeight: '400', color: '#C7C7CD'}}> {item.applicants}  </Text>
                </View>
                <View  style={styles.reactions}>
                 {/*Number of brokoli's until now*/}
                 <Image style={styles.icon} source={require('../../../img/icons/brokolis.png')} />
                 <Text style={{fontSize: 17, fontWeight: '400', color: '#C7C7CD'}}> {item.brokolis}  </Text>
                 </View>
                </View>
                </View>
                <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}>
                    <Image source={require('../../../img/icons/right-arrow.png')}
                           style={{width: 25, height: 25, resizeMode: 'center', tintColor: '#42D260'}} />
                    </View>

              </TouchableOpacity>
            )}
            keyExtractor={item => item.email}
            ListHeaderComponent={() => (!this.state.data.length ? 
            <Text style={{marginTop: height / 3, textAlign: 'center', fontSize: 20, fontWeight: '500', color: '#42D260'}}>No projects</Text> : null)}
          />

          <Modal isVisible = {this.state.isModalDeleteVisible}
                          animationIn={'slideInLeft'}
                          animationOut={'slideOutRight'}>

                         {this._renderDeleteModalContent()}

                    </Modal> 

          <FloatingAction
                           actions={actions}
                           visible={actionButtonVisible}
                           overrideWithAction
                           onPressItem={() => navigate('Detail')}/>
       
          </View>   

          )
      }

}

const styles = StyleSheet.create({
  item:{
    backgroundColor: 'white',
    flexDirection: 'row',
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
    paddingTop: 20
  },
  reactionsCont: {
    flexDirection: 'row',
    paddingTop: 5,
  },
  reactions: {
    flexDirection: 'row',
   
  },
  icon: {
    resizeMode: 'contain',
    width: 25,
    height: 25,
    tintColor: '#42D260'
  },
  createBtnCont:{
    position: 'absolute',
    top: 0,
    left: 0,
  },
  createBtn: {
    fontSize: 25
  },
  name: {
    fontSize: 20,
    fontWeight: '400',
    color: '#C7C7CD'
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
title: {
  color: '#254D32',
  fontSize: 20,
  fontWeight: '400'
},

});
              