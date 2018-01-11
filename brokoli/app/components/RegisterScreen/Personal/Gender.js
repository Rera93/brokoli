import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

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
                    <View style={styles.container}>

                    <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'center'}}>
                    
                    <RadioForm formHorizontal={true} animation={true} style={{alignItems: 'center',justifyContent: 'center'}}>
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
                      <RadioButton labelHorizontal={true} key={i} style = {{justifyContent:'center', alignItems:'center'}} >
                        {/*  You can set RadioButtonLabel before RadioButtonInput */}
                        <RadioButtonInput
                          obj={obj}
                          index={i}
                          isSelected={this.state.selectedValueIndex === i}
                          onPress={onPress}
                          borderWidth={3}
                          buttonInnerColor={'#42D260'}
                          buttonOuterColor={this.state.selectedValueIndex === i ? '#42D260' : '#42D260'}
                          buttonSize={10}
                          buttonOuterSize={22}
                          buttonStyle={{}}
                          buttonWrapStyle={{marginLeft: 10, marginTop: 5}}
                        />
                        <RadioButtonLabel
                          obj={obj}
                          index={i}
                          labelHorizontal={true}
                          onPress={onPress}
                          labelStyle={{fontSize: 17, color: '#C7C7CD'}}
                          labelWrapStyle={{marginTop: 5}}
                        />
                        </RadioButton>
                        )
                    })}
                    
                </RadioForm>

                </View>
                
                <View style={styles.condCont}> 
                    <Text style={styles.cond}> R </Text>
                    </View>
                </View>

                )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
    marginLeft: 20,
    padding: 10,
  },
  cond: {
    fontSize: 17,
    textAlign: 'center',
    fontWeight: '600',
    color: 'white'
},
condCont: {
    backgroundColor: '#42D260',
    alignItems: 'center',
    justifyContent: 'center',
    width: 22,
    height: 22,
    borderRadius: 11,
    marginRight: 7.5,
},
})

