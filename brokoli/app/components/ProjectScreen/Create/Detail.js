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
         Dimensions,
         KeyboardAvoidingView
         } from 'react-native';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default class Detail extends React.Component {


    static navigationOptions = {
        title: 'Details',
        headerStyle: { backgroundColor: '#42D260', marginTop: 24 },
        headerTitleStyle: { color: 'white' },
      };

    constructor(props){
        super(props)

        this.state = {
            title : '',
            abstract : '',
            header: '',
            flip: false,
            height: 0
        }
    }

    _grabTitle = (text) => {
        this.state.title = text 
        this.setState(function(prevState, props){
            return {title: prevState.title}
         });

         console.log('Project Title', this.state.title)
         this._flip()
    }

    _grabHeader = (text) => {

        this.state.header = text
        this.setState(function(prevState,props){
            return {header: prevState.header}
        })

        console.log('Project Header', this.state.header)
        this._flip()
    }

    _grabAbstract = (text) => {

        this.state.abstract = text
        this.setState(function(prevState,props){
            return {abstract: prevState.abstract}
        })

        console.log('Project Abstract', this.state.abstract)
        this._flip()
    }

    _autoExpand = (event) => {
        this.state.height = event.nativeEvent.contentSize.height
        this.setState(function(prevState,props){
            return {height: prevState.height}
        })
       
    }

    _flip(){

        if(this.state.title != '' && this.state.header != '' && this.state.abstract != '')
        {
            this.state.flip = true
            this.setState(function(prevState, props){

                return {flip: prevState.flip}

                console.log('Flip: ', this.state.flip)
                
            })
        } else {
            this.state.flip = false
            this.setState(function(prevState, props){

                return {flip: prevState.flip}

                console.log('Flip: ', this.state.flip)
                
            })
        }

    }


    render(){
       
        const { navigate } = this.props.navigation
        return(

            <KeyboardAvoidingView behavior="padding">
            <ScrollView contentContainerStyle ={styles.container}
                        showsVerticalScrollIndicator={false}>

                <View style={styles.labelContainer}>
                
                     <Text style={styles.label}>Project Title</Text>

                </View>
           
                <View style={styles.inputContainer}>

                     <TextInput placeholder='title'
                                underlineColorAndroid='transparent' 
                                multiline={true}
                                style={styles.input}
                                onChangeText = {(text) => this._grabTitle(text)}/>

                </View>

                <View style={styles.labelContainer}>

                     <Text style={styles.label}>Project Header</Text>

                </View>

                <View style={styles.inputContainer}>

                     <TextInput  placeholder = 'header'
                                 underlineColorAndroid = 'transparent'  
                                 multiline = {true}
                                 maxLength={120}
                                 numberOfLines = {3} 
                                 style = {styles.input}
                                 onChangeText = {(text) => this._grabHeader(text)}/>

                </View>

                <View style={styles.labelContainer}>

                     <Text style={styles.label}>Project Abstract </Text>

                </View>

                <View style={styles.inputContainer}>

                     <TextInput  {...this.props}
                                 placeholder = 'abstract'
                                 underlineColorAndroid = 'transparent'  
                                 multiline = {true}
                                 numberOfLines = {5} 
                                 style = {[styles.input, {height: Math.max(100, this.state.height)}]}
                                 onChangeText = {(text) => this._grabAbstract(text)}
                                 onContentSizeChange = {(event) => this._autoExpand(event)}/>

                </View>


                <TouchableOpacity //disabled={!this.state.flip}
                                style={[styles.btnContainer, {backgroundColor: this.state.flip ? '#42D260' : 'white' }]} 
                                onPress={() => navigate('Categories') }>
                        <Text style={[styles.btnText,{color: this.state.flip ? 'white' : '#42D260'}]}> NEXT </Text>
                        <Image style={[styles.btnIcon, {tintColor: this.state.flip ? 'white' : '#42D260'}]} source={require('../../../../img/icons/greater.png')}/>
                </TouchableOpacity>
            </ScrollView>
            <View style={{height: 80}}/>
            </KeyboardAvoidingView>
        )
    }



}

const styles = StyleSheet.create({
    container: {
        height: height - 150,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    labelContainer:{
        width: width - 50,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginBottom: 20,
    },
    label: {
        color: '#42D260',
        fontSize: 20,
        fontWeight: '600'
    },
    inputContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        width: width - 50,
        borderWidth: 2,
        borderColor: 'grey',
        backgroundColor: '#F8F9FB',
        borderRadius: 5,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 20,
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
