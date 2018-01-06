import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';

import ViewContainer from '../../ViewContainer'

const width = Dimensions.get("window").width

export default class Header extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            headerContent : '',
            height: 0
        }
    }
    _grabHeader = (text) => {

        this.state.headerContent = text
        this.setState(function(prevState, props){
            return {headerContent: prevState.headerContent}
         });
         
        //console.log('Child Header: ', this.state.headerContent)
        this.props.callbackFromParent(this.state.headerContent);
    }

    _autoExpand = (event) => {
        this.state.height = event.nativeEvent.contentSize.height
        this.setState(function(prevState,props){
            return {height: prevState.height}
        })
       
    }

       
    

    render(){
        return(

            <View style={{flex: 1, width: width, backgroundColor: 'white', paddingBottom: 10}}>

              <View style={styles.titleCont}>

              <Text style={styles.title}> Describe yourself in one short sentence </Text>

              </View>

              <View style={styles.inputCont}>

              <View style={{flex: 1}}>

              <TextInput placeholderTextColor='#C7C7CD'
                         placeholder='Header'
                         underlineColorAndroid = 'transparent'
                         multiline = {true}
                         maxLength={100}
                         onChangeText={(text) => this._grabHeader(text)}
                         value={this.state.headerContent}
                         style = {[styles.input, {height: Math.max(40, this.state.height)}]}
                         onContentSizeChange = {(event) => this._autoExpand(event)}/>

              </View>

              <View style={styles.condCont}>
                          <Text style={styles.cond}> O </Text> 
                          </View>

              </View>

            </View>

        )
    }
}

const styles = StyleSheet.create({

    titleCont:{
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    title: {
        fontWeight: '600',
        color: 'grey',
        fontSize: 16,
        textAlign: 'left'

    },
    inputCont:{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 5,
        marginTop: 10,
        marginRight: 15,
        marginLeft: 10,
        padding: 5,
        borderWidth: 2,
        borderColor: 'grey',
        backgroundColor: '#F8F9FB',

        

    },
    input:{
       // width: width - 35,
        fontSize: 16,
        paddingLeft: 5,
        color: '#C7C7CD',
        
    },
    cond: {
        fontSize: 17,
        textAlign: 'center',
        fontWeight: '600',
        color: 'white'
    },
    condCont: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 22,
        height: 22,
        borderRadius: 11,
        backgroundColor: '#42D260'
    },


 })

