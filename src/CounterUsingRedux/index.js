import React from 'react';
import {
  StatusBar
} from 'react-native';
import {
  createStore,
  combineReducers
} from 'redux';
import {
  Provider
} from 'react-redux';
import {
  NavigationContainer
} from '@react-navigation/native';
import {
  createStackNavigator
} from '@react-navigation/stack';

import CounterRedux from './CounterUsingRedux';
import counterReducer from '../modules/redux/counter';

const rootReducer = combineReducers({
  counter: counterReducer
});

const store = createStore(rootReducer);

const Stack = createStackNavigator();

export default () => {
  return (
    <Provider store={store}>
      <StatusBar translucent backgroundColor='transparent' barStyle='light-content' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='CounterUsingRedux'
            component={CounterRedux}
            options={{
              title: 'Simple Counter Using Redux',
              headerTitleAlign: 'center',
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: '#3f51b5'
              }
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}