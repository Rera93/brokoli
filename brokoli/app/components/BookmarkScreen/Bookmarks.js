import React from 'react';
import { StyleSheet, 
         Text, 
         Image, 
         View,
         FlatList,
         TouchableOpacity,
         Dimensions } from 'react-native';

import Modal from 'react-native-modal'


var tempArr = []

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default class Bookmarks extends React.Component{

    static navigationOptions = {
        title: 'Your Bookmarks',
        headerStyle: { backgroundColor: '#42D260', marginTop: 24 },
        headerTitleStyle: { color: 'white' },
      };


    constructor(props){
        super(props)

        this.state = {

            bookmarkData: [
                {project: 'Brokoli1', applicants: 17, brokolis: 15, id: 100},
                {project: 'Brokoli2', applicants: 145, brokolis: 65, id: 101},
                {project: 'Brokoli3', applicants: 137, brokolis: 32, id: 102},
                {project: 'Brokoli4', applicants: 4, brokolis: 23, id: 103},
        ],
        activeRowKey: null,
        isModalDeleteVisible: false,
        index: 0,
        itemToDelete: []
        }
    }

    componentDidMount(){
        this._makeRemoteRequest()
    }
        
      //Need to fetch data from db and display them in the flat list.
      _makeRemoteRequest = () => {

        /*
            DB request happens here. 
            Need to be called everytime a bookmark is set on the brokoli tab,  

            tempArr = dataFetchedFromDb

            Update state of bookmarkData like the following

            this.state.bookmarkData = tempArr
            this.setState(function(prevState, props){
                return { boormarkData: prevState.bookmarkData}
            })

        */
        
       
    }

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
        
            <Text style={[styles.title, {color: 'white'}]}>Are you sure you want to unbookmark the selected project?</Text>
        
            <View style={{flexDirection: 'row'}}>
        
                                <TouchableOpacity 
                                                style={[styles.button,{backgroundColor: 'white'}]} 
                                                onPress={() => this._unBookmark() }>
                                <Text style={[styles.btnTxt, {color: '#254D32'}]}>Ok</Text>
                
                                </TouchableOpacity>
        
                                <TouchableOpacity style={[styles.button, {backgroundColor: '#A7333F'}]} 
                                                onPress={() => this._untoggleDeleteModal()}>
                                <Text style={[styles.btnTxt, {color: 'white'}]}>Cancel</Text>
                
                                </TouchableOpacity>
        
                            </View>
        
                        </View>
    )

    _unBookmark() {

        //Use temp array(object) instead to state.someArr to apply javascript functionalities on arrays. 
        var tempArr = []
        tempArr = this.state.bookmarkData
        console.log('tempArr: ', tempArr)

        //Returns the part of array we want to remove
        tempArr.splice(this.state.index, 1)

        //Assign the tempArr with the removed element to bookmarkData
        this.state.bookmarkData = tempArr
        this.setState(function(prevState, props){
            return { bookmarkData : prevState.bookmarkData }
        })
        console.log('Update BookmarkData: ', this.state.bookmarkData)
        
        //Close modal
        this._untoggleDeleteModal()
    }

    refreshFlatList = (deletedKey) => {
        this.state.deleteRowKey = deletedKey
        this.setState(function(prevState, props){
            return {
                deleteRowKey: prevState.deleteRowKey
            }
    })
  }

  _openBookmark({item, index})
  {
    const {navigate} = this.props.navigation
    navigate('Project', {selectedItem: item })

  }

    render(){
        return(

            <View style={styles.container}>


            <FlatList
            data={this.state.bookmarkData}
            renderItem={({ item, index }) => (
              <TouchableOpacity style={styles.item} item={item} index={index}
                                onPress = {() => this._openBookmark({item, index}) }
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
                <View style={styles.reactions}>
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
            keyExtractor={item => item.project}
            ListHeaderComponent={() => (!this.state.bookmarkData.length ? 
            <Text style={{marginTop: height / 3, textAlign: 'center', fontSize: 20, fontWeight: '500', color: '#42D260'}}>Out of bookmarks</Text> : null)}
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
    container: {
        flex: 1,
        width: width,
        paddingTop: 5,
    },
    name: {
        fontSize: 20,
        fontWeight: '400',
        color: '#C7C7CD'
    },
    item:{
        flexDirection: 'row',
        backgroundColor: 'white',
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
        flexDirection: 'row'
      },
      icon: {
        resizeMode: 'contain',
        width: 25,
        height: 25,
        tintColor: '#42D260'
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

})