import React from 'react';
import { StyleSheet, 
         Text, 
         Image, 
         View,
         FlatList,
         TouchableOpacity,
         Dimensions } from 'react-native';

import Modal from 'react-native-modal'

export default class People extends React.Component{

    static navigationOptions = ({ navigation}) => ({
        title: `${navigation.state.params.selectedItem.position}`,
        headerStyle: { backgroundColor: '#42D260', marginTop: 24 },
        headerTitleStyle: { color: 'white' },
      });

      constructor(props){
          super(props)

          this.state = {
              positionId: null
          }
      }

      componentDidMount(){
        
                this.state.positionId = this.props.navigation.state.params.selectedItem.id
                this.setState(function(prevState, props){
                     return { positionId: prevState.positionId }
                })
                console.log('Passed positionId: ', this.state.positionId)
                // Use positionId to sent request to db and fetch the correct project. 
                this._fetchCorrenspondingProject()
            }
        
            _fetchCorrenspondingProject(){
                
                        /*
                            Store the array as the state of peopleData define above.
                            The code will generate the right data in the right position 
                            if you keep the format of key-value pairs the same.
                        */
                      }
                

    render(){

        return(
            <View>
                </View>
        )
    }
}