
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import strings from '../Localization/LocalizedStrings';
import LoginPage from './LoginPage'
import SignUpPage from './SignUpPage'
import SplashPage from './SplashPage';
//

const authStack = createStackNavigator();

export default function loginScreenStack({ navigation }) {

  return (
    <authStack.Navigator
      initialRouteName="SplashPage"
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
        name="SplashPage"
        component={SplashPage}
        options={{
          headerShown: false,
          title: `${strings.Login}`, //Set Header Title
        }}
      />
      <authStack.Screen
        name="LoginPage"
        component={LoginPage}
        options={{
          title: `${strings.Login}`, //Set Header Title
        }}
      />
      <authStack.Screen
        name="SignUpPage"
        component={SignUpPage}
        options={{
          title: `${strings.Signup}`, //Set Header Title
        }}
      />

    </authStack.Navigator>
  );
}




