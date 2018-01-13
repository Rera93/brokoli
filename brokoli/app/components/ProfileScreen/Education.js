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
            newDegree: '',
            newSpecialisation: '',
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


    render(){
        return(

            <View style={styles.container}> 

                 <Text> Education </Text>

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
    }
})