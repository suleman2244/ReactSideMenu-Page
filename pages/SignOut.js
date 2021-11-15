import React, { useEffect } from 'react';
import { Button, View, Text } from 'react-native';
import auth, { firebase } from '@react-native-firebase/auth';
const SignOut = ({ navigation }) => {
  logOut = () => {
    let userTemp = firebase.auth().currentUser;
    if (userTemp) {
      auth()
        .signOut()
        .then(() => {
          console.log('User signed out!');
          navigation.navigate('AuthStack');
        })
    } else {
      console.log('User Not signed In!');
    }
  }
  useEffect(() => {
    logOut();
  }, []);


  return (
    <View>

    </View>
  );
}

export default SignOut;