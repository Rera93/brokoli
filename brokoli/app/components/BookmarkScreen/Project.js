import React from 'react';
import { StyleSheet, 
         Text, 
         Image, 
         View,
         FlatList,
         TouchableOpacity,
         Dimensions } from 'react-native';

const width = Dimensions.get('window').width

export default class Project extends React.Component{

    render(){


        return (

            <View style={styles.container}> 

                    <Text> Hello </Text>

                </View>

        )
    }


}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    }


}) 