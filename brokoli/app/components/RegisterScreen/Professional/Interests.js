import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ScrollView, View, Dimensions } from 'react-native';
import {Actions} from 'react-native-router-flux';

const width = Dimensions.get("window"). width

import categories from '../categories.js'
import ViewContainer from '../../ViewContainer'

export default class Interests extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            //Initialy, isSelected contains an array of false values.
            isSelected: Array(categories.length).fill(false)
          
        }
    }  
    render(){
        return(

            <View style={styles.container}>

                <View style={styles.headerCont}> 

                    <Text style={styles.header}> Pick at least 2 categories </Text>

                </View>
                {this._renderCategories()}

                </View>

        )
    }
    _renderCategories(){

        var isSelected = []
        var rows = []
        for(let i=0; i < categories.length; i++)
        {
            rows.push(
                <TouchableOpacity key = {i} 
                                  onPress={this._onToggleCategory.bind(this,i)} 
                                  style={[styles.category, {backgroundColor: this.state.isSelected[i] ? '#42D260' : 'white'}]}>
                  <Text style={[styles.title,{color: this.state.isSelected[i] ? 'white' : 'grey' }]}> {categories[i].name} </Text>
                </TouchableOpacity>
            )
        }
        return(
            <ScrollView showsVerticalScrollIndicator={false}>  
                {rows}
                </ScrollView>
        )
    } 
    _onToggleCategory = (id) => {
        //Toggle property: when clicked from false => true && true => false
        this.state.isSelected[id] = !this.state.isSelected[id]
        this.setState({isSelected: this.state.isSelected})
        console.log('Child',this.state.isSelected)
        this.props.callbackFromParent(this.state.isSelected);
    } 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        marginTop: 15,
        marginBottom: 15,
        alignItems: 'center',
        borderBottomWidth: 0.7,
        borderColor: 'grey'
    },
    headerCont: {
        borderBottomWidth: 0.7,
        width: width -60,
        paddingBottom: 10,
        marginBottom: 20,
        borderColor: 'grey',
        alignItems: 'center'
    },
    header:{
        fontWeight: '300',
        color: '#42D260',
        fontStyle: 'normal',
        fontSize: 16,
    },
    categories: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    category: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        borderColor: '#42D260',
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        fontWeight: 'bold',

    }
})