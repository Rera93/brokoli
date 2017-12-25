'use strict'
import React from 'react';
import { StyleSheet, 
         Text, 
         TextInput, 
         Alert, 
         ScrollView, 
         View,
         TouchableOpacity
         } from 'react-native';

import ProjectCategories from '../../RegisterScreen/Professional/Categories'
import categories from '../../RegisterScreen/categories.js'

export default class Categories extends React.Component {


    static navigationOptions = {
        title: 'Categories',
        headerStyle: { backgroundColor: '#42D260', marginTop: 24 },
        headerTitleStyle: { color: 'white' },
      };

    constructor(props){
        super(props)
        this.state = {
            isSelectedFromCategories : Array(categories.length).fill(false),
            flip : false,
        }


    }

    myCallback = (dataFromChild) => {
        this.state.isSelectedFromCategories = dataFromChild
        this.setState(function(prevState, props){
            return {isSelectedFromCategories: prevState.isSelectedFromCategories}
         });
        console.log("Parent", this.state.isSelectedFromCategories)
        this._onFlip()
    }

    _onFlip(){
        let countCat = 0
        for(let i=0; i < categories.length; i++)
        {
        
            if(this.state.isSelectedFromCategories[i] == true)
            { 
                  countCat++ 
            } 
        }
        console.log('count', countCat)
        if(countCat >= 2)
        {   
            this.state.flip = true
            this.setState(function(prevState, props){
                return {flip: prevState.flip}
             });
        } else {
            this.state.flip = false
            this.setState(function(prevState, props){
                return {flip: prevState.flip}
             });
        }
    }


    


    render(){
        const { navigate } = this.props.navigation
        return(
            <View style={styles.container}>
            <ProjectCategories callbackFromParent = {this.myCallback}/>
            <TouchableOpacity onPress={() => navigate('Positions') }>
            <Text> NEXT </Text>
            </TouchableOpacity>
            </View>
        )
    }



}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    }


})
