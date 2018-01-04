import React from 'react';
import { StyleSheet, 
         Text, 
         Image, 
         View,
         FlatList,
         TouchableOpacity,
         Dimensions } from 'react-native';

const width = Dimensions.get('window').width

export default class Project extends React.Component{

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.selectedItem.project}`,
        headerStyle: { backgroundColor: '#42D260', marginTop: 24 },
        headerTitleStyle: { color: 'white' },
      })

      constructor(props){
          super(props)

          this.state = {
              projectId : null
          }
      }

      componentDidMount(){

        this.state.projectId = this.props.navigation.state.params.selectedItem.id
        this.setState(function(prevState, props){
            return { projectId: prevState.projectId }
        })

        console.log('Passed projectId: ', this.state.projectId)

      }

    render(){
        const { params } = this.props.navigation.state;

        return (

            <View style={styles.container}> 

                    <Text> {params.selectedItem.project} </Text>

                </View>

        )
    }


}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    }


}) 