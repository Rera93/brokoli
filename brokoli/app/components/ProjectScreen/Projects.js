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
         TouchableOpacity,
         Image,
         Dimensions} from 'react-native';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

import FloatingAction from '../FloatingComponents/FloatingAction';

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
        actionButtonVisible: true
      };
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

     componentDidMount() {
        this.makeRemoteRequest();
      }

      //This is just an example where a bunch of data is being fetched from the API below. 
      //Need to fetch data from db and display them in the flat list.
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

        const { actionButtonVisible } = this.state;

        const actions = [{
          text: 'Create',
          icon: require('../../../img/icons/create.png'),
          name: 'bt_create',
          position: 1
        }];

        const { navigate } = this.props.navigation

        return(
          
          <View style={styles.container}>
          <FlatList
            onScroll={this.handleScroll}
            data={this.state.data}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.item}>
                <View style={styles.nameCont}>
                {/*Name of project*/}
                <Text style={styles.name}> {item.email} </Text>
                </View>
                <View style={styles.reactionsCont}>
                <View style={styles.reactions}>
                {/*Number of applicants until now*/}
                <Image style={styles.icon} source={require('../../../img/icons/applicants.png')} />
                <Text> {item.name.first}  </Text>
                </View>
                <View  style={styles.reactions}>
                 {/*Number of brokoli's until now*/}
                 <Image style={styles.icon} source={require('../../../img/icons/brokolis.png')} />
                 <Text> {item.name.last}  </Text>
                 </View>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.email}
          />

          <FloatingAction  actions={actions}
                           visible={actionButtonVisible}
                           overrideWithAction
                           onPressItem={() => navigate('Detail')}/>
       
          </View>   

          )
      }

}

const styles = StyleSheet.create({
  item:{
    backgroundColor: 'white',
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
    paddingTop: 20
  },
  reactionsCont: {
    flexDirection: 'row'
  },
  reactions: {
    flexDirection: 'row'
  },
  icon: {
    resizeMode: 'contain',
    width: 25,
    height: 25,
    tintColor: '#42D260'
  },
  createBtnCont:{
    position: 'absolute',
    top: 0,
    left: 0,
  },
  createBtn: {
    fontSize: 25
  }

});
              