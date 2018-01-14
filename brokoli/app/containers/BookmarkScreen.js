/*
  Created by Brigel Pineti

  Bookmark Screen will store projects that are of interest for the user.
*/

'use strict'
import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import {StackNavigator} from 'react-navigation'
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';
import Bookmarks from '../components/BookmarkScreen/Bookmarks'
import Project from '../components/BookmarkScreen/Project'

const BookmarkStackNav = StackNavigator({
  Bookmarks: { screen: Bookmarks},
  Project: {screen: Project },
},{
    transitionConfig: getSlideFromRightTransition
});

class BookmarkScreen extends React.Component {

    static navigationOptions = {
        tabBarLabel: 'Bookmark',
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../../img/icons/bookmark-out.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      };


    render(){
        return(
            
          <BookmarkStackNav />

        )
    }
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    icon: {
      width: 24,
      height: 24,
    },
  });

export default BookmarkScreen