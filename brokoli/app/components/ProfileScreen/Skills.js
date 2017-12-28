import React from 'react';
import { StyleSheet, 
         Text, 
         View, 
         Image, 
         Dimensions,
         FlatList } from 'react-native';

const width = Dimensions.get('window').width

export default class Skills extends React.Component
{

    constructor(props){
        super(props)

        this.state = {
            data: [
                {skill: 'Java', experience: 4},
                {skill: 'C++', experience: 2},
                {skill: 'IOS Development', experience: 1},
                {skill: 'Front-End Development', experience: 5},
        ],
        brokolis: [true,false,false,false,false],
        }
    }

    /* this.state.data contains mockup data. Need to fetch the real data 
    from the db. Momentarily when adding skills in register only the skill
    name is required and no exp yet. 
    */

    _renderBrokolis = ({item}) =>{
        var rows = []
        console.log('Exp: ', item.experience)
        for(let i=1; i <= this.state.brokolis.length; i++)
        {
            rows.push(

               <View key = {i}>

                   <Image  style = {[styles.icon,{tintColor: i<=item.experience ? '#42D260' : 'grey'}]} 
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

      _renderSeparator = () => {
        return (
          <View
            style={{
              height: 1,
              width: width,
              backgroundColor: "#C7C7CD",
            }}
          />
        )
    }

    render(){
        return(

            <View style={styles.container}> 

                 <FlatList
                     extraData={this.state}
                     data={this.state.data}
                     renderItem={({ item, index }) => (
                         <View style={styles.skillContainer}>
                            <Text style={styles.item}>{item.skill}</Text>
                            {this._renderBrokolis({item})} 
                             </View>
                    
                     )}
                     keyExtractor={item => item.skill}
                     ItemSeparatorComponent={this._renderSeparator}
                 />

                 </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    skillContainer:{
            width: width - 20,
            backgroundColor: 'white',
            marginBottom: 5,
            marginLeft: 5,
            marginRight: 5,
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 20,
            paddingTop: 20,
    },
    icon: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },
    expContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 5
    },
    item: {
        fontSize: 17,
        color: 'grey',
        fontWeight: '400'
    }
})