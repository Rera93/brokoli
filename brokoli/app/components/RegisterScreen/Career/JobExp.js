import React from 'react';
import { StyleSheet, 
         Text, 
         TouchableOpacity, 
         View, 
         Dimensions, 
         TextInput,
         FlatList,
         Image } from 'react-native';
import { Picker } from 'react-native-picker-dropdown'
import Modal from 'react-native-modal'

const width = Dimensions.get("window").width

var tempArr = []

export default class JobExp extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            company: '',
            position : '',
            city: '',
            country: '',
            startMonth: 'Jan',
            startYear: '2018',
            endMonth: 'Jan',
            endYear: '2018',
            jobs: [],
            flip: false,
            index: null,
            isModalDeleteVisible: false
        }
    }

    _grabCompany = (text) => {
        
                this.state.company = text
                this.setState(function(prevState, props){
                  return {company: prevState.company}
                 });
                console.log('Company: ', this.state.company)

                this._flip()
                
    }

    _grabPosition = (text) => {
                
                this.state.position = text
                this.setState(function(prevState, props){
                return {position: prevState.position}
                });
                console.log('Position: ', this.state.position)

                this._flip()
                        
    }
    _grabCity = (text) => {
        
                this.state.city= text
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
    
    _grabStartMonth = (text) => {
        
        this.state.startMonth = text
        this.setState(function(prevState, props){
        return {startMonth: prevState.startMonth}
        });
       console.log('Start Month: ', this.state.startMonth) 

    }    

    _grabEndMonth = (text) => {
        
        this.state.endMonth = text
        this.setState(function(prevState, props){
        return {endMonth: prevState.endMonth}
        });
        console.log('End Month: ', this.state.endMonth) 
        
    }
    
    _grabStartYear = (text) => {
        
        this.state.startYear = text
        this.setState(function(prevState, props){
        return {startYear: prevState.startYear}
        });
        console.log('Start Year: ', this.state.startYear)   

    }    

    _grabEndYear = (text) => {
        
        this.state.endYears = text
        this.setState(function(prevState, props){
        return {endYear: prevState.endYear}
        });
        console.log('End Year: ', this.state.endYear)  
        
    }  

    _deleteItem(){
        //Use temp array(object) instead to state.someArr to apply javascript functionalities on arrays. 
         var tempJobArr = []
         tempJobArr = this.state.jobs
         console.log('tempArrChild: ', tempJobArr)
    
         //Returns the part of array we want to remove
         tempJobArr.splice(this.state.index, 1)
    
         //Assign the tempArr with the removed element to jobs
         this.statejobs = tempJobArr
         this.setState(function(prevState, props){
             return { jobs : prevState.jobs }
         })
    
         
         console.log('Update JobsChild: ', this.state.jobs)
        // this.props.callbackFromParentJobs(this.state.jobs);
    
         //Close modal
         this._untoggleModalDelete()
       }

       _onAdd(){
        tempArr.unshift({comp: this.state.company, pos: this.state.position, city: this.state.city,
                         country: this.state.country, startMM: this.state.startMonth, startYY: this.state.startYear,
                         endMM: this.state.endMonth, endYY: this.state.endYear})
        console.log('tempArrChild: ', tempArr)
        this.state.jobs = tempArr
        this.setState(function(prevState,props){
            return {jobs: prevState.jobs}
        })
        console.log('jobsArrChild: ', this.state.jobs)
      //  this.props.callbackFromParentJobs(this.state.jobs);

        //Release text inputs value
        this.state.company = ''
        this.setState(function(prevState,props){
            return {company: prevState.company}
        })
        this.state.position = ''
        this.setState(function(prevState,props){
            return {position: prevState.position}
        })
        this.state.city = ''
        this.setState(function(prevState,props){
            return {city: prevState.city}
        })
        this.state.country = ''
        this.setState(function(prevState,props){
            return {country: prevState.country}
        })
        this.state.startMonth = 'Mon'
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
    
          if(this.state.company != '' && this.state.position != '' && this.state.city != '' && this.state.country != '')
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
                        
                            <Text style={[styles.title, {color: 'white'}]}>Are you sure you want to delete the selected job from your registration?</Text>
                        
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

            <View style={styles.jobContainer}>

<View style={{flexDirection: 'row', padding: 10, backgroundColor: 'white'}}>

                <View style={{flex : 1, backgroundColor: 'white'}}>

                    <View style={styles.inputCont}>  

                        <TextInput style={styles.singleInput} 
                                placeholder='Company'
                                placeholderTextColor='#C7C7CD'
                                underlineColorAndroid='transparent'
                                value={this.state.company}
                                onChangeText={(text) => this._grabCompany(text)}/>

                    </View>

                    <View style={styles.inputCont}>

                        <TextInput style={styles.singleInput} 
                                placeholder='Position'
                                placeholderTextColor='#C7C7CD'
                                underlineColorAndroid='transparent'
                                value={this.state.position}
                                onChangeText={(text) => this._grabPosition(text)}/>

                    </View>

                    <View style={{flex: 1, flexDirection: 'row'}}>

                        <View style={[styles.inputCont, {marginRight: 5}]}>           

                            <TextInput style={styles.singleInput} 
                                    placeholder='City'
                                    placeholderTextColor='#C7C7CD'
                                    underlineColorAndroid='transparent'
                                    value={this.state.city}
                                    onChangeText={(text) => this._grabCity(text)}/>

                        </View>

                        <View style={[styles.inputCont, {marginLeft: 5}]}> 
                        
                            <TextInput style={styles.singleInput} 
                                    placeholder='Country'
                                    placeholderTextColor='#C7C7CD'
                                    underlineColorAndroid='transparent'
                                    value={this.state.country}
                                    onChangeText={(text) => this._grabCountry(text)}/>

                        </View>
                    </View> 

                    <View style={{flex: 1, flexDirection: 'row', marginTop: 5, marginBottom: 5}}>

                     <View style={{flex: 1}}>

                            <Text style={styles.title}>Start Date</Text>

                     </View>

                    <View style={{flex: 1, marginLeft: 10}}>

                         <Text style={styles.title}>End Date</Text>
                        </View>

                    </View>

                    <View style={{flex: 1, flexDirection: 'row'}}>

                        <View style={[styles.pickerCont, {flex: 1, justifyContent: 'center', marginRight: 10}]}> 


                        <Picker
                        selectedValue={this.state.startMonth}
                        onValueChange={(month) => this._grabStartMonth(month)}
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
                        onValueChange={(month) => this._grabEndMonth(month)}
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

                <TouchableOpacity  disabled={!this.state.flip}
                    style={[styles.btnContainer, {backgroundColor: this.state.flip ? '#42D260' : 'white' }]}
                    onPress={() => this._onAdd()}>
                      <Text style={[styles.btnText,{color: this.state.flip ? 'white' : '#42D260'}]}> ADD </Text>
                    </TouchableOpacity>


                </View>

                </View>
                

                <FlatList
                        extraData={this.state}
                        data={this.state.jobs}
                        renderItem={({ item, index }) => (
                            <View style={styles.jobContainerList}>
                            <View style={{paddingTop: 10, paddingBottom: 5, flex: 5, alignItems: 'flex-start', justifyContent: 'center'}}>
                            <View style={styles.job}>
                            <Image source={require('../../../../img/icons/company.png')} 
                                   style={styles.icon}/>
                            <Text style={styles.jobText}>{item.comp} </Text>
                            </View>
                            <View style={styles.job}>
                            <Image source={require('../../../../img/icons/workpos.png')} 
                                   style={styles.icon}/>
                            <Text style={styles.jobText}>{item.pos}</Text>
                            </View>
                            <View style={styles.job}>
                            <Image source={require('../../../../img/icons/cityCountry.png')} 
                                   style={styles.icon}/>
                            <Text style={styles.jobText}>{item.city}, {item.country}</Text>
                            </View>
                            <View style={styles.job}>
                            <Image source={require('../../../../img/icons/calendar.png')} 
                                   style={styles.icon}/>
                            <Text style={styles.jobText}>{item.startMM} {item.startYY} - {item.endMM} {item.endYY}</Text>
                            </View>
                            </View>
                            <TouchableOpacity style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}
                                                        onPress = {() => this._toggleModalDelete({item, index})}>
                                            <Image source={require('../../../../img/icons/delete.png')}
                                                style = {{resizeMode: 'center', width: 35, height: 35, tintColor: '#A7333F'}} />
                                        </TouchableOpacity>
                </View>
            )}
            keyExtractor={item => item.comp}
            style={{flex: 1, marginTop: 10}}
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

    jobContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputCont: {
        flex: 1,
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 2,
        padding: 5,
        borderRadius: 5,
        borderColor: 'grey', 
    },
    singleInput: {
        color: '#C7C7CD',
        fontSize: 16,
        fontWeight: '400',
        paddingLeft: 5, 
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
    flex: 1,
    borderWidth: 2,
    borderColor: '#42D260',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    marginTop: 20,
},
btnText: {
    fontSize: 17,
    fontWeight: '600',
},
jobContainerList:{
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
job:{
    width: width - 20,
    backgroundColor: 'white',
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row'
  },
jobText: {
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

