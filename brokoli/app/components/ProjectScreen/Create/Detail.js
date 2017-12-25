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
            name : '',
            abstract : '',
            goal: '',
            flip: false,
        }
    }

    


    render(){
        const { navigate } = this.props.navigation
        return(
            <View style={styles.container}>

                <View style={styles.labelContainer}>
                
                     <Text style={styles.label}> Project Title </Text>

                </View>
           
                <View style={styles.inputContainer}>

                     <TextInput placeholder='title'
                                underlineColorAndroid='transparent' 
                                style={styles.input}/>

                </View>

                <View style={styles.labelContainer}>

                     <Text style={styles.label}> Shortly describe project insight  </Text>

                </View>

                <View style={styles.inputContainer}>

                     <TextInput  placeholder='header description'
                                 underlineColorAndroid='transparent'  
                                 style={styles.input}/>

                </View>


                <TouchableOpacity disabled={!this.state.flip}
                                style={[styles.btnContainer, {backgroundColor: this.state.flip ? '#42D260' : 'white' }]} 
                                onPress={() => navigate('Categories') }>
                        <Text style={[styles.btnText,{color: this.state.flip ? 'white' : '#42D260'}]}> NEXT </Text>
                        <Image style={[styles.btnIcon, {tintColor: this.state.flip ? 'white' : '#42D260'}]} source={require('../../../../img/icons/greater.png')}/>
                </TouchableOpacity>
            </View>
        )
    }



}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    inputContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        width: width - 100,
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
