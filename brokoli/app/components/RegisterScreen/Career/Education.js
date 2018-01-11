import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Dimensions, View, TextInput, FlatList, Image } from 'react-native';

import { Picker } from 'react-native-picker-dropdown'
import Modal from 'react-native-modal'

const width = Dimensions.get('window').width

var tempArr = []

export default class Education extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            schoolName: '',
            city: '',
            country: '',
            startYear: '2018',
            endYear: '2018',
            startMonth: 'Jan',
            endMonth: 'Jan',
            degree: 'Bachelor',
            specialization: 'Accountancy',
            educations: [],
            flip: false,
            index: null,
            isModalDeleteVisible: false
            
        }
    }

    _grabSchoolName = (text) => {
        
                this.state.schoolName = text
                this.setState(function(prevState, props){
                  return {schoolName: prevState.schoolName}
                 });
                console.log('School Name: ', this.state.schoolName)

                this._flip()
            
                
    }

    _grabCity = (text) => {
                
                this.state.city = text
                this.setState(function(prevState, props){
                return {city: prevState.city}
                });
                console.log('City: ', this.state.city)
              

                this._flip()
                        
    }
    _grabCountry = (text) => {
        
                this.state.country = text
                this.setState(function(prevState, props){
                  return {country: prevState.country}
                 });
                console.log('Country: ', this.state.country)

                this._flip()
                
    }
    _grabStartYear = (text) => {
        
                this.state.startYear = text
                this.setState(function(prevState, props){
                  return {startYear: prevState.startYear}
                 });
                 console.log('Start Year: ', this.state.startYear)
           
                
    }

    _grabStartMM = (text) => {
        
                this.state.startMonth = text
                this.setState(function(prevState, props){
                  return {startMonth: prevState.startMonth}
                 });
                console.log('Start Month: ', this.state.startMonth)
            
                
    }

    
    _grabEndMM = (text) => {
        
                this.state.endMonth = text
                this.setState(function(prevState, props){
                  return {endMonth: prevState.endMonth}
                 });
                 console.log('End Month: ', this.state.endMonth)
             
                
    }

    _grabEndYear = (text) => {
                
                this.state.endYear = text
                this.setState(function(prevState, props){
                return {endYear: prevState.endYear}
                });
                console.log('End Year: ', this.state.endYear)
                        
    }
    _grabDegree = (text) => {
        
                this.state.degree = text
                this.setState(function(prevState, props){
                  return {degree: prevState.degree}
                 });
                 console.log('Degree: ', this.state.degree)
                
    }

    _grabSpecialization = (text) => {
                
                this.state.specialization = text
                this.setState(function(prevState, props){
                return {specialization: prevState.specialization}
                });
                console.log('Specialization: ', this.state.specialization)
                        
    }

    _deleteItem(){
        //Use temp array(object) instead to state.someArr to apply javascript functionalities on arrays. 
         var tempEduArr = []
         tempEduArr = this.state.educations
         console.log('tempArrChild: ', tempEduArr)
    
         //Returns the part of array we want to remove
         tempEduArr.splice(this.state.index, 1)
    
         //Assign the tempArr with the removed element to skills
         this.state.educations = tempEduArr
         this.setState(function(prevState, props){
             return { educations : prevState.educations }
         })
    
         
         console.log('Update SkillsChild: ', this.state.educations)
         this.props.callbackFromParentEducation(this.state.educations);
    
         //Close modal
         this._untoggleModalDelete()
       }

       _onAdd(){
        tempArr.unshift({school: this.state.schoolName, city: this.state.city, country: this.state.country, 
                         startMM: this.state.startMonth, startYY: this.state.startYear, endMM: this.state.endMonth,
                         endYY: this.state.endYear, degree: this.state.degree, specialization: this.state.specialization})
        console.log('tempArrChild: ', tempArr)
        this.state.educations = tempArr
        this.setState(function(prevState,props){
            return {educations: prevState.educations}
        })
        console.log('educationsArrChild: ', this.state.educations)
        this.props.callbackFromParentEducation(this.state.educations);

        //Release text inputs value
        this.state.schoolName = ''
        this.setState(function(prevState,props){
            return {schoolName: prevState.schoolName}
        })
        this.state.city = ''
        this.setState(function(prevState,props){
            return {city: prevState.city}
        })
        this.state.country = ''
        this.setState(function(prevState,props){
            return {country: prevState.country}
        })
        this.state.startMonth = 'Jan'
        this.setState(function(prevState,props){
            return {startMonth: prevState.startMonth}
        })
        this.state.startYear = '2018'
        this.setState(function(prevState,props){
            return {startYear: prevState.startYear}
        })
        this.state.endMonth = 'Jan'
        this.setState(function(prevState,props){
            return {endMonth: prevState.endMonth}
        })
        this.state.endYear = '2018'
        this.setState(function(prevState,props){
            return {endYear: prevState.endYear}
        })
        this._flip()
  }

  _flip(){
    
          if(this.state.schoolName != '' && this.state.city != '' && this.state.country != '')
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

        _renderDeleteModalContent = () => (
            
                        <View style={[styles.modalContent, {backgroundColor: '#254D32'}]}>
                        
                            <Text style={[styles.title, {color: 'white'}]}>Are you sure you want to delete the selected education from your registration?</Text>
                        
                            <View style={{flexDirection: 'row'}}>
                        
                                                <TouchableOpacity 
                                                                style={[styles.button,{backgroundColor: 'white'}]} 
                                                                onPress={() => this._deleteItem() }>
                                                <Text style={[styles.btnTxt, {color: '#254D32'}]}>Ok</Text>
                                
                                                </TouchableOpacity>
                        
                                                <TouchableOpacity style={[styles.button, {backgroundColor: '#A7333F'}]} 
                                                                onPress={() => this._untoggleModalDelete()}>
                                                <Text style={[styles.btnTxt, {color: 'white'}]}>Cancel</Text>
                                
                                                </TouchableOpacity>
                        
                                            </View>
                        
                                        </View>
                        
                      )
    
        _toggleModalDelete = ({item, index}) => {
            
                        this.state.index = index 
                        this.setState(function(prevState, props){
                            return { index: prevState.index }
                        })
                
                        console.log('Selected Index: ', this.state.index)
                
                        this.state.isModalDeleteVisible = true
                        this.setState(function(prevState, props){
                            return {isModalDeleteVisible: prevState.isModalDeleteVisible}
                        })
                        console.log('deleteModal: ', this.state.isModalDeleteVisible)
                      }
            
          _untoggleModalDelete(){
            
                        this.state.isModalDeleteVisible = false
                        this.setState(function(prevState, props){
                            return { isModalDeleteVisible: prevState.isModalDeleteVisible }
                        })
                        console.log('isModalDeleteVisible', this.state.isModalDeleteVisible)
            
                      }
    

    

    
    render(){
    
        return(

            <View style={styles.educationCont}>


            <View style={{backgroundColor: 'white'}}>

                <View style={styles.topEdu}>

                    <View style={styles.nameCont}>

                    <TextInput style={styles.name} 
                               placeholder="School name"
                               placeholderTextColor='#C7C7CD'
                               underlineColorAndroid='transparent'
                               value = {this.state.schoolName}
                               onChangeText={(text) => this._grabSchoolName(text)}/>

                    </View>

                    <View style={styles.locationCont}>

                    <TextInput style={styles.location}
                               placeholder="City"
                               placeholderTextColor='#C7C7CD'
                               underlineColorAndroid='transparent'
                               value={this.state.city}
                               onChangeText={(text) => this._grabCity(text)} />

                    <TextInput style={styles.location}
                               placeholder="Country"
                               placeholderTextColor='#C7C7CD'
                               underlineColorAndroid='transparent'
                               value={this.state.country}
                               onChangeText={(text) => this._grabCountry(text)} />

                    </View>


                </View>


                
                <View style={[styles.middleEdu, {marginTop: 10, marginBottom: 10}]}>

                <View style={{flex: 1, marginLeft: 15}}>

                <Text style={styles.title}>Start Date</Text>

                    </View>

                    <View style={{flex: 1, marginLeft: 10}}>

                    <Text style={styles.title}>End Date</Text>
                        </View>

                    </View>

                <View style={[styles.middleEdu, {marginLeft: 10, marginRight: 10}]}>

                        <View style={[styles.pickerCont, {flex: 1, justifyContent: 'center', marginRight: 10}]}> 


                        <Picker
                        selectedValue={this.state.startMonth}
                        onValueChange={(month) => this._grabStartMM(month)}
                        mode="dropdown"
                        itemStyle = {{fontSize: 12}}
                        style={{
                        color: '#C7C7CD',
                        height: 35,
                        }}>
                        <Picker.Item label="Jan" value="Jan" />
                        <Picker.Item label="Feb" value="Feb" />
                        <Picker.Item label="Mar" value="Mar" />
                        <Picker.Item label="Apr" value="Apr" />
                        <Picker.Item label="May" value="May" />
                        <Picker.Item label="Jun" value="Jun" />
                        <Picker.Item label="Jul" value="Jul" />
                        <Picker.Item label="Aug" value="Aug" />
                        <Picker.Item label="Sep" value="Sep" />
                        <Picker.Item label="Oct" value="Oct" />
                        <Picker.Item label="Nov" value="Nov" />
                        <Picker.Item label="Dec" value="Dec" />
                         </Picker> 
                        
                        </View>

                        <View style={[styles.pickerCont, {flex: 1, justifyContent: 'center', marginRight: 5}]}> 


                        <Picker
                        selectedValue={this.state.startYear}
                        onValueChange={(year) => this._grabStartYear(year)}
                        mode="dropdown"
                        itemStyle = {{fontSize: 12}}
                        style={{
                        color: '#C7C7CD',
                        height: 35,
                        }}>
                        <Picker.Item label="2018" value="2018" />
                        <Picker.Item label="2017" value="2017" />
                        <Picker.Item label="2016" value="2016" />
                        <Picker.Item label="2015" value="2015" />
                        <Picker.Item label="2014" value="2014" />
                        <Picker.Item label="2013" value="2013" />
                        <Picker.Item label="2012" value="2012" />
                        <Picker.Item label="2011" value="2011" />
                        <Picker.Item label="2010" value="2010" />
                        <Picker.Item label="2009" value="2009" />
                        <Picker.Item label="2008" value="2008" />
                        <Picker.Item label="2007" value="2007" />
                        <Picker.Item label="2006" value="2006" />
                        <Picker.Item label="2005" value="2005" />
                        <Picker.Item label="2004" value="2004" />
                        <Picker.Item label="2003" value="2003" />
                        <Picker.Item label="2002" value="2002" />
                        <Picker.Item label="2001" value="2001" />
                        <Picker.Item label="2000" value="2000" />
                        <Picker.Item label="1999" value="1999" />
                        <Picker.Item label="1998" value="1998" />
                        <Picker.Item label="1997" value="1997" />
                        <Picker.Item label="1996" value="1996" />
                        <Picker.Item label="1995" value="1995" />
                        <Picker.Item label="1994" value="1994" />
                        <Picker.Item label="1993" value="1993" />
                        <Picker.Item label="1992" value="1992" />
                        <Picker.Item label="1991" value="1991" />
                        <Picker.Item label="1990" value="1990" />
                         </Picker> 
                        
                        </View>

                        <View style={[styles.pickerCont, {flex: 1, justifyContent: 'center', marginLeft: 5}]}> 


                        <Picker
                        selectedValue={this.state.endMonth}
                        onValueChange={(month) => this._grabEndMM(month)}
                        mode="dropdown"
                        itemStyle = {{fontSize: 12}}
                        style={{
                        color: '#C7C7CD',
                        height: 35,
                        }}>
                        <Picker.Item label="Jan" value="Jan" />
                        <Picker.Item label="Feb" value="Feb" />
                        <Picker.Item label="Mar" value="Mar" />
                        <Picker.Item label="Apr" value="Apr" />
                        <Picker.Item label="May" value="May" />
                        <Picker.Item label="Jun" value="Jun" />
                        <Picker.Item label="Jul" value="Jul" />
                        <Picker.Item label="Aug" value="Aug" />
                        <Picker.Item label="Sep" value="Sep" />
                        <Picker.Item label="Oct" value="Oct" />
                        <Picker.Item label="Nov" value="Nov" />
                        <Picker.Item label="Dec" value="Dec" />
                         </Picker> 
                        
                        </View>

                        <View style={[styles.pickerCont, {flex: 1, justifyContent: 'center', marginLeft: 10}]}> 


                        <Picker
                        selectedValue={this.state.endYear}
                        onValueChange={(year) => this._grabEndYear(year)}
                        mode="dropdown"
                        itemStyle = {{fontSize: 12}}
                        style={{
                        color: '#C7C7CD',
                        height: 35,
                        }}>
                        <Picker.Item label="2018" value="2018" />
                        <Picker.Item label="2017" value="2017" />
                        <Picker.Item label="2016" value="2016" />
                        <Picker.Item label="2015" value="2015" />
                        <Picker.Item label="2014" value="2014" />
                        <Picker.Item label="2013" value="2013" />
                        <Picker.Item label="2012" value="2012" />
                        <Picker.Item label="2011" value="2011" />
                        <Picker.Item label="2010" value="2010" />
                        <Picker.Item label="2009" value="2009" />
                        <Picker.Item label="2008" value="2008" />
                        <Picker.Item label="2007" value="2007" />
                        <Picker.Item label="2006" value="2006" />
                        <Picker.Item label="2005" value="2005" />
                        <Picker.Item label="2004" value="2004" />
                        <Picker.Item label="2003" value="2003" />
                        <Picker.Item label="2002" value="2002" />
                        <Picker.Item label="2001" value="2001" />
                        <Picker.Item label="2000" value="2000" />
                        <Picker.Item label="1999" value="1999" />
                        <Picker.Item label="1998" value="1998" />
                        <Picker.Item label="1997" value="1997" />
                        <Picker.Item label="1996" value="1996" />
                        <Picker.Item label="1995" value="1995" />
                        <Picker.Item label="1994" value="1994" />
                        <Picker.Item label="1993" value="1993" />
                        <Picker.Item label="1992" value="1992" />
                        <Picker.Item label="1991" value="1991" />
                        <Picker.Item label="1990" value="1990" />

                         </Picker> 
                        

                    </View>

                </View>

                <View style={[styles.bottomEdu, {marginTop: 10}]}>

                <View style={{flex: 2, marginLeft: 15}}>

                <Text style={styles.title}>Degree</Text>

                    </View>

                    <View style={{flex: 3, marginLeft: 15, marginRight: 10}}>

                    <Text style={styles.title}>Specialization</Text>
                        </View>

                    </View>

                <View style={styles.bottomEdu}>



                <View style={[styles.pickerCont, {flex: 2, marginLeft: 10}]}>

                <Picker
                        selectedValue={this.state.degree}
                        onValueChange={(degree) => this._grabDegree(degree)}
                        mode="dropdown"
                        itemStyle = {{fontSize: 12}}
                        style={{
                        color: '#C7C7CD',
                        height: 35,
                        }}>
                        <Picker.Item label="Bachelor" value="Bachelor" />
                        <Picker.Item label="Master" value="Master" />
                        <Picker.Item label="Phd" value="Phd" />
                    </Picker>   

                </View>

                <View style={[styles.pickerCont, {flex: 3, marginLeft: 10, marginRight: 10}]}>
                
                <Picker
                        selectedValue={this.state.specialization}
                        onValueChange={(specialization) => this._grabSpecialization(specialization)}
                        mode="dropdown"
                        itemStyle = {{fontSize: 12}}
                        style={{
                        color: '#C7C7CD',
                        height: 35,
                        }}>
                        <Picker.Item label="Accountancy" value="Accountancy" />
                        <Picker.Item label="Advanced Study" value="Advanced Study" />
                        <Picker.Item label="Applied Finance" value="Applied Finance" />
                        <Picker.Item label="Applied Science" value="Applied Science" />
                        <Picker.Item label="Architecture" value="Architecture" />
                        <Picker.Item label="Bioinformatics" value="Bioinformatics" />
                        <Picker.Item label="Business Administration" value="Business Administration" />
                        <Picker.Item label="Business, Entrepreneurship and Technology" value="Business, Entrepreneurship and Technology" />
                        <Picker.Item label="Business" value="Business" />
                        <Picker.Item label="Business Engineering" value="Business Engineering" />
                        <Picker.Item label="Business Informatics" value="Business Informatics" />
                        <Picker.Item label="Chemistry" value="Chemistry" />
                        <Picker.Item label="Criminal Justice" value="Criminal Justice" />
                        <Picker.Item label="Computer Science" value="Computer Science" />
                        <Picker.Item label="Cyber Security" value="Cyber Security" />
                        <Picker.Item label="Data Science" value="Data Science" />
                        <Picker.Item label="Economics" value="Economics" />
                        <Picker.Item label="Engineering" value="Engineering" />
                        <Picker.Item label="Engineering Management" value="Engineering Management" />
                        <Picker.Item label="European Law" value="European Law" />
                        <Picker.Item label="Finance" value="Finance" />
                        <Picker.Item label="Financial Economics" value="Financial Economics" />
                        <Picker.Item label="Financial Engineering" value="Financial Engineering" />
                        <Picker.Item label="Fine Arts" value="Fine Arts" />
                        <Picker.Item label="Humanities" value="Humanities" />
                        <Picker.Item label="International Affairs" value="International Affairs" />
                        <Picker.Item label="Information Management" value="Information Management" />
                        <Picker.Item label="Information System Management" value="Information System Management" />
                        <Picker.Item label="Laws" value="Laws" />
                        <Picker.Item label="Landscape Architecture" value="Landscape Architecture" />
                        <Picker.Item label="Liberal Arts" value="Liberal Arts" />
                        <Picker.Item label="Management" value="Management" />
                        <Picker.Item label="Mathematical Finance" value="Mathematical Finance" />
                        <Picker.Item label="Mathematics" value="Mathematics" />
                        <Picker.Item label="Medical Science" value="Medical Science" />
                        <Picker.Item label="Medicine" value="Medicine" />
                        <Picker.Item label="Philosophy" value="Philosophy" />
                        <Picker.Item label="Physics" value="Physics" />
                        <Picker.Item label="Political Science" value="Political Science" />
                        <Picker.Item label="Psychology" value="Psychology" />
                        <Picker.Item label="Social Science" value="Social Science" />
                        <Picker.Item label="Urban Planning" value="Urban Planning" />
                    </Picker> 
                

                
                </View>

                </View>

                    <TouchableOpacity  disabled={!this.state.flip}
                    style={[styles.btnContainer, {backgroundColor: this.state.flip ? '#42D260' : 'white' }]}
                    onPress={() => this._onAdd()}>
                      <Text style={[styles.btnText,{color: this.state.flip ? 'white' : '#42D260'}]}> ADD </Text>
                    </TouchableOpacity>

                </View>

                    <FlatList
                        extraData={this.state}
                        data={this.state.educations}
                        renderItem={({ item, index }) => (
                            <View style={styles.eduContainer}>
                            <View style={{paddingTop: 10, paddingBottom: 5, flex: 5, alignItems: 'flex-start', justifyContent: 'center'}}>
                            <View style={styles.edu}>
                            <Image source={require('../../../../img/icons/college-graduation.png')} 
                                   style={styles.icon}/>
                            <Text style={styles.eduText}>{item.school} </Text>
                            </View>
                            <View style={styles.edu}>
                            <Image source={require('../../../../img/icons/graduate-certificate.png')} 
                                   style={styles.icon}/>
                            <Text style={styles.eduText}>{item.degree}</Text>
                            </View>
                            <View style={styles.edu}>
                            <Image source={require('../../../../img/icons/medal.png')} 
                                   style={styles.icon}/>
                            <Text style={styles.eduText}>{item.specialization}</Text>
                            </View>
                            <View style={styles.edu}>
                            <Image source={require('../../../../img/icons/cityCountry.png')} 
                                   style={styles.icon}/>
                            <Text style={styles.eduText}>{item.city}, {item.country} </Text>
                            </View>
                            <View style={styles.edu}>
                            <Image source={require('../../../../img/icons/calendar.png')} 
                                   style={styles.icon}/>
                            <Text style={styles.eduText}>{item.startMM} {item.startYY} - {item.endMM} {item.endYY} </Text>
                            </View>
                            </View>
                            <TouchableOpacity style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}
                                                        onPress = {() => this._toggleModalDelete({item, index})}>
                                            <Image source={require('../../../../img/icons/delete.png')}
                                                style = {{resizeMode: 'center', width: 35, height: 35, tintColor: '#A7333F'}} />
                                        </TouchableOpacity>
                </View>
            )}
            keyExtractor={item => item.school}
            style={{flex: 1, marginTop: 5}}
          />

          <Modal isVisible = {this.state.isModalDeleteVisible}
                          animationIn={'slideInLeft'}
                          animationOut={'slideOutRight'}>

                         {this._renderDeleteModalContent()}

                    </Modal> 


                </View>

        )
    }
}

