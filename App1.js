
import React, { Component } from 'react';
import { View, TouchableOpacity, Image, LogBox, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import CustomSidebarMenu from './CustomSidebarMenu';
import ApiPage from './pages/ApiPage';
import ApiPageTwo from './pages/ApiPageTwo';
import ApiPageThree from './pages/ApiPageThree';

import loginScreenStack from './AuthStack/AuthStackScreen';
import MapApi from './pages/MapApi';
import ApPage from './pages/ApPage';
import Camera from './pages/Camera';
import callNumber from './pages/callNumber';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import asyncStorage from './pages/asyncStorage';
import Authuser from './AuthStack/Authuser';
import strings from './Localization/LocalizedStrings';
import InterceptorStackScreen from './interceptor/interceptorStack';
import SignOut from './pages/SignOut'
import ReduxScreen from './pages/ReduxScreen';
import TodoList from './src/TodoList'
LogBox.ignoreLogs(['Reanimated 2']);
LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();



const NavigationDrawerStructure = (props) => {


  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <TouchableOpacity onPress={toggleDrawer}>

      </TouchableOpacity>
    </View>
  );
};





const parentStack = createStackNavigator()
function App() {

  return (
    <NavigationContainer>
      <parentStack.Navigator initialRouteName='AuthStack' >
        <parentStack.Screen
          name='Drawer'
          component={AppOne}
          options={{ headerShown: false }} />

        <parentStack.Screen
          name='ReduxScreen'
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
          component={ReduxScreen} />

        <parentStack.Screen
          name='ApiPage'
          component={ApiPage} />

        <parentStack.Screen
          name='ApiPageTwo'
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
          component={ApiPageTwo}
        />


        <parentStack.Screen
          name='ApiPageThree'
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
          component={ApiPageThree} />


        <parentStack.Screen
          name='MapApi'
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
          component={MapApi} />

        <parentStack.Screen
          name='ApPage'
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
          component={ApPage} />
        <parentStack.Screen
          name='Camera'
          component={Camera} />


        <parentStack.Screen
          name='callNumber'
          component={callNumber} />


        <parentStack.Screen
          name='aysncStorage'
          component={asyncStorage} />







        <parentStack.Screen
          name='AuthStack'
          component={loginScreenStack}
          options={{ headerShown: false }} />


      </parentStack.Navigator>
    </NavigationContainer >
  )
}


const Tab = createMaterialBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home Page"
      activeColor="#e91e63"
      barStyle={{ backgroundColor: 'lavender' }}
    >
      <Tab.Screen
        name="Home Page"
        component={FirstPage}
        options={{
          tabBarLabel: `${strings.Home}`,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ReduxScreen"
        component={ReduxScreen}
        options={{
          tabBarLabel: `${strings.Counter_App}`,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="counter" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="MapApi"
        component={MapApi}
        options={{
          tabBarLabel: `${strings.Map_App}`,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="map" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}



function AppOne() {


  return (


    <Drawer.Navigator
      drawerStyle={{
        color: 'red',
      }}
      drawerContentOptions={{
        activeTintColor: '#e91e63',
        itemStyle: { marginVertical: 5 },

      }}
      drawerContent={(props) => <CustomSidebarMenu {...props}
        style={{ backgroundColor: 'lavender' }} />
      }>





      <Drawer.Screen
        name={`${strings.Home}`}
        options={{
          drawerLabel: `${strings.drawerHome}`,
          drawerIcon: ({ tintColor }) => (
            <MaterialCommunityIcons name="home" color={tintColor} size={26} />
          ),
          headerShown: true,

          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
        component={MyTabs}
      />
      <Drawer.Screen
        name={`${strings.About}`}
        options={{
          drawerLabel: `${strings.drawerAbout}`,
          drawerIcon: ({ tintColor }) => (
            <MaterialCommunityIcons name="account" color={tintColor} size={26} />
          ),
          headerShown: true,
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
        component={SecondPage}
      />
      <Drawer.Screen
        name={`${strings.Contact}`}
        options={{
          drawerLabel: `${strings.drawerContact}`,
          drawerIcon: ({ tintColor }) => (
            <MaterialCommunityIcons name="contacts" color={tintColor} size={26} />
          ),
          headerShown: true,
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
        component={ThirdPage}
      />
      <Drawer.Screen
        name='interceptorStack'
        options={{
          drawerLabel: 'InterCeptor',
          drawerIcon: ({ tintColor }) => (
            <MaterialCommunityIcons name="alpha" color={tintColor} size={26} />
          ),
          headerShown: true,
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
        component={InterceptorStackScreen}
      />


      <Drawer.Screen
        name='Tasks'
        options={{
          drawerLabel: 'To Do App',
          drawerIcon: ({ tintColor }) => (
            <MaterialCommunityIcons name="bookmark" color={tintColor} size={26} />
          ),
          headerShown: true,
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
        component={TodoList}
      />


      <Drawer.Screen
        name='SignOut'
        options={{
          drawerLabel: 'Sign Out',
          drawerIcon: ({ tintColor }) => (
            <MaterialCommunityIcons name="logout" color={tintColor} size={26} />
          ),
          headerShown: true,
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
        component={SignOut}
      />










    </Drawer.Navigator>




  );
}


export default App;