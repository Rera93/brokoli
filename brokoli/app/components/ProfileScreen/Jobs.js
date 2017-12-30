import React from 'react';
import { StyleSheet, 
         Text, 
         View, 
         Image, 
         Dimensions,
         FlatList,
         Alert,
         TextInput,
         TouchableOpacity,
         KeyboardAvoidingView } from 'react-native';

import FloatingAction from '../FloatingComponents/FloatingAction'
import Modal from 'react-native-modal'
import { Picker } from 'react-native-picker-dropdown'
import Swipeout from 'react-native-swipeout'

const width = Dimensions.get('window').width

var tempArr = []
const minYY = 1990
const maxYY = 2018

export default class Jobs extends React.Component
{

    constructor(props){
        super(props)

        this.state = {
            data: [
                {startMonth: 'Mar', startYear: '2007', endMonth: 'Jun', endYear: '2007', position: 'Java', company: 'Google', city: 'Boston', country: 'MA'},
                {startMonth: 'Mar', startYear: '2007', endMonth: 'Jun', endYear: '2007', position: 'Java1', company: 'Google', city: 'Boston', country: 'MA'},
                {startMonth: 'Mar', startYear: '2007', endMonth: 'Jun', endYear: '2007', position: 'Java2', company: 'Google', city: 'Boston', country: 'MA'},
                {startMonth: 'Mar', startYear: '2007', endMonth: 'Jun', endYear: '2007', position: 'Java3', company: 'Google', city: 'Boston', country: 'MA'},
        ],
            actionButtonVisible: true,
            isModalAddVisible: false,
            isModalDeleteVisible: false,
            newPosition : '',
            newCompany: '',
            newCity: '',
            newCountry: '',
            newStartMonth: '1',
            newStartYear: 2010,
            newEndMonth: '1',
            newEndYear: 2010,
            flip: false,
            activeRowKey : null,
            deleteRowKey : null
        }
    }


