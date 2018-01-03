import React from 'react';
import { StyleSheet, 
         Text, 
         Image, 
         View,
         FlatList,
         TouchableOpacity,
         Dimensions } from 'react-native';


var tempArr = []

const width = Dimensions.get('window').width

export default class Bookmarks extends React.Component{

    static navigationOptions = {
        title: 'Your Bookmarks',
        headerStyle: { backgroundColor: '#42D260', marginTop: 24 },
        headerTitleStyle: { color: 'white' },
      };


    constructor(props){
        super(props)

        this.state = {

            bookmarkData: [
                {project: 'Brokoli1', applicants: 17, brokolis: 15},
                {project: 'Brokoli2', applicants: 145, brokolis: 65},
                {project: 'Brokoli3', applicants: 137, brokolis: 32},
                {project: 'Brokoli4', applicants: 4, brokolis: 23},
                

        
        ],
        }
    }

    componentDidMount(){
        this._makeRemoteRequest()
    }
        
      //Need to fetch data from db and display them in the flat list.
      _makeRemoteRequest = () => {

        /*
            DB request happens here. 
            Need to be called everytime a bookmark is set on the brokoli tab,  

            tempArr = dataFetchedFromDb

            Update state of bookmarkData like the following

            this.state.bookmarkData = tempArr
            this.setState(function(prevState, props){
                return { boormarkData: prevState.bookmarkData}
            })

        */
        
       
    }

    render(){
        return(

            <View style={styles.container}>


            <FlatList
            data={this.state.bookmarkData}
            renderItem={({ item, index }) => (
              <TouchableOpacity style={styles.item}>
                <View style={{flex: 5, alignItems: 'flex-start', justifyContent: 'center'}}>
                <View style={styles.nameCont}>
                {/*Name of project*/}
                <Text style={styles.name}> {item.project} </Text>
                </View>
                <View style={styles.reactionsCont}>
                <View style={styles.reactions}>
                {/*Number of applicants until now*/}
                <Image style={styles.icon} source={require('../../../img/icons/applicants.png')} />
                <Text style={{fontSize: 17, fontWeight: '400', color: '#C7C7CD'}}> {item.applicants}  </Text>
                </View>
                <View style={styles.reactions}>
                 {/*Number of brokoli's until now*/}
                 <Image style={styles.icon} source={require('../../../img/icons/brokolis.png')} />
                 <Text style={{fontSize: 17, fontWeight: '400', color: '#C7C7CD'}}> {item.brokolis}  </Text>
                 </View>
                </View>
                </View>
                <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}>
                    <Image source={require('../../../img/icons/right-arrow.png')}
                           style={{width: 25, height: 25, resizeMode: 'center', tintColor: '#42D260'}} />
                    </View>
              </TouchableOpacity>
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
        flexDirection: 'row',
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
        flexDirection: 'row',
        paddingTop: 5,
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

})