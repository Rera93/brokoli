import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Dimensions, TextInput, View, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Header from './Header'
import Summary from './Summary'
import ViewContainer from '../../ViewContainer'

const width = Dimensions.get('window').width

export default class Additional extends React.Component {

    static navigationOptions = {
        title: 'Additional',
        headerStyle: { backgroundColor: '#42D260', marginTop: 24 },
        headerTitleStyle: { color: 'white' },
      };


    constructor(props){
        super(props)

        this.state={
            addNew: false
        }
    }

    
    _flip(){

        this.setState({addNew: !this.state.addNew});
        console.log("addNew: ", this.state.addNew)

        {this._addNew}      
    }

    _addNew(){

        if(this.state.addNew == true){
            return(
                <View style={styles.skill}>
                
                    <TextInput placeholder='skill'/>
                
                </View> )
                //console.log("addNew: ", this.state.addNew)
                this.setState({addNew: !this.state.addNew})
                //console.log("addNew: ", this.state.addNew)
                
        }
    }

    
    render(){
        return(

            <ScrollView contentContainerStyle={styles.additional}
                        showsVerticalScrollIndicator={false}>

                <Header />

                <View style={styles.skill}>

                <TextInput placeholder='skill'/>

                </View>


                <TouchableOpacity style={styles.add} onPress={this._flip.bind(this)}>

                 <Text style={styles.plus}> + </Text>

                </TouchableOpacity> 

                {this._addNew()}

                <Summary />

                <TouchableOpacity style={styles.button}>

                <Text style={styles.btnText}> Proceed </Text>

                </TouchableOpacity>

                </ScrollView>

        )
    }
}

const styles = StyleSheet.create({
    additional: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
    backgroundColor: '#42D260',
    marginBottom: 20,
    borderRadius: 10,
    width: width - 100,
    alignItems: 'center'
    },
    btnText: {
    color : 'white',
    padding: 10,
    fontWeight: 'bold'
}, 
    add: {
        backgroundColor: 'white', 
    },
    plus: {
        color: '#42D260',
        padding: 10,
        fontSize: 55
    },
    skill: {
        flex: 1,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: width - 60
    }

})

