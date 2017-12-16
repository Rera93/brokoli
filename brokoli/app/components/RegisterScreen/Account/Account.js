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
        
        this.state = {

          username: '',
          email: '',
          password: '',
          passwordConf: '',

        }
    
      }

      _grabUsername = (text) => {

        this.state.username = text
        this.setState({username: this.state.username})
        console.log('Username: ', this.state.username)
      }

      _grabEmail = (text) => {

        this.state.email = text
        this.setState({email: this.state.email})
        console.log('Email: ', this.state.email)
        
      }

      _grabPassword = (text) => {

        this.state.password = text
        this.setState({password: this.state.password})
        console.log('Password: ', this.state.password)
        
      }

      _grabPasswordConf = (text) => {

        this.state.passwordConf = text
        this.setState({passwordConf: this.state.passwordConf}) 
        console.log('ConfPassword: ', this.state.passwordConf)
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
                          <Text style={[styles.cond, {color: '#EEAD0E'}]}> O </Text>
                          <TextInput style={styles.input} 
                                     placeholder='username'
                                     onChangeText={(text) => this._grabUsername(text)}/>
                        </View>

                        <View style={styles.inputContainer}> 
                          <Text style={[styles.cond, {color: '#BE2625'}]}> R </Text>
                          <TextInput style={styles.input} 
                                     placeholder='email'
                                     onChangeText={(text) => this._grabEmail(text)} />
                        </View>

                        <View style={styles.inputContainer}> 
                          <Text style={[styles.cond, {color: '#BE2625'}]}> R </Text>
                          <TextInput style={styles.input} 
                                     placeholder='password'
                                     onChangeText={(text) => this._grabPassword(text)} />
                        </View>

                        <View style={styles.inputContainer}>
                          <Text style={[styles.cond, {color: '#BE2625'}]}> R </Text> 
                          <TextInput style={styles.input} 
                                     placeholder='confirm password'
                                     onChangeText={(text) => this._grabPasswordConf(text)} />
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
            paddingVertical: 30
    },
    titleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
        marginTop: 15,
        width: width,
    },
    title: {
      color: 'grey',
      fontWeight: '900',
      padding: 10,
      width: width - 100,
      fontSize: 17,
    },
    inputContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
        flexDirection: 'row'
    },
    input: {
      color: '#42D260',
      padding: 10,
      width: width - 100,
      borderRadius: 5,
      marginTop: 15,
      marginBottom: 15,
      marginRight: 20,
      borderWidth: 1,
      borderColor: 'grey',
    },
    cond: {
        fontSize: 17,
        paddingRight: 20,
        fontWeight: '600',
        

    },
    button: {
            backgroundColor: '#42D260',
            width: width - 300,
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
