import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Dimensions, View, TextInput } from 'react-native';

import ViewContainer from '../../ViewContainer'

const width = Dimensions.get('window').width

export default class Education extends React.Component {

    
    render(){
    
        return(

            <ViewContainer style={styles.educationCont}>

              <View>
              <Text> Most recent education </Text>
              </View>

              <View style={styles.topEdu}>

              <View style={{flex: 1}}>

                <TextInput style={styles.name} placeholder='name of school' /> 

                </View>

                <View style={{flex: 1}}>

                <TextInput style={styles.location} placeholder="location" />

                </View>

                </View>

                <View style={styles.bottomEdu}>

              <View style={{flex: 1}}>

                <TextInput style={styles.name} placeholder='name of school' /> 

                </View>

                <View style={{flex: 1}}>

                <TextInput style={styles.location} placeholder="location" />

                </View>

                </View>

                </ViewContainer>

        )
    }
}

const styles = StyleSheet.create({

    educationCont: {
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: '#42D260',
        width: width
    },
    topEdu: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    name: {
        borderWidth: 1,
        marginLeft: 10,
        marginRight: 10,
        padding: 5,
        borderRadius: 5,
        alignItems: 'center'    
    },
    location: {
        borderWidth: 1,
        marginLeft: 10,
        marginRight: 10,
        padding: 5,
        borderRadius: 5,
        
    }


})
