import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import ViewContainer from '../../ViewContainer'

    

export default class Gender extends React.Component {

    constructor(props){
        super(props);
        this.state = {

        radio_props : [
            {label: 'Male', value: 0 },
            {label: 'Female', value: 1 },
            {label: 'Other', value: 2 }
          ],
        selectedValue : 0,
        selectedValueIndex: 0,
        }
    }
    render(){

        
                return(
                    <ViewContainer style={styles.container}>
                     <View style={[styles.condCont, {backgroundColor: '#BE2625'}]}> 
                    <Text style={styles.cond}> R </Text>
                    </View>
                    <RadioForm formHorizontal={true} animation={true}>
                    {/* To create radio buttons, loop through your array of options */}
                    {this.state.radio_props.map((obj, i) => {
                         var onPress = (value, index) => {
                          this.state.selectedValue = value
                          this.state.selectedValueIndex = index

                          this.setState(function(prevState, props){
                            return {selectedValue: prevState.selectedValue,
                                    selectedValueIndex: prevState.selectedValueIndex  }
                              });

                            this.props.callbackFromParent(this.state.radio_props[this.state.selectedValue].label);
                          

                          }
                          return (
                      <RadioButton labelHorizontal={true} key={i} >
                        {/*  You can set RadioButtonLabel before RadioButtonInput */}
                        <RadioButtonInput
                          obj={obj}
                          index={i}
                          isSelected={this.state.selectedValueIndex === i}
                          onPress={onPress}
                          borderWidth={1}
                          buttonInnerColor={'#1ED760'}grey
                          buttonOuterColor={this.state.selectedValueIndex === i ? '#1ED760' : '#1ED760'}
                          buttonSize={10}
                          buttonOuterSize={20}
                          buttonStyle={{}}
                          buttonWrapStyle={{marginLeft: 10}}
                        />
                        <RadioButtonLabel
                          obj={obj}
                          index={i}
                          labelHorizontal={true}
                          onPress={onPress}
                          labelStyle={{fontSize: 15, color: 'grey'}}
                          labelWrapStyle={{}}
                        />
                        </RadioButton>
                        )
                    })}
                    
                </RadioForm>
               { /* TODO: Pass to database.
                    <Text>selected: {this.state.radio_props[this.state.selectedValueIndex].label}</Text> 
               */} 
                </ViewContainer>

                )
    }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginBottom: 15,
    paddingRight: 70,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  cond: {
    fontSize: 17,
    textAlign: 'center',
    fontWeight: '600',
    color: 'white'
},
condCont: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 25,
    height: 25,
    borderRadius: 25/2,
    marginRight: 60,
},
})

