/*
  Created by Brigel Pineti

  Notification Screen will store notifications for users who have applied for a position 
  and for users you have posted a project abstract. 
*/

'use strict'
import React from 'react';
import { StyleSheet, Text, Image } from 'react-native';
import Notifications from '../components/NotificationScreen/Notifications'
import {StackNavigator} from 'react-navigation'
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';


const NotificationsStackNav = StackNavigator({
  Notifications: { screen: Notifications},
},{
    transitionConfig: getSlideFromRightTransition
});


class NotificationScreen extends React.Component {

    static navigationOptions = {
        tabBarLabel: 'Mail',
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../../img/icons/summary.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      };

    render(){
        return(

              <NotificationsStackNav />           


        )
    }
}

const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  });

export default NotificationScreen