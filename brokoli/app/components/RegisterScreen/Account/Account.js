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
const height = Dimensions

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
          flip: false

        }
    
      }

      _grabUsername = (text) => {

        this.state.username = text
        this.setState(function(prevState, props){
          return {username: prevState.username}
        });

        console.log('Username: ', this.state.username)
      }

      _grabEmail = (text) => {

        this.state.email = text
        this.setState(function(prevState, props){
          return {email: prevState.email}
         });
        console.log('Email: ', this.state.email)

        this._flipNext()
        
      }

      _grabPassword = (text) => {

        this.state.password = text
        this.setState(function(prevState, props){
          return {password: prevState.password}
         });
        console.log('Password: ', this.state.password)

        this._flipNext()
        
      }

      _grabPasswordConf = (text) => {

        this.state.passwordConf = text
        this.setState(function(prevState, props){
          return {passwordConf: prevState.passwordConf}
        });
        console.log('ConfPassword: ', this.state.passwordConf)

        this._flipNext()
      }

      _flipNext(){
        if(this.state.email != '' && this.state.password != '' &&
            this.state.passwordConf != '' && this.state.username != '')
            {
                this.state.flip = true
                this.setState(function(prevState, props){
                    return {flip: prevState.flip}
                 });
            }
         else {
            this.state.flip = false
            this.setState(function(prevState, props){
                return {flip: prevState.flip}
             });
             
         }
         console.log('Flip: ', this.state.flip)
    }

    componentDidMount() {
        //Alert.alert("Props", this.props.navigation.state.params.date + this.props.navigation.state.params.gender) ;
        this.setState({firstName : this.props.navigation.state.params.firstName,
                        lastName: this.props.navigation.state.params.lastName,
                        dateOfBirth: this.props.navigation.state.params.dateOfBirth,
                        gender: this.props.navigation.state.params.gender,
                        city: this.props.navigation.state.params.city,
                        country: this.props.navigation.state.params.country})
      }

    

    render(){

        const {navigate}= this.props.navigation
        return(


            
          <KeyboardAvoidingView behavior="padding" backgroundColor='white'>
          
                      <ScrollView contentContainerStyle={styles.account}
                                  showsVerticalScrollIndicator={false}
                                  centerContent = {true}>

                        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

                        <View style={styles.titleContainer}> 

                          <Text style={styles.title}>Please enter your credentials</Text>

                          </View>

                        <View style={styles.inputContainer}> 
                    
                          <View style={{flex: 1}}> 
                          <TextInput style={styles.input} 
                                     placeholder='username'
                                     placeholderTextColor= '#C7C7CD'
                                     underlineColorAndroid = 'transparent'
                                     onChangeText={(text) => this._grabUsername(text)}/>
                          </View>
                          <View style={styles.condCont}>
                          <Text style={styles.cond}> R </Text>
                          </View>
                        </View>

                        <View style={styles.inputContainer}> 
              
                          <View style={{flex: 1}}>
                          <TextInput style={styles.input} 
                                     placeholder='email'
                                     placeholderTextColor= '#C7C7CD'
                                     underlineColorAndroid = 'transparent'
                                     onChangeText={(text) => this._grabEmail(text)} />
                          </View>

                          <View style={styles.condCont}>
                          <Text style={styles.cond}> R </Text>
                          </View>

                        </View>

                        <View style={styles.inputContainer}> 
                          <View style={{flex: 1}}>
                          <TextInput style={styles.input} 
                                     placeholder='password'
                                     placeholderTextColor= '#C7C7CD'
                                     underlineColorAndroid = 'transparent'
                                     onChangeText={(text) => this._grabPassword(text)} />
                          </View>
                          <View style={styles.condCont}>
                          <Text style={styles.cond}> R </Text>
                          </View>
                        </View>

                        <View style={styles.inputContainer}>
                          
                          <View style={{flex: 1}}>
                          <TextInput style={styles.input} 
                                     placeholder='confirm password'
                                     placeholderTextColor= '#C7C7CD'
                                     underlineColorAndroid = 'transparent'
                                     onChangeText={(text) => this._grabPasswordConf(text)} />
                          </View>

                          <View style={styles.condCont}>
                          <Text style={styles.cond}> R </Text> 
                          </View>
                        </View>

                    <TouchableHighlight //disabled={this.state.flip ? false : true} 
                                        onPress={()=> navigate('Professional', {firstName: this.state.firstName, lastName: this.state.lastName, dateOfBirth: this.state.dateOfBirth, gender: this.state.gender, city: this.state.city,  country: this.state.country, username: this.state.username, email: this.state.email, password: this.state.password})}
                                        style={[styles.button, {backgroundColor: this.state.flip ? '#42D260' : 'white'}]}>

                    <Text style={[styles.btnText, {color: this.state.flip ? 'white' : '#42D260'}]}> NEXT </Text>

                    </TouchableHighlight>

                    </View>

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
            paddingVertical: 20,
    },
    titleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
        marginTop: 15,
        marginLeft: 20,
        marginRight: 20
    },
    title: {
      color: 'grey',
      fontWeight: '900',
      fontSize: 18,
    },
    inputContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        flexDirection: 'row',
        borderRadius: 5,
        marginTop: 15,
        marginBottom: 15,
        marginRight: 20,
        marginLeft: 20,
        borderWidth: 2,
        borderColor: 'grey',
    },
    input: {
      color: '#C7C7CD',
      fontSize: 17,
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
        width: 22,
        height: 22,
        borderRadius: 11,
        backgroundColor: '#42D260'
    },
    button: {
            width: width - 300,
            marginTop: 20,
            marginBottom: 40,
            borderRadius: 10,
            alignItems: 'center',
            borderWidth: 2,
            borderColor: '#42D260'
    },
    btnText: {
      padding: 10,
      fontWeight: 'bold'

    }
});
