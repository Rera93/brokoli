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

export default class Edu extends React.Component{

    static navigationOptions = ({ navigation}) => ({
        title: 'Education',
        headerStyle: { backgroundColor: '#42D260', marginTop: 24 },
        headerTitleStyle: { color: 'white' },
      });


    constructor(props){
        super(props)

        this.state = {
            skillsData: [],
            brokolis: [true,false,false,false,false],
        }
    }

    componentDidMount(){

        this.state.skillsData = this.props.navigation.state.params.selectedSkillsExp
        this.setState(function(prevState, props){
             return { skillsData: prevState.skillsData }
        })
        console.log('Passed skillsData: ', this.state.skillsData)
    }

    _renderBrokolis = ({item}) =>{
        var rows = []
        for(let i=1; i <= this.state.brokolis.length; i++)
        {
            rows.push(
    
               <View key = {i}>
    
                   <Image  style = {{width: 20, height: 20, resizeMode: 'contain', tintColor: i<=item.exp ? '#42D260' : '#C7C7CD'}}
                           source={require('../../../img/icons/broccoli.png')}  />
    
                   </View>
            )
        }
        return(
            <View style={styles.expContainer}>
                {rows}
                </View>
        )
      }


    render(){
        return(

            <View style={styles.container}>


            <FlatList
            extraData={this.state}
            data={this.state.skillsData}
            renderItem={({ item, index }) => (
              <View style={styles.item}>
                <View style={styles.reactions}>
                {/*Name of project*/}
                <Image style={styles.icon} source={require('../../../img/icons/tools.png')} />
                <Text style={styles.name}> {item.skill} </Text>
                </View>
                <View style={styles.reactions}>
                {/*Number of applicants until now*/}
                <Image style={styles.icon} source={require('../../../img/icons/speed-meter.png')} />
                {this._renderBrokolis({item})}
                </View>
              </View>
            )}
            keyExtractor={item => item.skill}
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
        color: '#C7C7CD',
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
        tintColor: '#42D260',
        marginRight: 10,
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
    expContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 5
    },

})