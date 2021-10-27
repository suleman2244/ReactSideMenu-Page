import 'react-native-gesture-handler';
import * as React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import SignupPage  from './pages/SignupPage';
import Apipage from './pages/Apipage';
// Import Custom Sidebar
import CustomSidebarMenu from './CustomSidebarMenu';
import LoginPage from './pages/LoginPage';
import DrawerNavigatorRoutes from './Navigator/DrawerNavigatorRoutes';
import ApiPage from './pages/Apipage';
import ButtonPage from './pages/ButtonPage';
import ApiPageTwo from './pages/ApiPageTwo';
import ApiPageThree from './pages/ApiPageThree';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();



const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row',alignItems:'center' }}>
      <TouchableOpacity onPress={toggleDrawer}>

      </TouchableOpacity>
    </View>
  );
};

function firstScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="FirstPage" >

      <Stack.Screen

        name="HomePage"
        component={FirstPage}
        options = {{
           headerShown:false,

          title: 'Home Page', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff',//Set Header text color

          headerTitleStyle: {
            fontWeight: 'bold',
            justifyContent:'center',
             //Set Header text style
          },

        }}
      />
    </Stack.Navigator>
  );
}

function secondScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="AboutPage"
      screenOptions={{
        headerShown:false,
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="AboutPage"
        component={SecondPage}
        options={{
          title: 'About Page', //Set Header Title
        }}
      />

    </Stack.Navigator>
  );
}


function thirdScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="ContactPage"
      screenOptions={{
        headerShown:false,
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="ContactPage"
        component={ThirdPage}
        options={{
          title: 'Contact Page', //Set Header Title
        }}
      />

    </Stack.Navigator>
  );
}


function signupScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="SignupPage"
      screenOptions={{
        headerShown:false,
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="Signup"
        component={SignupPage}
        options={{
          title: 'Sign up', //Set Header Title
        }}
      />

    </Stack.Navigator>
  );
}



function loginScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="LoginPage"
      screenOptions={{
        headerShown:false,
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="LoginPage"
        component={LoginPage}
        options={{
          title: 'Log In Page', //Set Header Title
        }}
      />

    </Stack.Navigator>
  );
}


function apiScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="ApiPage"
      screenOptions={{
        headerShown:false,
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="ApiPage"
        component={ApiPage}
        options={{

          title: 'Api Page', //Set Header Title
        }}
      />

    </Stack.Navigator>
  );
}


function apitwoScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="ApiPageTwo"
      screenOptions={{
        headerShown:false,
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="ApiPageTwo"
        component={ApiPageTwo}
        options={{

          title: 'Api Page 2', //Set Header Title
        }}
      />

    </Stack.Navigator>
  );
}


function apthreeScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="ApiPageTwo"
      screenOptions={{
        headerShown:false,
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="ApiPageThree"
        component={ApiPageThree}
        options={{

          title: 'Api Page 3', //Set Header Title
        }}
      />

    </Stack.Navigator>
  );
}




function buttonScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="ButtonPage"
      screenOptions={{
        headerShown:false,
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="ButtonPage"
        component={ButtonPage}
        options={{
          title: 'Button Page', //Set Header Title
        }}
      />

    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },
        }}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}>
        <Drawer.Screen
          name="HomePage"
          options={{   drawerLabel: 'Home Page'  }}
          component={firstScreenStack}
        />
        <Drawer.Screen
          name="AboutPage"
          options={{ drawerLabel: 'About Page' }}
          component={secondScreenStack}
        />
        <Drawer.Screen
          name="ContactPage"
          options={{ drawerLabel: 'Contact Page' }}
          component={thirdScreenStack}
        />
        <Drawer.Screen
          name="SignupPage"
          options={{ drawerLabel: 'Signup Page'}}
          component={signupScreenStack}
        />
        <Drawer.Screen
          name="LoginPage"
          options={{ drawerLabel: 'Log In Page' }}
          component={loginScreenStack}
        />
        <Drawer.Screen
          name="ApiPage"
          options={{ drawerLabel: 'Api Page'}}
          component={apiScreenStack}
        />
        <Drawer.Screen
          name="ApiPage2"
          options={{ drawerLabel: 'Api Page 2'}}
          component={apitwoScreenStack}
        />
        <Drawer.Screen
          name="ApiPage3"
          options={{ drawerLabel: 'Api Page 3'}}
          component={apthreeScreenStack}
        />
         <Drawer.Screen
          name="ButtonPage"
          options={{ drawerLabel: 'Button Page' }}
          component={buttonScreenStack}
        />

      </Drawer.Navigator>

    </NavigationContainer>
  );
}

export default App;