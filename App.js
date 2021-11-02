import 'react-native-gesture-handler';
import * as React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
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
import Counter from './pages/Counter';
import loginScreenStack from './AuthStack/AuthStackScreen';
import MapApi from './pages/MapApi';

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

function firstScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="FirstPage" >

      <Stack.Screen

        name="HomePage"
        component={FirstPage}
        options={{
          headerShown: false,

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
            justifyContent: 'center',
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
        headerShown: false,
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
        headerShown: false,
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
          name='Counter'
          component={Counter} />

        <parentStack.Screen
          name='ApiPage'
          component={ApiPage} />

        <parentStack.Screen
          name='ApiPageTwo'
          component={ApiPageTwo}
        />


        <parentStack.Screen
          name='ApiPageThree'
          component={ApiPageThree} />


        <parentStack.Screen
          name='MapApi'
          component={MapApi} />


        <parentStack.Screen
          name='AuthStack'
          component={loginScreenStack}
          options={{ headerShown: false }} />


      </parentStack.Navigator>
    </NavigationContainer >
  )
}





function AppOne() {

  return (

    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#e91e63',
        itemStyle: { marginVertical: 5 },
      }}
      drawerContent={(props) => <CustomSidebarMenu {...props} />}>
      <Drawer.Screen
        name="HomePage"
        options={{ drawerLabel: 'Home Page' }}
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

    </Drawer.Navigator>




  );
}


export default App;