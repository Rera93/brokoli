/*
  Created by Brigel Pineti

  Redux and React Navigation
*/

import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import reducer from './app/reducers'
import { Router, Scene, Actions, ActionConst, Stack } from 'react-native-router-flux'

import AppContainer from './app/containers/AppContainer'
import ProjectScreen from './app/containers/ProjectScreen'
import BookmarkScreen from './app/containers/BookmarkScreen'
import BrokoliScreen from './app/containers/BrokoliScreen'
import ProfileScreen from './app/containers/ProfileScreen'
import NotificationScreen from './app/containers/NotificationScreen'

//middleware that logs actions
const loggerMiddleware = createLogger({ predicate : (getState, action) => __DEV__});

function configureStore(initialState) {
   const enhancer = compose(
     applyMiddleware(
       thunkMiddleware, //lets us dispatch() functions
       loggerMiddleware,
      ),
   );
   return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

// TODO: pass an initial state to store

/*
 * Displays the icon for the tab w/ color dependent upon selection
*/
const TabIcon = ({ selected, source }) => {
  return (
    <Image style={[styles.icon, {tintColor: selected ? '#228B22' :'#dad9de'}]} source={source}/>
  );
}
// This will modify the margin for the TabBar
const getSceneStyle = (props, computedProps) => {
  const style = {
    flex: 1,
  };
  if (computedProps.isActive) {
    style.marginBottom = computedProps.hideTabBar ? 0 : 50;
  }
  return style;
};
export default class App extends React.Component {
  render() {
    return (

      <Provider store={store}>
      <Router>
        <Scene key="root">
        <Scene key="tabbar"
               tabs={true}
               hideNavBar
               tabBarStyle={styles.customizeFooter}>

               <Scene key="projectTab" 
                      title="Project" 
                      source={require('./img/icons/project.png')}
                      icon={TabIcon}
                      onPress={()=> {Actions.project({type: ActionConst.REFRESH})}}>

                      <Scene key='project' component={ProjectScreen} hideNavBar />

              </Scene>
                
               <Scene key="bookmarkTab" 
                      title="Bookmarks" 
                      source={require('./img/icons/bookmark.png')}
                      icon={TabIcon}>
                      <Scene key='project' component={BookmarkScreen} hideNavBar />

              </Scene>

               <Scene key="brokoliTab" 
                      title="Brokoli"
                      source={require('./img/icons/broccoli.png')}
                      icon={TabIcon}>
                      <Scene key='project' component={BrokoliScreen} hideNavBar />

                      </Scene>

               <Scene key="profileTab" 
                      title="Profile" 
                      source={require('./img/icons/profile.png')}
                      icon={TabIcon}>
                      <Scene key='project' component={ProfileScreen} hideNavBar />

              </Scene>

               <Scene key="notificationTab" 
                      title="Notification"
                      source={require('./img/icons/mail.png')}
                      icon={TabIcon}
                      >
                      <Scene key='project' component={NotificationScreen} hideNavBar />

              </Scene>


        </Scene>

        </Scene>

      </Router>

      </Provider>
    );
  }
}
const styles = StyleSheet.create({
customizeFooter: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'flex-end',
  backgroundColor: 'white',
  borderTopWidth: 0.7,
  borderColor: '#228B22',
},
icon:{
  height: 22.5,
  width: 22.5,
  resizeMode: 'contain'
}
});


