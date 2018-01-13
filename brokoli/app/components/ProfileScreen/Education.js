import React from 'react';
import { StyleSheet, 
            Text, 
            View, 
            Image, 
            Dimensions,
            FlatList,
            Alert,
            TextInput,
            TouchableOpacity } from 'react-native';

import FloatingAction from '../FloatingComponents/FloatingAction'
import Modal from 'react-native-modal'
import { Picker } from 'react-native-picker-dropdown'

var tempArr = []

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default class Education extends React.Component
{
    constructor(props){
        super(props)

        this.state = {
            data: [
                {school: 'Radboud University', city: 'Nijmegen', country: 'The Netherlands', startMonth: 'Jan', startYear: '2017', endMonth: '', endYear: '', degree: 'Master', specialization: 'Computer Science'},
                {school: 'American University in Bulgaria', city: 'Blagoevgrad', country: 'Bulgaria', startMonth: 'Sep', startYear: '2012', endMonth: 'May', endYear: '2016', degree: 'Bachelor', specialization: 'Computer Science'},
        ],
            actionButtonVisible: true,
            isModalAddVisible: false,
            isModalDeleteVisible: false,
            newSchool : '',
            newCity: '',
            newCountry: '',
            startMonth: 'Jan',
            startYear: '2018',
            endMonth: 'Jan',
            endYear: '2018',
            newDegree: 'Bachelor',
            newSpecialisation: 'Accountancy',
            flip: false,
            index: null,
            itemToDelete: [],
        }
    }

    
    componentDidMount() {
        //When compoment is first loaded the temp array is used as a placeholder for the educations key value pair array 
        tempArr = this.state.data
    }

    _renderSeparator = () => {
        return (
          <View
            style={{
              height: 1,
              width: width,
              backgroundColor: "#C7C7CD",
            }}
          />
        )
    }

    offset = 0;
    
      handleScroll = (event) => {
        const currentOffset = event.nativeEvent.contentOffset.y;
    
        if (currentOffset <= 0) {
          this.setState({
            actionButtonVisible: true
          });
    
          return;
        }
    
        const direction = currentOffset > this.offset ? 'down' : 'up';
        this.offset = currentOffset;
    
        if (this.state.actionButtonVisible !== direction) {
          this.setState({
            actionButtonVisible: direction === 'up'
          });
        }
      }

      _toggleModalAdd = () => {
          this.state.isModalAddVisible = !this.state.isModalAddVisible
          this.setState(function(prevState, props){
              return {isModalAddVisible: prevState.isModalAddVisible}
          })
          this._releaseNewData()
        }

        _toggleModalDelete = ({item, index}) => {

            this.state.index = index 
            this.setState(function(prevState, props){
                return { index: prevState.index }
            })
    
            console.log('Selected Index: ', this.state.index)
    
            this.state.itemToDelete = item
            this.setState(function(prevState, props){
                return { itemToDelete: prevState.itemToDelete }
            })
            console.log('Select Item: ', item)

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
          _grabNewSchool = (school) => {
            this.state.newSchool = school
            this.setState(function(prevState,props){
                return {newSchool: prevState.newSchool}
            })
            console.log('New School: ', this.state.newSchool)
  
            this._flip()
        }

        _grabNewCity = (city) => {
            this.state.newCity = city
            this.setState(function(prevState,props){
            return {newCity: prevState.newCity}
            })
            console.log("New City: ", this.state.newCity)
            this._flip()    
        }

        _grabNewCountry = (country) => {
            this.state.newCountry = country
            this.setState(function(prevState, props){
                return { newCountry: prevState.newCountry }
            })
            console.log('New Country: ', this.state.newCountry)
            this._flip()
        }
        _grabNewStartMonth = (month) => {
            this.state.newStartMonth = month
            this.setState(function(prevState, props){
                return { newStartMonth: prevState.newStartMonth }
            })
            console.log('New Start Month: ', this.state.newStartMonth)
        }
        _grabNewStartYear = (year) => {
            this.state.newStartYear = year
            this.setState(function(prevState, props){
                return { newStartYear: prevState.newStartYear }
            })
            console.log('New Start Year: ', this.state.newStartYear)
        }
        _grabNewEndMonth = (month) => {
            this.state.newEndMonth = month
            this.setState(function(prevState, props){
                return { newEndMonth: prevState.newEndMonth }
            })
            console.log('New End Month: ', this.state.newEndMonth)
        }
        _grabNewEndYear = (year) => {
            this.state.newEndYear = year
            this.setState(function(prevState, props){
                return { newEndYear: prevState.newEndYear }
            })
            console.log('New End Year: ', this.state.newEndYear)
        }
        _grabNewDegree = (degree) => {
            this.state.newDegree = degree
            this.setState(function(prevState, props){
                return { newDegree: prevState.newDegree }
            })
            console.log('New Degree: ', this.state.newDegree)
        }
        _grabNewSpecialisation = (specialisation) => {
            this.state.newSpecialisation = specialisation
            this.setState(function(prevState, props){
                return { newSpecialisation: prevState.newSpecialisation }
            })
            console.log('New Specialisation: ', this.state.newSpecialisation)
        }

        _flip(){
            
                  if(this.state.newSchool != '' && this.state.newCity != '' && this.state.newCountry != '')
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
        
          _renderModalContent = () => (
            <View style={styles.modalContent}>

              <View style={styles.form}> 

              <Text style={styles.title}>Add new education</Text> 

              <View style={{marginTop: 10}}>
              
              <TextInput placeholder='school'
                         style={styles.input}
                         underlineColorAndroid='transparent'
                         onChangeText={(text) => this._grabNewSchool(text)}
                         value={this.state.newSchool}/>

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

              <View style={{flexDirection: 'row', marginTop: 10}}>

              <View style={{justifyContent: 'center', marginRight: -20, flex: 1}}> 
                                <Text style={{fontSize: 16, color: '#254D32', fontWeight: '400'}}>Start Date</Text>
                        </View>

                <View style={[styles.expInput, {flex: 1}]}>

                        <Picker
                            selectedValue={this.state.newStartMonth}
                            onValueChange={(month) => this._grabNewStartMonth(month)}
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
                    <View style={[styles.expInput, {flex: 1}]}>

                        <Picker
                            selectedValue={this.state.newStartYear}
                            onValueChange={(year) => this._grabNewStartYear(year)}
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

                <View style={{flexDirection: 'row', marginTop: 10}}>

                    <View style={{justifyContent: 'center', marginRight: -20, flex: 1}}> 
                                <Text style={{fontSize: 16, color: '#254D32', fontWeight: '400'}}>End Date</Text>
                        </View>

                    <View style={[styles.expInput, {flex: 1}]}>

                        <Picker
                            selectedValue={this.state.newEndMonth}
                            onValueChange={(month) => this._grabNewEndMonth(month)}
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
                    <View style={[styles.expInput, {flex: 1}]}>

                        <Picker
                            selectedValue={this.state.newEndYear}
                            onValueChange={(year) => this._grabNewEndYear(year)}
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

                <View style={styles.expInput}>

                <Picker
                        selectedValue={this.state.newDegree}
                        onValueChange={(degree) => this._grabNewDegree(degree)}
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

                <View style={styles.expInput}>

                <Picker
                        selectedValue={this.state.newSpecialisation}
                        onValueChange={(specialisation) => this._grabNewSpecialisation(specialisation)}
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

              <View style={{flexDirection: 'row'}}>

              <TouchableOpacity  disabled={!this.state.flip}
                                style={[styles.button,{borderWidth: 2, borderColor: '#254D32', backgroundColor: this.state.flip ? '#254D32' : 'white'} ]} 
                                onPress={() => this._addEdu()}>
                <Text style={[styles.btnTxt, {color: this.state.flip ? 'white' : '#254D32'}]}>Add</Text>
 
              </TouchableOpacity>

              <TouchableOpacity style={[styles.button, {backgroundColor: '#A7333F'}]} 
                                onPress={() => this._toggleModalAdd()}>
                <Text style={[styles.btnTxt, {color: 'white'}]}>Close</Text>
 
              </TouchableOpacity>

              </View>
            
            </View>
          );

          _addEdu(){
            tempArr.unshift({school: this.state.newSchool, city: this.state.newCity, country: this.state.newCountry,
                             startMM: this.state.newStartMonth, startYY: this.state.newStartYear, endMM: this.state.newEndMonth,
                             endYY: this.state.newEndYear, degree: this.state.newDegree, specialisation: this.state.newSpecialisation})
            console.log('tempArr: ', tempArr)
            this.state.data = tempArr
            this.setState(function(prevState,props){
                return {data: prevState.data}
            })
            console.log('updatedDataArr: ', this.state.data)
            this._toggleModalAdd()
          }

          _releaseNewData(){
            //Release text input values
            this.state.newSchool = ''
            this.setState(function(prevState,props){
                return {newSchool: prevState.newSchool}
            })

            this.state.newCity = ''
            this.setState(function(prevState,props){
                return {newCity: prevState.newCity}
            })

            this.state.newCountry = ''
            this.setState(function(prevState,props){
                return {newCountry: prevState.newCountry}
            })
          
            this.state.newStartMonth = "Jan"
            this.setState(function(prevState,props){
                return {newStartMonth: prevState.newStartMonth}
            })

            this.state.newStartYear = "2018"
            this.setState(function(prevState,props){
                return {newStartYear: prevState.newStartYear}
            })
            this.state.newStartMonth = "Jan"
            this.setState(function(prevState,props){
                return {newStartMonth: prevState.newStartMonth}
            })

            this.state.newStartYear = "2018"
            this.setState(function(prevState,props){
                return {newStartYear: prevState.newStartYear}
            })
            this.state.newEndMonth = "Jan"
            this.setState(function(prevState,props){
                return {newEndMonth: prevState.newEndMonth}
            })

            this.state.newEndYear = "2018"
            this.setState(function(prevState,props){
                return {newEndYear: prevState.newEndYear}
            })
            this.state.newDegree = "Bachelor"
            this.setState(function(prevState,props){
                return {newDegree: prevState.newDegree}
            })

            this.state.newSpecialisation = "Accountancy"
            this.setState(function(prevState,props){
                return {newSpecialisation: prevState.newSpecialisation}
            })

            this._flip()
            
          }
          _renderDeleteModalContent = () => (

            <View style={[styles.modalContent, {backgroundColor: '#254D32'}]}>
            
                <Text style={[styles.title, {color: 'white'}]}>Are you sure you want to delete the selected education from your profile?</Text>
            
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
          _deleteItem(){
           //Use temp array(object) instead to state.someArr to apply javascript functionalities on arrays. 
            var tempEdyArr = []
            tempEduArr = this.state.data
            console.log('tempArr: ', tempEduArr)

            //Returns the part of array we want to remove
            tempEduArr.splice(this.state.index, 1)

            //Assign the tempArr with the removed element to education data
            this.state.data = tempEduArr
            this.setState(function(prevState, props){
                return { bookmarkData : prevState.data }
            })
            console.log('Update EducationsData: ', this.state.data)
            
            //Close modal
            this._untoggleModalDelete()
          }


    render(){
        const { actionButtonVisible } = this.state;
        
        const actions = [{
                text: 'Add',
                icon: require('../../../img/icons/add.png'),
                name: 'bt_add',
                position: 1
        }];
        return(

           
            <View style={styles.container}> 

                 <FlatList
                     onScroll={this.handleScroll}  
                     extraData={this.state}
                     data={this.state.data}
                     renderItem={({ item, index }) => (
                         <View style={styles.skillContainer}>
                            <View style={{flex: 5, alignItems: 'flex-start', justifyContent: 'center'}}>

                                <View style={{flexDirection: 'row', marginTop: 5}}>
                                    <Image source={require('../../../img/icons/college-graduation.png')} style={styles.itemIcon} />
                                    <Text style={styles.item}>{item.school}</Text>
                                </View>

                                <View style={{flexDirection: 'row', marginTop: 5}}>
                                    <Image source={require('../../../img/icons/graduate-certificate.png')} style={styles.itemIcon} />
                                    <Text style={styles.item}>{item.degree}</Text>
                                </View>

                                <View style={{flexDirection: 'row', marginTop: 5}}>
                                    <Image source={require('../../../img/icons/medal.png')} style={styles.itemIcon} />
                                    <Text style={styles.item}>{item.specialization}</Text>
                                </View>

                                <View style={{flexDirection: 'row', marginTop: 5}}>
                                    <Image source={require('../../../img/icons/calendar.png')} style={styles.itemIcon} />
                                    <Text style={styles.item}>{item.startMonth} {item.startYear} - {item.endMonth} {item.endYear}</Text>
                                </View>

                                <View style={{flexDirection: 'row', marginTop: 5}}>
                                    <Image source={require('../../../img/icons/cityCountry.png')} style={styles.itemIcon} />
                                    <Text style={styles.item}>{item.city}, {item.country}</Text>
                                </View>

                            </View>
                            <TouchableOpacity style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}
                                              onPress = {() => this._toggleModalDelete({item, index})}>
                                <Image source={require('../../../img/icons/delete.png')}
                                       style = {{resizeMode: 'center', width: 35, height: 35, tintColor: '#A7333F'}} />
                            </TouchableOpacity>
                          </View>   
                    
                     )}
                     keyExtractor={item => item.school}
                     ItemSeparatorComponent={this._renderSeparator}
                     ListHeaderComponent={() => (!this.state.data.length ? 
                    <Text style={{marginTop: height / 4, textAlign: 'center', fontSize: 20, fontWeight: '500', color: '#42D260'}}>Add education</Text> : null)}
                 />

                 <FloatingAction 
                           actions={actions}
                           visible={actionButtonVisible}
                           overrideWithAction
                           onPressItem={() => this._toggleModalAdd()}/>

                  <Modal isVisible = {this.state.isModalAddVisible}
                         animationIn={'slideInLeft'}
                         animationOut={'slideOutRight'}>

                         {this._renderModalContent()}
                  </Modal>   

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
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    skillContainer:{
        flex: 1,
        flexDirection: 'row',
            width: width - 20,
            backgroundColor: 'white',
            marginBottom: 5,
            marginLeft: 5,
            marginRight: 5,
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 20,
            paddingTop: 20,
    },
    icon: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },
    expContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 5
    },
    item: {
        fontSize: 17,
        color: 'grey',
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
      modalContent: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
      },
      bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
      },
      btnTxt: {
          fontSize: 16,
          fontWeight: '400'
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
    expInput:{
        borderWidth: 2,
        borderColor: 'grey',
        backgroundColor: '#F8F9FB',
        borderRadius: 5,
        marginRight: 5,
    },
    title: {
        color: '#254D32',
        fontSize: 20,
        fontWeight: '400'
    },
    itemIcon: {
        resizeMode: 'center',
        width: 20,
        height: 20,
        tintColor: '#C7C7CD',
        marginRight: 10,
    }
    
})