const styles = StyleSheet.create({

    educationCont: {
        marginTop: 10,
    },
    eduTitleCont: {
        padding: 15,
    },
    eduTitle: {
        fontSize: 16, 
        fontWeight: '600',
        color: 'grey'
    },
    topEdu: {
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: 'white',

    },
    nameCont: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    name: {

        backgroundColor: '#F8F9FB',
        color: '#C7C7CD',
        borderWidth: 2,
        marginLeft: 10,
        marginRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: width - 20,
        borderColor: 'grey',
        fontWeight: '400',
        fontSize: 16,
    },
    locationCont:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    middleEdu: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
        backgroundColor: 'white',
    },
    yearCont: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    location: {
        backgroundColor: '#F8F9FB',
        borderWidth: 2,
        marginLeft: 10,
        marginRight: 10,
        padding: 5,
        borderRadius: 5, 
        borderColor: 'grey',
        width: width/2 - 20, 
        color: '#C7C7CD',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        fontWeight: '400',
        fontSize: 16,
    },
    bottomEdu:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        backgroundColor: 'white',
    },
    pickerCont: {
        borderWidth: 2, 
        borderColor: 'grey',
        backgroundColor: '#F8F9FB',
        borderRadius: 5,
    },
    title:{
        fontSize: 17,
        fontWeight: '500',
        color: 'grey'
    },
    btnContainer: {
        borderWidth: 2,
        borderColor: '#42D260',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        marginLeft: 10,
        marginRight: 20,
        width: width - 20,
        marginBottom: 10,
        marginTop: 10,
    },
    btnText: {
        fontSize: 17,
        fontWeight: '600',
    },
    eduContainer:{
        flex: 1,
        flexDirection: 'row',
            width: width - 20,
            backgroundColor: 'white',
            marginBottom: 5,
            marginLeft: 10,
            marginRight: 5,
            paddingLeft: 10,
            paddingRight: 10,
    },
    edu:{
        width: width - 20,
        backgroundColor: 'white',
        marginBottom: 5,
        marginLeft: 5,
        marginRight: 5,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row'
      },
    eduText: {
        color: 'grey',
        fontSize: 17,
        fontWeight: '400',
        paddingLeft: 10,
    },
    button: {
        padding: 12,
        margin: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
      },
      modalContent: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
      },
      btnTxt: {
        fontSize: 16,
        fontWeight: '400'
    },
    icon: {
        width: 22.5,
        height: 22.5,
        resizeMode: 'center',
        tintColor: '#C7C7CD'
    }


})
