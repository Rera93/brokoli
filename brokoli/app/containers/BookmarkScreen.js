/*
  Created by Brigel Pineti

  Bookmark Screen will store projects that are of interest for the user.
*/

'use strict'
import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

import Bookmarks from '../components/BookmarkScreen/Bookmarks'

class BookmarkScreen extends React.Component {

    static navigationOptions = {
        tabBarLabel: 'Bookmark',
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../../img/icons/bookmark.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      };


    render(){
        return(
            <View style={styles.container}>
                <Bookmarks/>
                </View>

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