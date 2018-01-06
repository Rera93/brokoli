import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TabNavigator } from 'react-navigation';

import ProjectScreen from '../containers/ProjectScreen'
import BookmarkScreen from '../containers/BookmarkScreen'
import BrokoliScreen from '../containers/BrokoliScreen'
import ProfileScreen from '../containers/ProfileScreen'
import NotificationScreen from '../containers/NotificationScreen'

const TabNav =  TabNavigator({
    
      
      Project: {
        screen: ProjectScreen,
      },
      Bookmark: {
        screen: BookmarkScreen,
      },
      Brokoli: {
        screen: BrokoliScreen,
      },
      Profile: {
        screen: ProfileScreen,
      },
      Mail: {
        screen: NotificationScreen,
      },
    }, {
      initialRouteName: 'Brokoli',
      tabBarPosition: 'bottom',
      animationEnabled: true,
      swipeEnabled: false,
      tabBarOptions: {
        activeTintColor: '#42D260',
        showIcon: true,
        labelStyle: {
          fontSize: 9,
          fontWeight: 'bold'
        },
        style: {
          borderTopWidth: 1,
          borderColor: '#42D260',
          backgroundColor: 'white',
        },
        inactiveTintColor: 'grey',
        indicatorStyle: {
          backgroundColor: '#42D260',
        }
      
      },
    });

    

    export default class HomeScreen extends React.Component {

      
        render(){
            const { params } = this.props.navigation.state
            console.log('idTab: ', params.userId)
            return (
                <TabNav screenProps={params.userId}/>
            )
        }

    } 

    const styles = StyleSheet.create({
        customizeFooter: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            borderTopWidth: 0.7,
            borderColor: '#228B22',
          },
          icon:{
            height: 30,
            width: 30,
            resizeMode: 'contain'
          }
    })