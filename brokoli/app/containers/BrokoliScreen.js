/*
  Created by Brigel Pineti

  Brokoli Screen will store a queue of projects that will be arranged depending on user's
  profile details. The priority for projects will depend on the number of brokoli's. 
*/

'use strict'
import React from 'react';
import { StyleSheet, Text, Image } from 'react-native';

import ViewContainer from '../components/ViewContainer'
import Body from '../components/BrokoliScreen/Swipe'

class BrokoliScreen extends React.Component {

    
    static navigationOptions = {
        tabBarLabel: 'Brokoli',
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../../img/icons/brokoli.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      };

    render(){
        return(
            <ViewContainer>
            <Body/>
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

export default BrokoliScreen