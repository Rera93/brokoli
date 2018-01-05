import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, Dimensions, View } from 'react-native';
import DatePicker from 'react-native-modal-datetime-picker'

import ViewContainer from '../../ViewContainer'

const width = Dimensions.get("window").width

export default class BirthDate extends React.Component {

    constructor(props){
        super(props);
        this.state = {
                        isDateTimePickerVisible: false,
                        text: 'date of birth',
                     };

    }

    _showDatePicker = () => this.setState({isDateTimePickerVisible: true});

    _hideDatePicker = () => this.setState({isDateTimePickerVisible: false});

    _handleDatePicked = (date) => {
        console.log('Picked date: ', date);
        this.setState({text: String(date).substr(4, 12)})
        this.props.callbackFromParent(this.state.text);
        this._hideDatePicker();
    };
    
    render(){

        let today = new Date();

        return(

            <View style={styles.container}>

               
              <TouchableOpacity style={styles.dateBirthCont} onPress={this._showDatePicker}>
              <Text style={styles.dateBirth}> {this.state.text} </Text>
              </TouchableOpacity> 

              <View style={styles.condCont}> 

                <Text style={styles.cond}> R </Text>

                </View>
                

              <DatePicker 
                isVisible = {this.state.isDateTimePickerVisible}
                onConfirm = {this._handleDatePicked}
                onCancel = {this._hideDatePicker}
                maximumDate = {today}/>
        
                </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginLeft: 20,
        padding: 10,
        borderRadius: 5,
        marginTop: 15,
        marginBottom: 15,
        marginRight: 20,
        borderWidth: 3,
        borderColor: 'white'
    },
    dateBirthCont: {
        flex: 1,
    },
    dateBirth:{
        color: 'white',
        fontSize: 17
    },
    cond: {
        fontSize: 17,
        textAlign: 'center',
        fontWeight: '600',
        color: '#42D260'
    },
    condCont: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: 22,
        height: 22,
        borderRadius: 11,
        marginRight: 5,
    },
    });
    

