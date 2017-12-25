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
            actionButtonVisible: true
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

                    <TextInput placeholder='position'
                               style={styles.input}
                               onChangeText={(text) => this._grabPosition(text)}/>

                </View>
                   
                <TouchableOpacity  disabled={!this.state.flip}
                                   style={[styles.btnContainer, {backgroundColor: this.state.flip ? '#42D260' : 'white' }]}>
                        <Text style={[styles.btnText,{color: this.state.flip ? 'white' : '#42D260'}]}> CREATE </Text>
                        <Image style={[styles.btnIcon, {tintColor: this.state.flip ? 'white' : '#42D260'}]} source={require('../../../../img/icons/greater.png')}/>
                </TouchableOpacity>
            
            </View>

            

            <FlatList
            data={this.state.positions}
            renderItem={({ item }) => (
                <View style={styles.inputContainer}>
                <TextInput style={styles.input}
                           
                           onChange={this.handleChange}
                           value={this.state.position} />
                </View>
            )}
            keyExtractor={item => item.email}
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
        backgroundColor: 'white'
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
    },
    btnContainer: {
        flex: 1,
        flexDirection: 'row',  
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
    posList: {
    }



})
