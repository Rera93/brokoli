'use strict'
import React from 'react';
import { StyleSheet, 
         Text, 
         TextInput, 
         Button, 
         Alert, 
         ScrollView, 
         View,
         FlatList,
        TouchableOpacity} from 'react-native';




export default class Projects extends React.Component {

    static navigationOptions = {
        title: 'Your Projects',
        headerStyle: { backgroundColor: '#42D260', marginTop: 24 },
        headerTitleStyle: { color: 'white' },
      };

  constructor(props) {
       super(props);

       this.state = {
        loading: false,
        data: [],
        page: 1,
        seed: 1,
        error: null,
        refreshing: false,
      };
     }

     componentDidMount() {
        this.makeRemoteRequest();
      }
    
      makeRemoteRequest = () => {
        const { page, seed } = this.state;
        const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
        this.setState({ loading: true });
        fetch(url)
          .then(res => res.json())
          .then(res => {
            this.setState({
              data: page === 1 ? res.results : [...this.state.data, ...res.results],
              error: res.error || null,
              loading: false,
              refreshing: false
            });
          })
          .catch(error => {
            this.setState({ error, loading: false });
          });
      };
    


   

      render(){

        const { navigate } = this.props.navigation

        return(
          
          <ScrollView contentContainerStyle={styles.container}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <View>
                <Text> {`${item.name.first} ${item.name.last}`} </Text>
                <Text> {item.email} </Text>
              </View>
            )}
          />
        </ScrollView>
       
                  

          )
      }

}

const styles = StyleSheet.create({
});
              