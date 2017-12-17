import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Categories from './Categories'
import ViewContainer from '../../ViewContainer'
import categories from '../categories.js'

const width = Dimensions.get('window').width

export default class Professional extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            isSelectedFromCategories : Array(categories.length).fill(false),
            flip : false,
            passToDb : []
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

    _onSubmit(){

         for(let i = 0; i < categories.length; i++)
         {
            if(this.state.isSelectedFromCategories[i] == true)
            {
        
                this.setState({passToDb: this.state.passToDb.push(categories[i].name)})   
                //TODO: Fix bug when user goes back to category screen. 
            }
         }
         console.log("passToBd: ", this.state.passToDb) 
         this.props.navigation.navigate('Career')

    }


    static navigationOptions = {
        title: 'Categories',
        headerStyle: { backgroundColor: '#42D260', marginTop: 24 },
        headerTitleStyle: { color: 'white' },
      };
    
    render(){

      
        return(

            <ViewContainer style={styles.professional}>

             <Categories callbackFromParent = {this.myCallback} />

             <TouchableOpacity //disabled={this.state.flip ? false : true} 
                               style={[styles.button, {backgroundColor: this.state.flip ? '#42D260' : 'white'}]} 
                               onPress={this._onSubmit.bind(this)}>

                <Text style={[styles.btnText, {color: this.state.flip ? 'white' : '#42D260'}]}> NEXT </Text>

                </TouchableOpacity>

                </ViewContainer>

        )
    }
}

const styles = StyleSheet.create({
    professional: {
        backgroundColor: 'white'
    },
    button: {
    marginBottom: 20,
    borderRadius: 10,
    width: width -300,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#42D260'
    },
    btnText: {
    padding: 10,
    fontWeight: 'bold'
}
})

