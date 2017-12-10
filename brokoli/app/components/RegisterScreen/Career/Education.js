import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Dimensions, View, TextInput } from 'react-native';

import ViewContainer from '../../ViewContainer'
import { Dropdown } from 'react-native-material-dropdown';

const width = Dimensions.get('window').width

export default class Education extends React.Component {

    
    render(){
        let degreeData = [{
            value: 'Phd',
          }, {
            value: 'Master',
          }, {
            value: 'Bachelor',
          }];
    
        return(

            <ViewContainer style={styles.educationCont}>

              <View style={styles.eduTitleCont}>
              <Text style={styles.eduTitle}> Most recent education </Text>
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

                <Dropdown
                    label='choose a degree'
                    data={degreeData}/>    

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
        width: width - 20,
        backgroundColor: 'white',
        marginTop: 10,
    },
    eduTitleCont: {
        padding: 15,
    },
    eduTitle: {
        fontSize: 16, 
        fontWeight: '600',
        color: 'grey'
    },
    topEdu: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
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
    },
    bottomEdu:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    }


})
