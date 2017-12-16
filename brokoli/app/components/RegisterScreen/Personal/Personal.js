import React from 'react';
import { StyleSheet, 
         Text, 
         TouchableOpacity, 
         Dimensions, 
         KeyboardAvoidingView, 
         View,
         ScrollView,
         TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';

import FullName from './FullName'
import ProfilePic from './ProfilePic'
import BirthDate from './BirthDate'
import Gender from './Gender'
import Location from './Location'
import ViewContainer from '../../ViewContainer'

const width = Dimensions.get('window').width

export default class Personal extends React.Component {

    static navigationOptions = {
        title: 'Personal',
        headerStyle: { backgroundColor: '#42D260', marginTop: 24 },
        headerTitleStyle: { color: 'white' },
      };
    
    render(){

        const {navigate}= this.props.navigation
        
        return(

            
            <KeyboardAvoidingView behavior="padding">
            
                        <ScrollView contentContainerStyle={styles.personal}
                                    showsVerticalScrollIndicator={false}>

                <FullName />
                <ProfilePic />
                <BirthDate />
                <Gender />

                <View style={styles.whereabouts}> 
                    <Text style={[styles.cond, {color: '#EEAD0E'}]}> O </Text>
                    <TextInput style={styles.locInput} placeholder='city' />
                    <Text style={[styles.cond, {color: '#EEAD0E'}]}> O </Text>
                    <TextInput style={styles.locInput} placeholder='country'/>  
                </View>

                <TouchableOpacity onPress={()=> navigate('Account')}
                                  style={styles.button}>

                <Text style={styles.btnText}> NEXT </Text>

                </TouchableOpacity>

                </ScrollView>

                <View style={{height: 80}} />

                </KeyboardAvoidingView>


        )
    }
}

const styles = StyleSheet.create({
    personal: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 40,

    },
    whereabouts: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
        flexDirection: 'row'
    },
    locInput: {
        color: '#42D260',
        padding: 10,
        width: width / 2 - 50,
        borderRadius: 5,
        marginTop: 15,
        marginBottom: 15,
        marginRight: 20,
        borderWidth: 1,
        borderColor: 'grey'
    },
    cond: {
        fontSize: 17,
        fontWeight: '600',
    }, 
    button: {
    backgroundColor: '#42D260',
    marginBottom: 20,
    borderRadius: 10,
    width: width - 300,
    alignItems: 'center'
    },
    btnText: {
    color : 'white',
    padding: 10,
    fontWeight: 'bold'
}
})
