'use strict'
import React from 'react';
import { StyleSheet, Text, TextInput, Button, Alert, ScrollView, View} from 'react-native';


export default class Projects extends React.Component {

    static navigationOptions = {
        title: 'Projects',
        headerStyle: { backgroundColor: '#42D260', marginTop: 24 },
        headerTitleStyle: { color: 'white' },
      };

  constructor(props) {
       super(props);
     }

     

   

      render(){

        const { navigate } = this.props.navigation

        return(
                    <View style={{flex: 1}}>
                    <Text> Projects </Text> 

                    <Text onPress={() => navigate('Create')}> Create </Text> 


                    </View>

          )
      }

}

const styles = StyleSheet.create({
});
              