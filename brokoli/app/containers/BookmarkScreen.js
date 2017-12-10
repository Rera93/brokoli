/*
  Created by Brigel Pineti

  Bookmark Screen will store projects that are of interest for the user.
*/

'use strict'
import React from 'react';
import { StyleSheet, Text, Image } from 'react-native';

import ViewContainer from '../components/ViewContainer'

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
            <ViewContainer>
                <Text> Hello Bookmark Screen </Text>
                </ViewContainer>

        )
    }
}

const styles = StyleSheet.create({
    icon: {
      width: 26,
      height: 26,
    },
  });

export default BookmarkScreen