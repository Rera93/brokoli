import React from 'react';
import { StyleSheet, TextInput, Text, View, Image, ScrollView, TouchableHighlight} from 'react-native';
import {connect} from 'react-redux'
class Home extends React.Component {

    searchPressed(){
        this.props.fetchProjects('bacon,cucumber,banana');
    }
    render(){
        return (
            <View style={{marginTop: 20}}>
                <View> 
                    <TouchableHighlight onPress = {() => this.searchPressed()}>
                    <Text> Fetch Projects </Text>
                    </TouchableHighlight> 
                    </View>
                    <ScrollView>
                        </ScrollView>
                </View>
        )
    }
}

function mapStateToProps(state)
{
    return {
        searchedProjects: state.searchedProjects
    }
}

export default connect(mapStateToProps)(Home) 