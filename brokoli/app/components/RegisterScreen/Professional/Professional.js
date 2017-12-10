import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Interests from './Interests'
import Skills from './Skills'
import ViewContainer from '../../ViewContainer'
import categories from '../categories.js'

const width = Dimensions.get('window').width

export default class Professional extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            isSelectedFromCategories : Array(categories.length).fill(false)
        }
    }

    myCallback = (dataFromChild) => {
        this.setState({ isSelectedFromCategories: dataFromChild });
        console.log("Parent", this.state.isSelectedFromCategories)
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

             <TouchableOpacity style={styles.button} onPress={()=> navigate('Career')}>

                <Text style={styles.btnText}> NEXT </Text>

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
    backgroundColor: '#42D260',
    marginBottom: 20,
    borderRadius: 10,
    width: width -300,
    alignItems: 'center'
    },
    btnText: {
    color : 'white',
    padding: 10,
    fontWeight: 'bold'
}
})

