'use strict'
import React from 'react';
import { StyleSheet, 
         Text, 
         TextInput, 
         Alert, 
         ScrollView, 
         View,
         TouchableOpacity,
         Image,
         Dimensions
         } from 'react-native';

import ProjectCategories from '../../RegisterScreen/Professional/Categories'
import categories from '../../RegisterScreen/categories.js'

const width = Dimensions.get('window').width

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
            passCategoriesToDb : [],
            projectObj: {},

        }


    }

    componentWillMount() {
        //Alert.alert("Props", this.props.navigation.state.params.date + this.props.navigation.state.params.gender) ;
        this.state.projectObj = this.props.navigation.state.params.project;
        this.setState(function(prevState, props){
            return {projectObj: prevState.projectObj}
         });
       
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
        if(countCat >= 1)
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

    _onSubmit() {

        var tempCatArr =  []

        for(let i = 0; i < categories.length; i++)
        {
           if(this.state.isSelectedFromCategories[i] == true)
           {
                tempCatArr.push(categories[i].name)
           }
        }
        this.state.passCategoriesToDb = tempCatArr
        this.setState(function(prevState,props){
            return {passCategoriesToDb: prevState.passCategoriesToDb}
        })
        console.log("passToBd: ", this.state.passCategoriesToDb)

        let projectObj = this.state.projectObj;
        projectObj.categories = this.state.passCategoriesToDb;                        //updating value
        this.setState({projectObj});

        
        console.log("projectObj: ", this.state.projectObj);
        this.props.navigation.navigate('Positions', {project:this.state.projectObj})
    }


    render(){
        const { navigate } = this.props.navigation
        return(
            <View style={styles.container}>

            <View style={styles.labelContainer}>

            <Text style={styles.label}>Allow interested people to find your project by specifying the areas of expertise that are available. Pick at least one category</Text>  

            </View>

            <ProjectCategories callbackFromParent = {this.myCallback}/>

            <TouchableOpacity disabled={this.state.flip ? false : true} 
                               style={[styles.btnContainer, {backgroundColor: this.state.flip ? '#42D260' : 'white'}]} 
                               onPress={this._onSubmit.bind(this)}>

                <Text style={[styles.btnText, {color: this.state.flip ? 'white' : '#42D260'}]}> NEXT </Text>

                <Image style={[styles.btnIcon, {tintColor: this.state.flip ? 'white' : '#42D260'}]} source={require('../../../../img/icons/greater.png')}/>

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
    },
    labelContainer:{
        width: width - 50,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 10,
    },
    label: {
        color: '#42D260',
        fontSize: 17,
        fontWeight: '400'
    },
    btnContainer: {
        flexDirection: 'row',  
        borderWidth: 2,
        borderColor: '#42D260',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: width - 300,
        padding: 5,
        marginBottom: 10
    },
    btnText: {
        fontSize: 16,
        fontWeight: '600',
    },
    btnIcon:{
        height: 14,
        width: 14,
        resizeMode: 'contain'
    }


})
