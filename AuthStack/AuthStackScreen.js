
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LoginPage from './LoginPage'
import SignupPage from './SignupPage'


const authStack = createStackNavigator();

export default function loginScreenStack({ navigation }) {

  return (
    <authStack.Navigator
      initialRouteName="LoginPage"
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <authStack.Screen
        name="LoginPage"
        component={LoginPage}
        options={{
          title: 'Log In Page', //Set Header Title
        }}
      />
      <authStack.Screen
        name="Signup"
        component={SignupPage}
        options={{
          title: 'Sign up', //Set Header Title
        }}
      />

    </authStack.Navigator>
  );
}

