import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

export default class Overview extends React.Component
{

    render(){
        return(

            <View style={styles.container}> 

                 <Text> Overview </Text>

                 </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
})