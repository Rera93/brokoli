import React from 'react';
import { Dimensions,
         StyleSheet, 
         Text, 
         TouchableHighlight, 
         View, 
         KeyboardAvoidingView,
         ScrollView, 
         TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';

const width = Dimensions.get('window').width

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

                        <View style={styles.titleContainer}> 

                          <Text style={styles.title}> Please enter your Brokoli credentials </Text>

                          </View>

                        <View style={styles.inputContainer}> 
                          <TextInput style={styles.input} 
                                     placeholder='username' />
                        </View>

                        <View style={styles.inputContainer}> 
                          <TextInput style={styles.input} 
                                     placeholder='email' />
                        </View>

                        <View style={styles.inputContainer}> 
                          <TextInput style={styles.input} 
                                     placeholder='password' />
                        </View>

                        <View style={styles.inputContainer}> 
                          <TextInput style={styles.input} 
                                     placeholder='confirm password' />
                        </View>

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
    titleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        marginTop: 20,
        width: width - 100,
    },
    title: {
      color: 'grey',
      fontWeight: '600',
      padding: 10,
      width: width - 100,
      fontSize: 17,
    },
    inputContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 20,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: 'grey',
        width: width - 100,
    },
    input: {
      color: '#42D260',
      padding: 10,
      width: width - 100,
    },
    button: {
            backgroundColor: '#42D260',
            width: width - 100,
            marginTop: 20,
            marginBottom: 40,
            borderRadius: 10,
            alignItems: 'center'
    },
    btnText: {
      color : 'white',
      padding: 10,
      fontWeight: 'bold'

    }
});
