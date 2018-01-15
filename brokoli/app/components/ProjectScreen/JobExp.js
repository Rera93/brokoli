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

export default class JobExp extends React.Component{

    static navigationOptions = ({ navigation}) => ({
        title: 'Job Experience',
        headerStyle: { backgroundColor: '#42D260', marginTop: 24 },
        headerTitleStyle: { color: 'white' },
      });


    constructor(props){
        super(props)

        this.state = {
            jobData: [],
        }
    }

    componentDidMount(){

        this.state.jobData = this.props.navigation.state.params.selectedJobExp
        this.setState(function(prevState, props){
             return { jobData: prevState.jobData }
        })
        console.log('Passed jobData: ', this.state.jobData)
        // Use jobData to sent request to db and fetch the correct project. 
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
            data={this.state.jobData}
            renderItem={({ item, index }) => (
              <View style={styles.item}>
                <View style={styles.reactions}>
                {/*Name of company*/}
                <Image style={styles.icon} source={require('../../../img/icons/company.png')} />
                <Text style={styles.name}> {item.company} </Text>
                </View>
                <View style={styles.reactions}>
                {/*Position*/}
                <Image style={styles.icon} source={require('../../../img/icons/workpos.png')} />
                <Text style={{fontSize: 17, fontWeight: '400', color: '#C7C7CD'}}> {item.position}  </Text>
                </View>
                <View style={styles.reactions}>
                {/*Location: City, Country*/}
                <Image style={[styles.icon, {tintColor: '#42D260' }]} source={require('../../../img/icons/cityCountry.png')} />
                <Text style={{fontSize: 17, fontWeight: '400', color: '#C7C7CD'}}> {item.city}, {item.country}</Text>
                </View>
                <View style={styles.reactions}>
                {/*Number of available positions*/}
                <Image style={[styles.icon, {tintColor: '#42D260' }]} source={require('../../../img/icons/calendar.png')} />
                <Text style={{fontSize: 17, fontWeight: '400', color: '#C7C7CD'}}> {item.startMM} {item.startYY} - {item.endMM} {item.endYY}</Text>
                </View>
              </View>
            )}
            keyExtractor={item => item.company}
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