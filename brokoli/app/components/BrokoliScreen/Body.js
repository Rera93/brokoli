'use strict'
import React from 'react';
import { StyleSheet, Text, TextInput, Button, Alert, ScrollView, View,ListView} from 'react-native';


class Body extends React.Component {

    constructor(props) {
      super(props);
       this.state = {
        data: []}
       
    }

    componentDidMount(){
      this.getData();
    }

    getData(){
      var arrayProjects = [];
      return fetch('https://brokoli.eu-gb.mybluemix.net/api/visitors', {  
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      })
        // .then(function(response) { return response.json(); })
        // .then(function(responseData) {
        //   this.setState({ data : responseData})});

        .then((response) => response.json())
        .then((responseData) => {
          for (var i = 0; i < responseData.length; i++) {
            var object = responseData[i];
            arrayProjects.push(object);
          }
          this.setState({data: arrayProjects})
        });

    }

    // renderProjects() {
    //   var text = this.state.data[0].doc.name;
    //    <Text>{text}</Text>
    // }

   //  renderProjects() {
   //   var contents = this.state.data.map(function (item) {
   //      return (
   //        <View key={item.id}>
   //          <Text>{item.doc.name}</Text>
   //          <Text>{item.doc.description}</Text>
   //          <Text>{item.doc.positions}</Text>
   //        </View>
   //      );
   //   });
   // }

   // for(var i = 0; i < this.state.data.length;i++){
   //      Alert.alert('name[0]:'+ this.state.data[i].doc.name);
   //    }

      render(){

        
        
      

      var contents = this.state.data.map(function (item) {
        return (
          <View key={item.id}>
            <Text>{item.doc.name}</Text>
            <Text>{item.doc.description}</Text>
            <Text>{item.doc.positions}</Text>
            <Text>==============</Text>
          </View>
        );
     });

      

      // var arrayLength = this.state.data.length;
      // if(var>0)
      //   Alert.alert(arrayLength);
      //for (var i = 0; i < arrayLength; i++) {
        
      
      //}
      
        
      //{this.renderProjects()}

        return(

            <ScrollView>
                <View>
                <Text>oi</Text>
                {contents}
                </View>

          </ScrollView>
          )
      }

}

const styles = StyleSheet.create({
  ViewContainer:{
    justifyContent: "flex-start",
    alignItems: "stretch"
  },
  textComponent:{
    fontSize: 20,
    marginTop:20,
  },
  largeForm: {
    borderWidth:1,
    justifyContent: 'flex-start',
    height:80,
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  textInput: {
    borderWidth:1,
    justifyContent: 'center',
    height:40,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
              

export default Body