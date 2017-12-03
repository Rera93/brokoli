import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import DatePicker from 'react-native-modal-datetime-picker'

import ViewContainer from '../../ViewContainer'

export default class BirthDate extends React.Component {

    constructor(props){
        super(props);
        this.state = {
                        isDateTimePickerVisible: false,
                        text: 'mm-dd-yyyy',
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

            <ViewContainer>
                
              <TouchableOpacity onPress={this._showDatePicker}>
              <Text> {this.state.text} </Text>
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

