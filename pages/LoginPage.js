// components/login.js

import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator, navigation } from 'react-native';



// const LoginPage=({navigation})=> {


//     return (
//       <View style={styles.container}>
//         <TextInput
//           style={styles.inputStyle}
//           autoCapitalize='none'
//            placeholder="Email"
//           // value={this.state.email}
//           // onChangeText={(val) => this.updateInputVal(val, 'email')}
//         />
//         <TextInput
//           style={styles.inputStyle}
//           placeholder="Password"
//           // value={this.state.password}
//           // onChangeText={(val) => this.updateInputVal(val, 'password')}
//           maxLength={15}
//           secureTextEntry={true}
//         />
//         <Button
//           color="#3740FE"
//           title="Signin"
//           onPress={() => this.userLogin()}
//         />

//         <Text
//           style={styles.loginText}
//           onPress={() => navigation.navigate('SignupPage')}>
//           Don't have account? Click here to Sign up
//         </Text>
//       </View>
//     );
//   }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     padding: 35,
//     backgroundColor: '#fff'
//   },
//   inputStyle: {
//     width: '100%',
//     marginBottom: 15,
//     paddingBottom: 15,
//     alignSelf: "center",
//     borderColor: "#ccc",
//     borderBottomWidth: 1
//   },
//   loginText: {
//     color: '#3740FE',
//     marginTop: 25,
//     textAlign: 'center'
//   },
//   preloader: {
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//     position: 'absolute',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#fff'
//   }
// });
// export default LoginPage




class LoginPage extends Component {

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize='none'
          placeholder="Email"
        // value={this.state.email}
        // onChangeText={(val) => this.updateInputVal(val, 'email')}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          // value={this.state.password}
          // onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={true}
        />
        <Button
          color="#3740FE"
          title="Signin"
          onPress={() => this.userLogin()}
        />

        <Text
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('SignupPage')}>
          Don't have account? Click here to Sign up
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: '#fff'
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
  loginText: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center'
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
});
export default LoginPage