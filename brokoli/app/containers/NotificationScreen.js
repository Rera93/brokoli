/*
  Created by Brigel Pineti

  Notification Screen will store notifications for users who have applied for a position 
  and for users you have posted a project abstract. 
*/

'use strict'
import React from 'react';
import { StyleSheet, Text, Image } from 'react-native';

import ViewContainer from '../components/ViewContainer'

class NotificationScreen extends React.Component {

    static navigationOptions = {
        tabBarLabel: 'Mail',
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../../img/icons/mail.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      };

    render(){
        return(
            <ViewContainer>
                <Text> Hello Notification Screen </Text>
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

export default NotificationScreen