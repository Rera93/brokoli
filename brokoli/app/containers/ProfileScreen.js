/*
  Created by Brigel Pineti

  Profile Screen will contain user details.
*/

'use strict'
import React from 'react';
import { StyleSheet, Text, Image } from 'react-native';

import ViewContainer from '../components/ViewContainer';
import Profile from '../components/ProfileScreen/Profile';


class ProfileScreen extends React.Component {

    static navigationOptions = {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../../img/icons/users.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      };


    render(){
        console.log('idPass: ', this.props.screenProps)
        return(
            <ViewContainer style={styles.profile}>
               <Profile screenProps={this.props.screenProps}/>
                </ViewContainer>

        )
    }
}

const styles = StyleSheet.create({
    profile: {
        flex: 1
    },
    icon: {
        width: 24,
        height: 24,
      },
  });

export default ProfileScreen