    componentDidMount() {
        //When compoment is first loaded the temp array is used as a placeholder for the skils key value pair array 
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

        _toggleModalDelete = () => {
            this.state.isModalDeleteVisible = !this.state.isModalDeleteVisible
            this.setState(function(prevState, props){
                return {isModalDeleteVisible: prevState.isModalDeleteVisible}
            })
            console.log('deleteModal: ', this.state.isModalDeleteVisible)
          }

        _grabNewCompany = (company) => {
            this.state.newCompany = company
            this.setState(function(prevState,props){
                return {newCompany: prevState.newCompany}
            })
            console.log('New Company: ', this.state.newCompany)
  
            this._flip()
        }
        _grabNewPosition = (position) => {
            this.state.newPosition =position
            this.setState(function(prevState,props){
                return {newPosition: prevState.newPosition}
            })
            console.log('New Position: ', this.state.newPosition)
  
            this._flip()
        }

        _grabNewCity = (city) => {
            this.state.newCity = city
            this.setState(function(prevState,props){
                return {newCity: prevState.newCity}
            })
            console.log('New City: ', this.state.newCity)
  
            this._flip()
        }
        _grabNewCountry = (country) => {
            this.state.newCountry = country
            this.setState(function(prevState,props){
                return {newCountry: prevState.newCountry}
            })
            console.log('New Country: ', this.state.newCountry)
  
            this._flip()
        }

        _grabNewStartMonth = (month) => {
            this.state.newStartMonth = month
            this.setState(function(prevState,props){
                return {newStartMonth: prevState.newStartMonth}
            })
            console.log('New Start Month: ', this.state.newStartMonth)
  
        }

        _grabNewStartYear = (year) => {
            this.state.newStartYear = year
            this.setState(function(prevState,props){
                return {newStartYear: prevState.newStartYear}
            })
            console.log('New Start Year: ', this.state.newStartYear)
  
        }

        _grabNewEndMonth = (month) => {
            this.state.newEndMonth = month
            this.setState(function(prevState,props){
                return {newEndMonth: prevState.newEndMonth}
            })
            console.log('New End Month: ', this.state.newEndMonth)

        }

        _grabNewEndYear = (year) => {
            this.state.newEndYear = year
            this.setState(function(prevState,props){
                return {newEndYear: prevState.newEndYear}
            })
            console.log('New End Year: ', this.state.newEndYear)
  
        }

        

        refreshFlatList = (deletedKey) => {
            this.state.deleteRowKey = deletedKey
            this.setState(function(prevState, props){
                return {
                    deleteRowKey: prevState.deleteRowKey
                }
        })
      }

        _flip(){
            
                  if(this.state.newCompany != '' && this.state.newPosition != ''
                         && this.state.newCity != '' && this.state.newCountry != '' )
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

              <Text style={styles.title}>Add new job</Text> 

              <View style={{marginTop: 20}}>
              
              <TextInput placeholder='company'
                         style={styles.input}
                         underlineColorAndroid='transparent'
                         onChangeText={(text) => this._grabNewCompany(text)}
                         value={this.state.newCompany}/>

              </View>

              <View style={{marginTop: 10}}>
              
              <TextInput placeholder='position'
                         style={styles.input}
                         underlineColorAndroid='transparent'
                         onChangeText={(text) => this._grabNewPosition(text)}
                         value={this.state.newPosition}/>

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

              <View style={styles.dateInputCont}>

              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

              <Text style={{fontSize: 16, fontWeight: '400', color: '#C7C7CD'}}>Start Date</Text>

              </View>

              <View style={styles.dateInput}> 

                    <Picker
                        selectedValue={this.state.newStartMonth}
                        onValueChange={(mon) => this._grabNewStartMonth(mon)}
                        mode="dropdown"
                        itemStyle = {{fontSize: 12}}
                        style={{
                        color: '#C7C7CD',
                        height: 30,
                        }}>
                        <Picker.Item label="Jan" value="1" />
                        <Picker.Item label="Feb" value="2" />
                        <Picker.Item label="Mar" value="3" />
                        <Picker.Item label="Apr" value="4" />
                        <Picker.Item label="May" value="5" />
                        <Picker.Item label="Jun" value="6" />
                        <Picker.Item label="Jul" value="7" />
                        <Picker.Item label="Aug" value="8" />
                        <Picker.Item label="Sep" value="9" />
                        <Picker.Item label="Oct" value="10" />
                        <Picker.Item label="Nov" value="11" />
                        <Picker.Item label="Dec" value="12" />
                    </Picker>
                 
                </View>

                <View style={styles.yearCounter}>

                <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} onPress={() => this._decreaseStartYear()}>
                        <Image style={[styles.arrow, {tintColor: '#A7333F'}]} source={require('../../../img/icons/decrement.png')}/>
                        </TouchableOpacity>

                <View style={{flex: 2}}>

                <TextInput style={{textAlign: 'center', fontSize: 17, color: '#C7C7CD'}} keyboardType={'numeric'} value={this.state.newStartYear.toString()}/>

                </View>

                <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} onPress={() => this._increaseStartYear()}>
                        <Image style={[styles.arrow, {tintColor: '#254D32'}]} source={require('../../../img/icons/increment.png')}/>
                </TouchableOpacity>
                    

                    </View>

        

                </View>

                <View style={styles.dateInputCont}>

                <View style={{flex: 1, alignItems:'center', justifyContent: 'center', paddingLeft: 5}}>

                <Text style={{fontSize: 16, fontWeight: '400', color: '#C7C7CD'}}>End Date</Text>

                </View>
                
                <View style={styles.dateInput}> 

                    <Picker
                        selectedValue={this.state.newEndMonth}
                        onValueChange={(mon) => this._grabNewEndMonth(mon)}
                        mode="dropdown"
                        itemStyle = {{fontSize: 12}}
                        style={{
                        height: 30,
                        color: '#C7C7CD',
                        }}>
                        <Picker.Item label="Jan" value="1" />
                        <Picker.Item label="Feb" value="2" />
                        <Picker.Item label="Mar" value="3" />
                        <Picker.Item label="Apr" value="4" />
                        <Picker.Item label="May" value="5" />
                        <Picker.Item label="Jun" value="6" />
                        <Picker.Item label="Jul" value="7" />
                        <Picker.Item label="Aug" value="8" />
                        <Picker.Item label="Sep" value="9" />
                        <Picker.Item label="Oct" value="10" />
                        <Picker.Item label="Nov" value="11" />
                        <Picker.Item label="Dec" value="12" />
                    </Picker>

