import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Dimensions, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Categories from './Categories'
import ViewContainer from '../../ViewContainer'
import categories from '../categories.js'

const width = Dimensions.get('window').width

var tempCatArr = []

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
        
                tempCatArr.push(categories[i].name)    
            }
         }

         this.state.passToDb = tempCatArr
         this.setState(function(prevState,props){
             return {passToDb: prevState.passToDb}
         })
         console.log("passToBd: ", this.state.passToDb) 
         this.props.navigation.navigate('Career',{firstName: this.state.firstName, lastName: this.state.lastName, dateOfBirth: this.state.dateOfBirth, gender: this.state.gender, city: this.state.city,  country: this.state.country, username: this.state.username, email: this.state.email, password: this.state.password, categories: this.state.passToDb})

    }


    static navigationOptions = {
        title: 'Categories',
        headerStyle: { backgroundColor: '#42D260', marginTop: 24 },
        headerTitleStyle: { color: 'white' },
      };

      componentDidMount() {
        //Alert.alert("Props", this.props.navigation.state.params.date + this.props.navigation.state.params.gender) ;
       this.setState({firstName : this.props.navigation.state.params.firstName,
                    lastName: this.props.navigation.state.params.lastName,
                    dateOfBirth: this.props.navigation.state.params.dateOfBirth,
                    gender: this.props.navigation.state.params.gender,
                    city: this.props.navigation.state.params.city,
                    country: this.props.navigation.state.params.country,
                    username: this.props.navigation.state.params.username,
                    email: this.props.navigation.state.params.email,
                    password: this.props.navigation.state.params.password})
    }
    
    render(){

      
        return(

            <ViewContainer style={styles.professional}>

            <View style={styles.headerCont} > 

            <Text style={styles.header}>What categories are of interest to you? Pick at least two.</Text>

                </View>

             <Categories callbackFromParent = {this.myCallback} />

             <TouchableOpacity disabled={this.state.flip ? false : true} 
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
    borderWidth: 2,
    borderColor: '#42D260'
    },
    btnText: {
    padding: 10,
    fontWeight: 'bold'
},
headerCont: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 15, 
    marginRight: 15,
    alignItems: 'center'
},
header:{
    fontWeight: '500',
    color: 'grey',
    fontSize: 17,
},

})

