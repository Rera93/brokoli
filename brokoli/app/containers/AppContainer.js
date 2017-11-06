import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' 
import { ActionCreators } from '../actions'
import Home from './Home'


class AppContainer extends React.Component{

    addProject(){
        this.props.addProject();
    }

render(){
    return(
       <Home {...this.props} />
    );
}
}

function mapDispatchToProps(dispatch) {
    // Gathering every action and dispatching to the entire app
    return bindActionCreators(ActionCreators, dispatch);
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default connect((state) => { 
      return {} }, mapDispatchToProps)(AppContainer)