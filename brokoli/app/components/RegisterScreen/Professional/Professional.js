import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Interests from './Interests'
import Skills from './Skills'
import ViewContainer from '../../ViewContainer'
import categories from '../categories.js'

const width = Dimensions.get('window').width
var countCat = 0

export default class Professional extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            isSelectedFromCategories : Array(categories.length).fill(false),
            flip : false
        }
    }

    myCallback = (dataFromChild) => {
        this.setState({ isSelectedFromCategories: dataFromChild });
        console.log("Parent", this.state.isSelectedFromCategories)
        this._onFlip()
    }

    _onFlip(){
        for(let i=0; i < categories.length; i++)
        {
        
            if(this.state.isSelectedFromCategories[i] == true)
            { 
                  countCat++ 
            }
            if(countCat >= 2)
            {
                 this.setState({flip : true})
            } else {
                this.setState({flip : false})
            }
        }
    }


    static navigationOptions = {
        title: 'Categories',
        headerStyle: { backgroundColor: '#42D260', marginTop: 24 },
        headerTitleStyle: { color: 'white' },
      };
    
    render(){

        const {navigate}= this.props.navigation

        return(

            <ViewContainer style={styles.professional}>

            {/* <Skills />*/}
             <Interests callbackFromParent = {this.myCallback} />

             <TouchableOpacity style={[styles.button, {backgroundColor: this.state.flip ? '#42D260' : 'white'}]} onPress={()=> navigate('Career')}>

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

