/*
  Created by Brigel Pineti

  Profile Screen will contain user details.
*/

'use strict'
import React from 'react';
import { StyleSheet, Text } from 'react-native';

import ViewContainer from '../components/ViewContainer';
import Header from '../components/ProfileScreen/Header';
import Body from '../components/ProfileScreen/Body';

class ProfileScreen extends React.Component {

    render(){
        return(
            <ViewContainer style={styles.profile}>
                <Header />
                <Body />
                </ViewContainer>

        )
    }
}

const styles = StyleSheet.create({
    profile: {
        flex: 1
    }
  });

export default ProfileScreen