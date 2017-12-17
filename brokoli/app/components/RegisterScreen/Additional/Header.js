import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';

import ViewContainer from '../../ViewContainer'

const width = Dimensions.get("window").width

export default class Header extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            headerContent : ' ',
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

       
    

    render(){
        return(

            <ViewContainer style={{marginTop: 10, marginBottom: 10}}>

              <View style={styles.titleCont}>

              <Text style={styles.title}> Describe yourself in one short sentence </Text>

              </View>

              <View style={styles.inputCont}>

              <TextInput style={styles.input} 
                         placeholderTextColor='grey'
                         placeholder='header'
                         multiline = {true}
                         numberOfLines = {3} 
                         maxLength={120}
                         onChangeText={(text) => this._grabHeader(text)}
                         value={this.state.headerContent}/>

              </View>

            </ViewContainer>

        )
    }
}

const styles = StyleSheet.create({

    titleCont:{
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
        marginBottom: 10,
        marginTop: 10,
    },
    title: {
        color: 'grey',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'left'

    },
    inputCont:{
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
        width: width - 60,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
        

    },
    input:{
        padding: 10,
        width: width - 60,
        color: '#42D260',
        
    }


 })

