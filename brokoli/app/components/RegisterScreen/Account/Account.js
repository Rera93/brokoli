import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableHighlight, View, KeyboardAvoidingView, Animated, Keyboard } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Email from './Email'
import Username from './Username'
import Password from './Password'
import PassConfirm from './PassConfirm'
import ViewContainer from '../../ViewContainer'
import logo from '../../../../img/icons/brokoli.png'

const window = Dimensions.get('window');


export default class Account extends React.Component {
    static navigationOptions = {
        title: 'Account'
      };

      constructor(props) {
        super(props);
    
        this.keyboardHeight = new Animated.Value(0);
        this.imageHeight = new Animated.Value(window.width / 2)
      }

      componentWillMount () {
        this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
        this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
      }
    
      componentWillUnmount() {
        this.keyboardDidShowSub.remove();
        this.keyboardDidHideSub.remove();
      }
    
      keyboardDidShow = (event) => {
        Animated.parallel([
          Animated.timing(this.keyboardHeight, {
            toValue: event.endCoordinates.height,
          }),
          Animated.timing(this.imageHeight, {
            toValue: window.width / 7,
          }),
        ]).start();
      };
    
      keyboardDidHide = (event) => {
        Animated.parallel([
          Animated.timing(this.keyboardHeight, {
            toValue: 0,
          }),
          Animated.timing(this.imageHeight, {
            toValue: window.width / 2,
          }),
        ]).start();
      };
    

    render(){

        const {navigate}= this.props.navigation
        return(

            <Animated.View style={[styles.container, { paddingBottom: this.keyboardHeight }]}>

            <Animated.Image source={logo} style={[styles.logo, { height: this.imageHeight }]} />

            <KeyboardAwareScrollView style={{backgroundColor: 'white'}}
                                     resetScrollToCoords={{ x: 0, y: 0 }}
                                     contentContainerStyle={styles.container}
                                     scrollEnabled={false}>

                    <Email />
                    <Username />
                    <Password />
                    <PassConfirm />

                    <TouchableHighlight 
                                onPress={()=> navigate('Professional')}
                                style={styles.button}>

                    <Text style={styles.btnText}> NEXT </Text>

                    </TouchableHighlight>

                </KeyboardAwareScrollView>

                </Animated.View>

        )
    }
}

const styles = StyleSheet.create({
	container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white'
    },
    logo: {
            height: window.width / 2,
            resizeMode: 'contain',
            marginBottom: 20,
            padding:10,
            marginTop:20
          },
    button: {
            backgroundColor: '#0FFDD8',
            marginBottom: 20,
            borderRadius: 10,
    },
    btnText: {
      color : 'white',
      padding: 10
    }
});
