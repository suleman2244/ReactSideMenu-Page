import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import InterceptorLogin from './interceptorLogin';
import InterceptorUploadContact from './interceptorContact';
import InterceptorScreen from './interceptor';
const Stack = createStackNavigator();
export default function InterceptorStackScreen() {
  return (
    <Stack.Navigator initialRouteName='InterceptorLogin'>
      <Stack.Screen
        name="Interceptor"
        component={InterceptorScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="InterceptorLogin"
        component={InterceptorLogin}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="InterceptorUploadContact"
        component={InterceptorUploadContact}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}