                </View>

                <View style={styles.yearCounter}>
                
                                <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} onPress={() => this._decreaseEndYear()}>
                                        <Image style={[styles.arrow, {tintColor: '#A7333F'}]} source={require('../../../img/icons/decrement.png')}/>
                                        </TouchableOpacity>
                
                                <View style={{flex: 2}}>
                
                                <TextInput style={{textAlign: 'center', fontSize: 17, color: '#C7C7CD'}} keyboardType={'numeric'} value={this.state.newEndYear.toString()}/>
                
                                </View>
                
                                <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} onPress={() => this._increaseEndYear()}>
                                        <Image style={[styles.arrow, {tintColor: '#254D32'}]} source={require('../../../img/icons/increment.png')}/>
                                </TouchableOpacity>
                                    
                
                                    </View>


              </View>

              </View>

              <View style={{flexDirection: 'row', paddingTop: 20}}>

              <TouchableOpacity  disabled={!this.state.flip}
                                style={[styles.button,{borderWidth: 2, borderColor: '#254D32', backgroundColor: this.state.flip ? '#254D32' : 'white'} ]} 
                                onPress={() => this._addJob()}>
                <Text style={[styles.btnTxt, {color: this.state.flip ? 'white' : '#254D32'}]}>Add</Text>
 
              </TouchableOpacity>

              <TouchableOpacity style={[styles.button, {backgroundColor: '#A7333F'}]} 
                                onPress={() => this._toggleModalAdd()}>
                <Text style={[styles.btnTxt, {color: 'white'}]}>Close</Text>
 
              </TouchableOpacity>

              </View>
            
            </View>
          );

          _increaseEndYear(){

                if(this.state.newEndYear < maxYY)

                {

                this.state.newEndYear = this.state.newEndYear + 1
                this.setState(function(prevState, props){
                    return {newEndYear: prevState.newEndYear}
                })
                console.log('End year: ', this.state.newEndYear)

                }

          }
          _decreaseEndYear(){

            if (this.state.newEndYear > minYY){


            this.state.newEndYear = this.state.newEndYear - 1
            this.setState(function(prevState, props){
                return {newEndYear: prevState.newEndYear}
            })
            console.log('End year: ', this.state.newEndYear)
          }

        }

          _increaseStartYear(){

            if(this.state.newStartYear < maxYY)
            
            {
            
             this.state.newStartYear = this.state.newStartYear + 1
             this.setState(function(prevState, props){
                return {newStartYear: prevState.newStartYear}
            })
           
            console.log('Start year: ', this.state.newStartYear)

            }
            
          }

          _decreaseStartYear(){

            if(this.state.newStartYear > minYY)

            {

            this.state.newStartYear = this.state.newStartYear - 1
            this.setState(function(prevState, props){
                return {newStartYear: prevState.newStartYear}
            })
            console.log('Start year: ', this.state.newStartYear)

        }
                      
        }

          _addJob(){
            tempArr.unshift({startMonth: this.state.newStartMonth, 
                             startYear: this.state.newStartYear,
                             endMonth: this.state.newEndMonth, 
                             endYear: this.state.newEndYear, 
                             position: this.state.newPosition, 
                             company: this.state.newCompany, 
                             city: this.state.newCity, 
                             country: this.state.newCountry})
            console.log('tempArr: ', tempArr)
            this.state.data = tempArr
            this.setState(function(prevState,props){
                return {data: prevState.data}
            })
            console.log('updatedDataArr: ', this.state.data)
            this._toggleModalAdd()
          }

          _releaseNewData(){
            //Release text inputs values
            this.state.newCompany = ''
            this.setState(function(prevState,props){
                return {newCompany: prevState.newCompany}
            })
            this.state.newPosition = ''
            this.setState(function(prevState,props){
                return {newPosition: prevState.newPosition}
            })
            this.state.newCity = ''
            this.setState(function(prevState,props){
                return {newCity: prevState.newCity}
            })
            this.state.newCountry = ''
            this.setState(function(prevState,props){
                return {newCountry: prevState.newCountry}
            })
            this._flip()
            //Release month values
            this.state.newStartMonth = "1"
            this.setState(function(prevState,props){
                return {newStartMonth: prevState.newStartMonth}
            })
            this.state.newEndMonth = "1"
            this.setState(function(prevState,props){
                return {newEndMonth: prevState.newEndMonth}
            })
            //Release year values
            this.state.newStartYear = 2010
            this.setState(function(prevState,props){
                return {newStartYear: prevState.newStartYear}
            })
            this.state.newEndYear = 2010
            this.setState(function(prevState,props){
                return {newEndYear: prevState.newEndYear}
            })
          }
          _renderDeleteModalContent = () => (

            <View style={styles.modalContent}>
            
                <Text style={styles.title}>Are you sure you want to delete the selected job from your profile?</Text>
            
                <View style={{flexDirection: 'row'}}>
            
                                    <TouchableOpacity 
                                                    style={[styles.button,{backgroundColor: '#254D32'}]} 
                                                    onPress={() => this._deleteItem() }>
                                    <Text style={[styles.btnTxt, {color: 'white'}]}>Ok</Text>
                    
                                    </TouchableOpacity>
            
                                    <TouchableOpacity style={[styles.button, {backgroundColor: '#A7333F'}]} 
                                                    onPress={() => this._toggleModalDelete()}>
                                    <Text style={[styles.btnTxt, {color: 'white'}]}>Cancel</Text>
                    
                                    </TouchableOpacity>
            
                                </View>
            
                            </View>
            
          )
          _deleteItem(){
            const deletingRow = this.state.activeRowKey            
            this.state.data.splice(this.props.index, 1)
            //Refresh FlatList
            this.refreshFlatList(deletingRow)
            this._toggleModalDelete()
          }



    render(){
        const { actionButtonVisible } = this.state;
        
        const actions = [{
                text: 'Add',
                icon: require('../../../img/icons/add.png'),
                name: 'bt_add',
                position: 1
        }];

        const swipeSettings = {
            autoClose: true,
            onClose: (secId, rowId, direction) => {
                if(this.state.activeRowKey != null)
                {
                    this.state.activeRowKey = null 
                    this.setState(function(prevState, props){
                        return {activeRowKey: prevState.activeRowKey}
                    })
                }
            },
            onOpen: (secId, rowId, direction) => {
                console.log(this.props.item)
                this.state.activeRowKey = this.props.item
                this.setState(function(prevState, props){
                    return {activeRowKey: prevState.activeRowKey}
                })

            },
            left: [
                {
                    onPress: () => {

                        this._toggleModalDelete()
                        
                    },
                    text: 'Delete', type: 'delete'
                }
            ],
            rowId: this.props.index,
            secId: 1,

        }
        return(

            <View style={styles.container}> 

                 <FlatList
                     onScroll={this.handleScroll}  
                     extraData={this.state}
                     data={this.state.data}
                     renderItem={({ item, index }) => (
                         <Swipeout {...swipeSettings} item={item} index={index} style={styles.skillContainer}>
                            <View style={styles.period}>
                                <Text style={styles.item}>{item.startMonth}</Text>
                                <Text style={styles.item}>{item.startYear}</Text>
                                <Text style={styles.item}>{item.endMonth}</Text>
                                <Text style={styles.item}>{item.endYear}</Text>
                            </View>
                            <Text style={styles.item}>{item.position}</Text>
                            <Text style={styles.item}>{item.company}</Text>
                            <View style={styles.period}>
                            <Text style={styles.item}>{item.city}</Text>
                            <Text style={styles.item}>{item.country}</Text>
                            </View>
                          </Swipeout>   
                    
                     )}
                     keyExtractor={item => item.position}
                     ItemSeparatorComponent={this._renderSeparator}
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
        width: width - 100,
    },
    dateInputCont:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        marginBottom: 5,
    },
    dateInput:{
        flex: 1,
        borderWidth: 2,
        borderColor: 'grey',
        backgroundColor: '#F8F9FB',
        borderRadius: 5,
        marginTop: 5,
        marginRight: 5,
    },
    title: {
        color: '#254D32',
        fontSize: 20,
        fontWeight: '400'
    },
    period:{
        flexDirection: 'row'
    },
    arrow: {
        borderWidth: 1,
        width: 20,
        height: 20,
        resizeMode: 'center'
    },
    yearCounter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 5,
        // width: (width - 100) /2
    },
    arrowCont: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
        
    }
})