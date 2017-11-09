/*
  Created by Brigel Pineti

  ViewContainer is root of every screen
*/
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

class ViewContainer extends Component {
  render(){
    return (
      <View style={[styles.viewContainer, this.props.style || {} ]}>
        {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default ViewContainer
