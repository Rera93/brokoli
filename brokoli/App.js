import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import reducer from './app/reducers'

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



export default class App extends React.Component {
  render() {
    return (

      <Provider store={store}>

      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>ChanZa you make wdsadidsdll  reload.</Text>
        <Text>Shake your phone to open the devesddfsloper menu.</Text>
      </View>

      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
