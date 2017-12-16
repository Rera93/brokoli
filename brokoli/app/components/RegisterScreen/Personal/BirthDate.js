import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, Dimensions } from 'react-native';
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
        this._hideDatePicker();
    };
    
    render(){

        let today = new Date();

        return(

            <ViewContainer style={styles.container}>

                <Text style={[styles.cond, {color: '#BE2625'}]}> R </Text>
                
              <TouchableOpacity style={styles.dateBirthCont} onPress={this._showDatePicker}>
              <Text style={styles.dateBirth}> {this.state.text} </Text>
              </TouchableOpacity> 

              <DatePicker 
                isVisible = {this.state.isDateTimePickerVisible}
                onConfirm = {this._handleDatePicked}
                onCancel = {this._hideDatePicker}
                maximumDate = {today}/>
        
                </ViewContainer>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        marginBottom: 15,
        flexDirection: 'row'
    },
    dateBirthCont: {
        alignItems: 'center',
        borderWidth: 1,
        padding: 10,
        width: width - 60,
        marginRight: 15,
        borderRadius: 5,
        borderColor: 'grey'
    },
    dateBirth:{
        color: '#42D260'
    },
    cond: {
        fontSize: 17,
        fontWeight: '600',
        paddingRight: 5,
    }
    });
    

