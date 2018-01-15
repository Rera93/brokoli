import React from 'react';
import { StyleSheet, 
         Text, 
         Image, 
         View,
         FlatList,
         TouchableOpacity,
         Dimensions } from 'react-native';

import Modal from 'react-native-modal'


var tempArr = []

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default class ProjectExp extends React.Component{

    static navigationOptions = ({ navigation}) => ({
        title: 'Project Experience',
        headerStyle: { backgroundColor: '#42D260', marginTop: 24 },
        headerTitleStyle: { color: 'white' },
      });


    constructor(props){
        super(props)

        this.state = {
            projectData: [],
        }
    }

    componentDidMount(){

        this.state.projectData = this.props.navigation.state.params.selectedProjectExp
        this.setState(function(prevState, props){
             return { projectData: prevState.projectData }
        })
        console.log('Passed projectData: ', this.state.projectData)
        // Use projectData to sent request to db and fetch the correct project. 
        this._fetchCorrenspondingProject()
    }

    componentWillReceiveProps(nextProps){
        
                this.state.projectData = nextProps.navigation.state.params.selectedProjectExp
                this.setState(function(prevState, props){
                     return { projectData: prevState.projectData }
                })
                console.log('Passed projectData: ', this.state.projectData)
                // Use projectData to sent request to db and fetch the correct project. 
                this._fetchCorrenspondingProject()
            }

    _fetchCorrenspondingProject(){
        
                /*
                    Store the array as the state of projectData define above.
                    The code will generate the right data in the right position 
                    if you keep the format of key-value pairs the same.
                */
              }

    render(){
        return(

            <View style={styles.container}>


            <FlatList
            extraData={this.state}
            data={this.state.projectData}
            renderItem={({ item, index }) => (
              <View style={styles.item}>
                <View style={styles.reactions}>
                {/*Name of project*/}
                <Image style={styles.icon} source={require('../../../img/icons/projection-screen.png')} />
                <Text style={styles.name}> {item.project} </Text>
                </View>
                <View style={styles.reactions}>
                {/*Number of applicants until now*/}
                <Image style={styles.icon} source={require('../../../img/icons/workpos.png')} />
                <Text style={{fontSize: 17, fontWeight: '400', color: '#C7C7CD'}}> {item.position}  </Text>
                </View>
                <View style={styles.reactions}>
                {/*Number of available positions*/}
                <Image style={[styles.icon, {tintColor: '#42D260' }]} source={require('../../../img/icons/books.png')} />
                <Text style={{fontSize: 17, fontWeight: '400', color: '#C7C7CD'}}> {item.course}  </Text>
                </View>
              </View>
            )}
            keyExtractor={item => item.project}
            />
                </View>

        )
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        paddingTop: 5,
    },
    name: {
        fontSize: 20,
        fontWeight: '400',
        color: '#C7C7CD'
    },
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

      reactions: {
          flexDirection: 'row',
          paddingTop: 5,
          paddingBottom: 5,
      },
      icon: {
        resizeMode: 'contain',
        width: 25,
        height: 25,
        tintColor: '#42D260'
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
    title: {
        color: '#254D32',
        fontSize: 20,
        fontWeight: '400'
    },

})