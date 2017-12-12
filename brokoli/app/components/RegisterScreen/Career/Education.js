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

        let specializationData = [{
            value: 'Computer Science',
          }, {
            value: 'Information Science',
        }];

        let yyData = [{
            value: 2017,
        },{
            value: 2016,
        },{
            value: 2015,
        }, {
            value: 2014,
        },{
            value: 2013,
        },{
            value: 2012,
        },{
            value: 2011,
        },{
            value: 2010,
        },{
            value: 2009,
        }, {
            value: 2008,
        },{
            value: 2007,
        },{
            value: 2006,
        }, {
            value: 2005,
        },{
            value: 2004,
        },{
            value: 2003,
        }, {
            value: 2002,
        },{
            value: 2001,
        },{
            value: 2000,
        }, {
            value: 1999,
        },{
            value: 1998,
        }, {
            value: 1997,
        },{
            value: 1996,
        },{
            value: 1995,
        }, {
            value: 1994,
        },{
            value: 1993,
        },{
            value: 1992,
        }, {
            value: 1991,
        },{
            value: 1990,
        }];
    
        return(

            <ViewContainer style={styles.educationCont}>

                <View style={styles.eduTitleCont}>

                    <Text style={styles.eduTitle}> Most recent education </Text>
                    
                </View>

                <View style={styles.topEdu}>

                    <TextInput style={styles.name} placeholder='name of school' /> 

                </View>

                <View style={styles.middleEdu}>


                    <View style={{flex: 1}}>

                        <TextInput style={styles.location} placeholder="location" />

                    </View>

                    <View style={styles.yearCont} >

                        <View style={{flex: 1, justifyContent: 'center'}}> 

                            <Dropdown
                                label='yy'
                                data={yyData}/> 

                        </View>

                        <View style={{flex: 1}}>

                            <Text> until </Text>

                        </View>

                        <View style={{flex: 1}}>

                            <Dropdown
                                label='yy'
                                data={yyData}/> 

                        </View>

                    </View>

                </View>

                <View style={styles.bottomEdu}>

                <View style={{flex: 2, marginLeft: 10}}>

                <Dropdown
                    label='choose a degree'
                    data={degreeData}/>    

                </View>

                <View style={{flex: 3, marginLeft: 10, marginRight: 10}}>

                <Dropdown
                    label='choose a specialization'
                    data={specializationData}/>   

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
        width: width - 20,
        marginBottom: 10,

    },
    name: {
        borderWidth: 1,
        marginLeft: 10,
        marginRight: 10,
        padding: 5,
        borderRadius: 5,
        alignItems: 'center',
        width: width - 40,
        borderColor: 'grey'   
    },
    middleEdu: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'

    },
    yearCont: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    location: {
        borderWidth: 1,
        marginLeft: 10,
        marginRight: 10,
        padding: 5,
        borderRadius: 5, 
        borderColor: 'grey'   
    },
    bottomEdu:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    }


})
