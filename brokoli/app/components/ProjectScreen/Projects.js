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
        // page: 1,
        // seed: 1,
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
        var arrayProjects = [];
        var obj ={id:this.props.screenProps}
        this.getData(obj, 'fetchmyprojects').then((responseData) => {
        for (var i = 0; i < responseData.length; i++) {
            var positions = [];
             var object = responseData[i];
             object.project.brokoliCounter = 0;
             var position;
             for( var j = 0 ; j < object.project.positions.length; j++){
                position = object.project.positions[j];
                position.open = true;
                position.apply = false;
                position.posDescription = 'Dicant gloriatur sea te, ad veniam essent sadipscing eum. In has appareat sadipscing, sit impedit necessitatibus id. Sea no erat debet antiopam, quo ex ridens dolorem erroribus, ne sit alia harum nusquam. Nibh soleat perfecto an eam, prima nonumy accusam ea vel. Nec tempor oportere et, doctus alienum detracto ad his.'
                positions.push(position);


            }

            object.project.positions = positions;

            arrayProjects.push(object.project);
        }
        
        this.state.data = arrayProjects;
        this.setState(function(prevState, props){
            return {data: prevState.data,
                  error:  null,
                  loading: false,
                  refreshing: false}
        })
        var str = JSON.stringify(this.state.data, null, 4);
          console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<'+str);

      });

        //this.makeRemoteRequest();
      }

      //This is just an example where a bunch of data is being fetched from the API below. 
      //Need to fetch data from db and display them in the flat list.
      getData(body, urlParam){
      

      return fetch('https://brokoli.eu-gb.mybluemix.net/api/'+urlParam, {  
                 method: 'POST',
                 headers: {
                   'Accept': 'application/json',
                   'Content-Type': 'application/json',
                 }
               ,
                  body: JSON.stringify(body),

                
                })
        .then((response) => response.json());

        

    }

     // componentDidMount() {
     //    this.makeRemoteRequest();
     //  }

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
               <View style={{flex: 5, alignItems: 'flex-start', justifyContent: 'center'}}>
                <View style={styles.nameCont}>
                {/*Name of project*/}
                <Text style={styles.name}> {item.title} </Text>
                </View>
                <View style={styles.reactionsCont}>
                <View style={styles.reactions}>
                {/*Number of applicants until now*/}
                <Image style={styles.icon} source={require('../../../img/icons/applicants.png')} />
                <Text style={{fontSize: 17, fontWeight: '400', color: '#C7C7CD'}}> {item.applicants}  </Text>
                </View>
                <View  style={styles.reactions}>
                 {/*Number of brokoli's until now*/}
                 <Image style={styles.icon} source={require('../../../img/icons/brokolis.png')} />
                 <Text style={{fontSize: 17, fontWeight: '400', color: '#C7C7CD'}}> {item.totalBrokolis}  </Text>
                 </View>
                </View>
                </View>
                <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}>
                    <Image source={require('../../../img/icons/right-arrow.png')}
                           style={{width: 25, height: 25, resizeMode: 'center', tintColor: '#42D260'}} />
                    </View>

              </TouchableOpacity>
            )}
            keyExtractor={item => item.title}
          />

          <FloatingAction
                           actions={actions}
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
    flexDirection: 'row',
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
    paddingTop: 20
  },
  reactionsCont: {
    flexDirection: 'row',
    paddingTop: 5,
  },
  reactions: {
    flexDirection: 'row',
   
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
  },
  name: {
    fontSize: 20,
    fontWeight: '400',
    color: '#C7C7CD'
},

});
              