import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ScrollView, View, Dimensions } from 'react-native';
import CheckBox from 'react-native-check-box'
import interests from './interests.json'
import Toast from 'react-native-easy-toast'

const width = Dimensions.get("window"). width


import ViewContainer from '../../ViewContainer'

export default class Interests extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          
        }
    }

    
    

    
    render(){
        return(

            <View style={styles.container}>

                <Text> Pick at least 2 categories </Text>

                <View style={styles.categories}>

                <TouchableOpacity style={styles.category}>

                    <Text style={styles.title}> Business </Text> 


                </TouchableOpacity>

                    
                <TouchableOpacity style={styles.category}>

                    <Text style={styles.title}> Programming </Text> 
                    

                    </TouchableOpacity>

                    </View>

                </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width - 60,
        marginTop: 15,
        marginBottom: 15,
        alignItems: 'center'
    },
    categories: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    category: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        borderColor: '#42D260',
        marginBottom: 15
    },
    title: {
        color: 'grey'
    }
})