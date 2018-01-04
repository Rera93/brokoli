/*
  Created by Brigel Pineti

  Header will contain user profile picture, name and position.
*/

import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, Alert, TouchableOpacity, TextInput } from 'react-native';
import Skills from './Skills'
import Projects from './Projects'
import Jobs from './Jobs'
import Overview from './Overview'
import Tabs from './Tabs'


import FloatingAction from '../FloatingTopComponent/FloatingAction'
import Modal from 'react-native-modal'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const profileIcon = require('../../../img/icons/profile_pic.png')

export default class Profile extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            userData: '',
            jobsInfo: [],
            name: '',
            header: '',
            projectNr: 0,
            applicationNr: 0,
            isModalLogoutVisible: false,
            isModalAccountVisible: false,
            isModalProfileVisible: false,
            oldPassword: '',
            newPassword: '',
            newPasswordConfirm: '',
            oldEmail: '',
            newEmail: '',
            newFullName: '',
            newHeader: '',
            //current whereabouts
            newCity: '',
            newCountry: '',
            newProfilePic: '',
            height: 0


        }
    }

    componentWillMount(){
        //const { params } = this.props.navigation.state;console.log(this.navigation.state.params.userID);
           this.getData();



           //const { params } = this.props.navigation.state;
         }
         
    _onActionPressed(action){

        switch(action){

            case 'bt_profile': 

            {this._toggleProfileModal()}

            break;
            case 'bt_account': 

           {this._toggleAccountModal()}
            
            break;
            case 'bt_logout': 
            
            {this._toggleLogoutModal()}
                       
             break;

             default: 
             break;
        }

    }
    

     getData(){
     
           fetch('https://brokoli.eu-gb.mybluemix.net/api/loadProfile', {  
             method: 'POST',
             headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json',
             }
           ,
              body: JSON.stringify({
              userID: this.props.screenProps,

            })
            })
             // .then(function(response) { return response.json(); })
             // .then(function(responseData) {
             //   this.setState({ data : responseData})});
     
             .then((response) => response.json())
             .then((responseData) => {
                this.setState({ userData : responseData.data,
                                name: responseData.data.firstName + " " + responseData.data.lastName,
                                header: responseData.data.passHeadertoDb});
               
             });
     
         }
    _toggleLogoutModal = () => {

        this.state.isModalLogoutVisible = !this.state.isModalLogoutVisible
        this.setState(function(prevState, props){
            return {isModalLogoutVisible: prevState.isModalLogoutVisible}
        })
        console.log('isModalLogoutVisible: ', this.state.isModalLogoutVisible)
      }

      _renderLogoutModal = () => (
        <View style={[styles.modalContent, {backgroundColor: '#254D32'}]}>
        
            <Text style={[styles.title, {color: 'white'}]}>Are you sure you want to logout?</Text>
        
            <View style={{flexDirection: 'row'}}>
        
                <TouchableOpacity style={[styles.button,{backgroundColor: 'white'}]} >
                    <Text style={[styles.btnTxt, {color: '#254D32'}]}>Ok</Text>
                
                </TouchableOpacity>
        
                <TouchableOpacity style={[styles.button, {backgroundColor: '#A7333F'}]} 
                                  onPress={() => this._toggleLogoutModal()}>
                    <Text style={[styles.btnTxt, {color: 'white'}]}>Cancel</Text>
                
                </TouchableOpacity>
        
            </View>
        
        </View>

      )

      _toggleAccountModal = () => {
        
        this.state.isModalAccountVisible = !this.state.isModalAccountVisible
        this.setState(function(prevState, props){
            return {isModalAccountVisible: prevState.isModalAccountVisible}
        })
        console.log('isModalAccountVisible: ', this.state.isModalAccountVisible)
        this._releaseNewAccountData()
        }

        _renderAccountModal = () => (

            <View style={styles.modalContent}>
            
                    <View style={styles.form}> 
            
                    <Text style={styles.title}>Update account settings</Text> 
            
                    <View style={{marginTop: 20}}>
                          
                    <TextInput placeholder='old email'
                                     style={styles.input}
                                     underlineColorAndroid='transparent'
                                     onChangeText={(text) => this._grabOldEmail(text)}
                                     value={this.state.oldEmail}/>
            
                     </View>

                     <View style={{marginTop: 10}}>
                          
                    <TextInput placeholder='new email'
                                     style={styles.input}
                                     underlineColorAndroid='transparent'
                                     onChangeText={(text) => this._grabNewEmail(text)}
                                     value={this.state.newEmail}/>
            
                     </View>

                     <View style={{marginTop: 10}}>
                          
                    <TextInput placeholder='old password'
                                     style={styles.input}
                                     underlineColorAndroid='transparent'
                                     onChangeText={(text) => this._grabOldPassword(text)}
                                     value={this.state.oldPassword}/>
            
                     </View>

                     <View style={{marginTop: 10}}>
                          
                    <TextInput placeholder='new password'
                                     style={styles.input}
                                     underlineColorAndroid='transparent'
                                     onChangeText={(text) => this._grabNewPassword(text)}
                                     value={this.state.newPassword}/>
            
                     </View>

                     <View style={{marginTop: 10}}>
                          
                    <TextInput placeholder='re-enter new password'
                                     style={styles.input}
                                     underlineColorAndroid='transparent'
                                     onChangeText={(text) => this._grabNewPasswordConfirm(text)}
                                     value={this.state.newPassConfirm}/>
            
                     </View>
            
            
                          </View>
            
                          <View style={{flexDirection: 'row', marginTop: 20}}>
            
                          <TouchableOpacity  disabled={!this.state.flip}
                                            style={[styles.button,{borderWidth: 2, borderColor: '#254D32', backgroundColor: this.state.flip ? '#254D32' : 'white'} ]} 
                                            onPress={() => this._updateAccountSettings()}>
                            <Text style={[styles.btnTxt, {color: this.state.flip ? 'white' : '#254D32'}]}>Change</Text>
             
                          </TouchableOpacity>
            
                          <TouchableOpacity style={[styles.button, {backgroundColor: '#A7333F'}]} 
                                            onPress={() => this._toggleAccountModal()}>
                            <Text style={[styles.btnTxt, {color: 'white'}]}>Close</Text>
             
                          </TouchableOpacity>
            
                          </View>
                        
                        </View>

        )

        _grabOldEmail = (email) => {
            this.state.oldEmail = email
            this.setState(function(prevState,props){
                return {oldEmail: prevState.oldEmail}
            })
            console.log('Old Email: ', this.state.oldEmail)
  
            this._flipAccount()
        }
        _grabNewEmail = (email) => {
            this.state.newEmail = email
            this.setState(function(prevState,props){
                return {newEmail: prevState.newEmail}
            })
            console.log('New Email: ', this.state.newEmail)
  
            this._flipAccount()
        }
        _grabOldPassword = (password) => {
            this.state.oldPassword = password
            this.setState(function(prevState,props){
                return {oldPassword: prevState.oldPassword}
            })
            console.log('Old Password: ', this.state.oldPassword)
  
            this._flipAccount()
        }
        _grabNewPassword = (password) => {
            this.state.newPassword = password
            this.setState(function(prevState,props){
                return {newPassword: prevState.newPassword}
            })
            console.log('New Password: ', this.state.newPassword)
  
            this._flipAccount()
        }

        _grabNewPasswordConfirm = (password) => {
            this.state.newPasswordConfirm = password
            this.setState(function(prevState,props){
                return {newPasswordConfirm: prevState.newPasswordConfirm}
            })
            console.log('New Password Confirm: ', this.state.newPasswordConfirm)
  
            this._flipAccount()
        }

        _flipAccount(){
            if((this.state.oldEmail != '' && this.state.newEmail != '') || 
               (this.state.oldPassword != '' && this.state.newPassword != '' 
               && this.state.newPasswordConfirm != '' && this.state.newPassword === this.state.newPasswordConfirm))
            {
                this.state.flip = true
                this.setState(function(prevState,props){
                    return {flip: prevState.flip}
                })
            }
            else {
              this.state.flip = false
              this.setState(function(prevState,props){
                  return {flip: prevState.flip}
              })
      
            }
            
            console.log('Flip: ', this.state.flip)
      
          }

          _releaseNewAccountData(){
            //Release text inputs value
            this.state.oldEmail = ''
            this.setState(function(prevState,props){
                return {oldEmail: prevState.oldEmail}
            })
            this.state.newEmail = ''
            this.setState(function(prevState,props){
                return {newEmail: prevState.newEmail}
            })
            this.state.oldPassword = ''
            this.setState(function(prevState,props){
                return {oldPassword: prevState.oldPassword}
            })
            this.state.newPassword = ''
            this.setState(function(prevState,props){
                return {newPassword: prevState.newPassword}
            })
            this.state.newPasswordConfirm = ''
            this.setState(function(prevState,props){
                return {newPasswordConfirm: prevState.newPasswordConfirm}
            })
            this._flipAccount()
          }
        
           _updateDB(body, urlParam){
            return fetch('https://brokoli.eu-gb.mybluemix.net/api/'+urlParam, {  
                 method: 'POST',
                 headers: {
                   'Accept': 'application/json',
                   'Content-Type': 'application/json',
                 }
               ,
                  body: JSON.stringify(body),

                
                })
                 // .then(function(response) { return response.json(); })
                 // .then(function(responseData) {
                 //   this.setState({ data : responseData})});
         
                 .then((response) => response.json())
                 // .then((responseData) => {
                 //    var str = JSON.stringify(responseData.old_doc, null, 4);
                 //    var str1 = JSON.stringify(responseData.doc, null, 4);
                 //    var str2 = JSON.stringify(responseData.data, null, 4);
                 //    console.log(str);
                 //    console.log(str1);
                 //    console.log(str2);
                   
                 // })
                 ;
        }

        checkOldPassword(oldPass){
            
            var obj = {user:this.state.userData.username, pass:oldPass};
            return this._updateDB(obj, 'auth').then((res) => {
              console.log("validation " + res.validation + " " + res.id);
              if(res.validation == 'true'){
                  
                  console.log(">>>>>>>>>>>>>>>>Valid user!", res.id);
                  return true;
              }else{

                    return false;
                    //this.props._callbackLogin(res.validation, 0);
              }
            
            });
        }

        _updateAccountSettings() {
            //This is your part Alan. Need to update db for email and password.
            //I have created the interface so that the user may either update email or password or both. 
            
            //TODO add all checks for password and email.
            var wait = 0;
            console.log('Update Account')

                var obj = {};
                //Update name
                if(this.state.oldEmail != '') 
                {
                    if(this.state.oldEmail == this.state.userData.email) 
                    {
                        if(this.state.newEmail != ''){
                            this.state.userData.email = this.state.newEmail
                            var aux = this.state.userData;
                            aux.email = this.state.newEmail
                            this.setState(function(prevState, props){
                                return {userData: prevState.userData}
                            })
                            obj.email = this.state.newEmail;
                        }
                        else{
                            Alert.alert('Error', 'Enter new e-mail');
                        }
                    }
                    else{
                        Alert.alert('Error', 'Old e-mail does not match.');
                    }
                }
                //Update password
                if(this.state.oldPassword != '')
                {
                    wait = 1;
                    //console.log('>>>result '+ ''+this.checkOldPassword(this.state.oldPassword));
                    this.checkOldPassword(this.state.oldPassword).then(bool => {
                        if(bool){
                            if(this.state.newPassword != ''){
                                if(this.state.newPassword == this.state.newPasswordConfirm){
                                    obj.password = this.state.newPassword;
                                    var str = JSON.stringify(obj, null, 4);
                                    console.log('====newpass ' + str);
                                    this._updateDB(obj, 'update');
                                }
                                else{
                                    Alert.alert('Invalid input', 'Passwords do not match');
                                }
                            }
                            else{
                                Alert.alert('Invalid input', 'Enter new password');
                            }
                        }
                        else{
                            Alert.alert('Invalid input', 'Enter correct password');
                        }
                    });
                    
                }

                //Update city
                if(this.state.newCity != '')
                {
                    this.state.city = this.state.newCity
                    this.setState(function(prevState, props){
                        return {city: prevState.city}
                    })
                    obj.city = this.state.city;
                }

                //Update country
                if(this.state.newCountry != '')
                {
                    this.state.country = this.state.newCountry
                    this.setState(function(prevState, props){
                        return {country: prevState.country}
                    })
                    obj.country = this.state.country;
                }

                this._toggleProfileModal()
                obj.id = this.props.screenProps;

                var str = JSON.stringify(obj, null, 4);
                console.log('Object to be updated: '+ str);
                if(wait ==0)
                    this._updateDB(obj, 'update');
                
        }


        _resetPersonalInfoState(){

        }

        _toggleProfileModal = () => {
            
            this.state.isModalProfileVisible = !this.state.isModalProfileVisible
            this.setState(function(prevState, props){
                return {isModalProfileVisible: prevState.isModalProfileVisible}
            })
            console.log('isModalProfileVisible: ', this.state.isModalProfileVisible)
            this._releaseNewProfileData()
            }

            _renderProfileModal = () => (
                
                            <View style={styles.modalContent}>
                            
                                    <View style={styles.form}> 
                            
                                    <Text style={styles.title}>Update personal settings</Text> 
                            
                                    <View style={{marginTop: 20}}>
                                          
                                    <TextInput placeholder='full name'
                                                     style={styles.input}
                                                     underlineColorAndroid='transparent'
                                                     onChangeText={(text) => this._grabNewFullName(text)}
                                                     value={this.state.newFullName}/>
                            
                                     </View>
                
                                     <View style={{marginTop: 10}}>
                                          
                                    <TextInput       {...this.props}
                                                     placeholder='header'
                                                     style={styles.input}
                                                     underlineColorAndroid='transparent'
                                                     onChangeText={(text) => this._grabNewHeader(text)}
                                                     value={this.state.newHeader}
                                                     multiline = {true}
                                                     maxLength = {100}
                                                     style = {[styles.input, {height: Math.max(40, this.state.height)}]}
                                                     onContentSizeChange = {(event) => this._autoExpand(event)}/>
                            
                                     </View>
                
                                     <View style={{marginTop: 10}}>
                                          
                                    <TextInput placeholder='city'
                                                     style={styles.input}
                                                     underlineColorAndroid='transparent'
                                                     onChangeText={(text) => this._grabNewCity(text)}
                                                     value={this.state.newCity}/>
                            
                                     </View>
                
                                     <View style={{marginTop: 10}}>
                                          
                                    <TextInput placeholder='country'
                                                     style={styles.input}
                                                     underlineColorAndroid='transparent'
                                                     onChangeText={(text) => this._grabNewCountry(text)}
                                                     value={this.state.newCountry}/>
                            
                                     </View>
                            
                                          </View>
                            
                                          <View style={{flexDirection: 'row', marginTop: 20}}>
                            
                                          <TouchableOpacity  disabled={!this.state.flip}
                                                            style={[styles.button,{borderWidth: 2, borderColor: '#254D32', backgroundColor: this.state.flip ? '#254D32' : 'white'} ]} 
                                                            onPress={() => this._updateProfileSettings()}>
                                            <Text style={[styles.btnTxt, {color: this.state.flip ? 'white' : '#254D32'}]}>Change</Text>
                             
                                          </TouchableOpacity>
                            
                                          <TouchableOpacity style={[styles.button, {backgroundColor: '#A7333F'}]} 
                                                            onPress={() => this._toggleProfileModal()}>
                                            <Text style={[styles.btnTxt, {color: 'white'}]}>Close</Text>
                             
                                          </TouchableOpacity>
                            
                                          </View>
                                        
                                        </View>
                
                        )

            _grabNewFullName = (name) => {
            this.state.newFullName = name
            this.setState(function(prevState,props){
                return {newFullName: prevState.newFullName}
            })
            console.log('New Full Name: ', this.state.newFullName)
  
            this._flipProfile()
        }
        _grabNewHeader = (header) => {
            this.state.newHeader = header
            this.setState(function(prevState,props){
                return {newHeader: prevState.newHeader}
            })
            console.log('New Header: ', this.state.newHeader)
  
            this._flipProfile()
        }

        _grabNewCity = (city) => {
            this.state.newCity= city
            this.setState(function(prevState,props){
                return {newCity: prevState.newCity}
            })
            console.log('New City: ', this.state.newCity)
  
            this._flipProfile()
        }
        _grabNewCountry = (country) => {
            this.state.newCountry = country
            this.setState(function(prevState,props){
                return {newCountry: prevState.newCountry}
            })
            console.log('New Country: ', this.state.newCountry)
  
            this._flipProfile()
        }

        _flipProfile(){
            if(this.state.newFullName != '' || this.state.newHeader != '' 
               || this.state.newCity != '' || this.state.newCountry != '' )
               {
                this.state.flip = true
                this.setState(function(prevState,props){
                    return {flip: prevState.flip}
                })
            }
            else {
              this.state.flip = false
              this.setState(function(prevState,props){
                  return {flip: prevState.flip}
              })
      
            }
            console.log('Flip: ', this.state.flip)
            
        }
      
         _releaseNewProfileData(){
                  //Release text inputs value
                  this.state.newFullName = ''
                  this.setState(function(prevState,props){
                      return {newFullName: prevState.newFullName}
                  })
                  this.state.newHeader = ''
                  this.setState(function(prevState,props){
                      return {newHeader: prevState.newHeader}
                  })
                  this.state.newCity = ''
                  this.setState(function(prevState,props){
                      return {newCity: prevState.newCity}
                  })
                  this.state.newCountry = ''
                  this.setState(function(prevState,props){
                      return {newCountry: prevState.newCountry}
                  })
                 
                  this._flipProfile()
                }

                _updateProfileSettings(){
                    var obj = {};
                    console.log('update profile settings')
                    //Update name
                    if(this.state.newFullName != '') 
                    {
                        this.state.name = this.state.newFullName
                        this.setState(function(prevState, props){
                            return {name: prevState.name}
                        })
                        obj.firstName = this.state.name.substr(0,this.state.name.indexOf(' '));
                        obj.lastName = this.state.name.substr(this.state.name.indexOf(' ')+1);
                    }
                    //Update header
                    if(this.state.newHeader != '')
                    {
                        this.state.header = this.state.newHeader
                        this.setState(function(prevState, props){
                            return {header: prevState.header}
                        })
                        obj.passHeadertoDb = this.state.header;
                    }

                    //Update city
                    if(this.state.newCity != '')
                    {
                        this.state.city = this.state.newCity
                        this.setState(function(prevState, props){
                            return {city: prevState.city}
                        })
                        obj.city = this.state.city;
                    }

                    //Update country
                    if(this.state.newCountry != '')
                    {
                        this.state.country = this.state.newCountry
                        this.setState(function(prevState, props){
                            return {country: prevState.country}
                        })
                        obj.country = this.state.country;
                    }

                    this._toggleProfileModal()
                    obj.id = this.props.screenProps;

                    var str = JSON.stringify(obj, null, 4);
                    console.log('Object to be updated: '+ str);
                    this._updateDB(obj);
                }

                _autoExpand = (event) => {
                    this.state.height = event.nativeEvent.contentSize.height
                    this.setState(function(prevState,props){
                        return {height: prevState.height}
                    })
                   
                }



    render(){
        const actions = [{
            icon: require('../../../img/icons/edit-profile.png'),
            name: 'bt_profile',
            position: 1
          }, {
            icon: require('../../../img/icons/lock.png'),
            name: 'bt_account',
            position: 2
          }, {
            icon: require('../../../img/icons/exit.png'),
            name: 'bt_logout',
            position: 3
          }];
        return(
            <View style={styles.container}>

            <View style={styles.header}>

                <FloatingAction  actions={actions}
                                 position="right"
                                 onPressItem={(name) => this._onActionPressed(name)}/>


                <View style={styles.profilePicCont}>
                    <Image source={profileIcon} style={styles.profileIcon}/> 
                </View>

                <View style={styles.textContainer}>
                   
                        <Text style={styles.nameTxt}>{this.state.name}</Text>
                 
                        <Text style={styles.headerTxt}>{this.state.header}</Text>

                    </View>

                <View style={styles.reactionsCont}>

                    <View style={styles.reaction}>

                        <Text style={styles.reactionTxt}>{this.state.projectNr}</Text>
                        <Text style={styles.reactionTxt}>Projects</Text>

                    </View>

                    <View style={{width: 1, backgroundColor:'#C7C7CD'}} />

                    <View style={styles.reaction}>

                        <Text style={styles.reactionTxt}>{this.state.applicationNr}</Text>
                        <Text style={styles.reactionTxt}>Applications</Text>

                    </View>




                    </View>

                  

                  </View>  

                <View style={styles.body}>

                <Tabs>

                    <Overview title='OVERVIEW'/>
                    <Skills title='SKILLS' />
                    <Jobs title='JOBS' jobs={this.state.userData.jobsObj} id={this.props.screenProps} />
                    <Projects title='PROJECTS' projects={this.state.userData.projectArrObj} id={this.props.screenProps}/>

                </Tabs>

                
                    
                    </View>



                    <Modal isVisible = {this.state.isModalLogoutVisible}
                         animationIn={'slideInLeft'}
                         animationOut={'slideOutRight'}>

                       {this._renderLogoutModal()}
                         
                    </Modal> 

                     <Modal isVisible = {this.state.isModalAccountVisible}
                         animationIn={'slideInLeft'}
                         animationOut={'slideOutRight'}>

                      {this._renderAccountModal()}

                         </Modal> 

                       <Modal isVisible = {this.state.isModalProfileVisible}
                         animationIn={'slideInLeft'}
                         animationOut={'slideOutRight'}>

                      {this._renderProfileModal()}

                         </Modal>      
                </View>
        
           

        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 22
    },
    header:{
        flex: 1,
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: width,
    },
    profilePicCont: {
        alignItems: 'center',
        justifyContent:'center',
        borderWidth: 3,
        borderRadius: 65,
        padding: 5,
        borderColor: '#42D260'
    },
    profileIcon: {
        resizeMode: 'contain',
        padding: 10,
        width: 120,
        height: 120,
    },
    textContainer: {
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    reactionsCont: {
        marginTop: 10,
        flexDirection: 'row',
        marginBottom: 10,
    },
    reaction: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    reactionTxt: {
        color: '#C7C7CD',
        fontSize: 15,
        fontWeight: '300',
        padding: 2.5,
    },
    nameTxt:{
        color: 'grey',
        fontSize: 20,
        fontWeight: '400',
        padding: 5,
    },
    headerTxt:{
        color: 'grey',
        fontSize: 17,
        fontWeight: '300',
        padding: 5.
    },
    body: {
        flex: 1,
        borderTopWidth: 1,
        borderColor: '#C7C7CD'
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
      },
      title: {
        color: '#254D32',
        fontSize: 20,
        fontWeight: '400'
    },
    btnTxt: {
        fontSize: 16,
        fontWeight: '400'
    },
    button: {
        padding: 12,
        margin: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
      },

      input: {
        borderWidth: 2,
        borderColor: 'grey',
        backgroundColor: '#F8F9FB',
        borderRadius: 5,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 15,
        paddingRight: 15,
        marginRight: 5,
        marginBottom: 5,
        color: '#C7C7CD',
    },
    form:{
        width: width - 100
    },
  });

