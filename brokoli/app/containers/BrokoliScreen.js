/*
  Created by Brigel Pineti

  Brokoli Screen will store a queue of projects that will be arranged depending on user's
  profile details. The priority for projects will depend on the number of brokoli's. 
*/

'use strict'
import React from 'react';
import { StyleSheet, Text } from 'react-native';

import ViewContainer from '../components/ViewContainer'
import Body from '../components/BrokoliScreen/Swipe'

class BrokoliScreen extends React.Component {

    render(){
        return(
            <ViewContainer>
            <Body/>
              </ViewContainer>

        )
    }
}

export default BrokoliScreen