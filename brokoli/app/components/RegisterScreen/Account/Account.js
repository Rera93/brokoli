import React from 'react';
import { Dimensions,
         StyleSheet, 
         Text, 
         TouchableHighlight, 
         View, 
         KeyboardAvoidingView,
         ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Email from './Email'
import Username from './Username'
import Password from './Password'
import PassConfirm from './PassConfirm'

const window = Dimensions.get('window');
const width = window.width


export default class Account extends React.Component {
    static navigationOptions = {
        title: 'Account',
        headerStyle: { backgroundColor: '#42D260', marginTop: 24 },
        headerTitleStyle: { color: 'white' },
      };

      constructor(props) {
        super(props);
    
      }

    

    render(){

        const {navigate}= this.props.navigation
        return(


            
          <KeyboardAvoidingView behavior="padding">
          
                      <ScrollView contentContainerStyle={styles.account}
                                  showsVerticalScrollIndicator={false}>

                    <Email />
                    <Username />
                    <Password />
                    <PassConfirm />

                    <TouchableHighlight 
                                onPress={()=> navigate('Professional')}
                                style={styles.button}>

                    <Text style={styles.btnText}> NEXT </Text>

                    </TouchableHighlight>

                    </ScrollView>

                    <View style={{height: 80}} />

                </KeyboardAvoidingView>

        )
    }
}

const styles = StyleSheet.create({
	account: {
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
    },
    button: {
            backgroundColor: '#42D260',
            width: width - 100,
            marginBottom: 20,
            borderRadius: 10,
            alignItems: 'center'
    },
    btnText: {
      color : 'white',
      padding: 10,
      fontWeight: 'bold'

    }
});
