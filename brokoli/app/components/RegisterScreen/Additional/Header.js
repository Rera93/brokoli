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

            <View style={{flex: 1, width: width}}>

              <View style={styles.titleCont}>

              <Text style={styles.title}> Describe yourself in one short sentence </Text>

              </View>

              <View style={styles.inputCont}>

              <TextInput placeholderTextColor='#C7C7CD'
                         placeholder='Header'
                         underlineColorAndroid = 'transparent'
                         multiline = {true}
                         maxLength={120}
                         onChangeText={(text) => this._grabHeader(text)}
                         value={this.state.headerContent}
                         style = {[styles.input, {height: Math.max(40, this.state.height)}]}
                         onContentSizeChange = {(event) => this._autoExpand(event)}/>

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
        marginTop: 5,
    },
    title: {
        color: 'grey',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'left'

    },
    inputCont:{
        alignItems:'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'grey',
        backgroundColor: '#F8F9FB',
        borderRadius: 5,
        marginLeft: 10,
        marginRight: 10,
        

    },
    input:{
        width: width - 35,
        fontSize: 17,
        fontWeight: '500',
        color: '#C7C7CD',
        
    }


 })

