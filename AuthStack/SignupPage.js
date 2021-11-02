// components/signup.js

import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator, navigation } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';




// const isValidObjField=(obj)=>{
//   return object.values(obj).every(value=>value.trim())
// }
// const updateError=(error,stateUpdater)=>{
//   stateUpdater(error);
//   setTimeout(()=>{
//     stateUpdater('')
//   },2500)
// }
// const isValidEmail=(value)=>{
//   const rgx=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return rgx.test(value)
// }
const SignupPage = ({ navigation }) => {


  //   const [userInfo,setUserInfo]=useState({
  //     name:'',
  //     email:'',
  //     password:'',
  //   })
  //   const [error,setError]=useState('')
  // const {name,email,password}=userInfo
  // const handleOnChangeText=(value,fieldname)=>{
  //   setUserInfo({...userInfo,[fieldname]: value})

  // };
  // const isValidForm=()=>{
  //   if(!isValidObjField(userInfo)) return updateError('Required All fields',setError)
  //   if(!name.trim()|| name.length<3) return updateError('Name Shuld Be 3 Character Long',setError)
  //   if(!isValidEmail(email)) return updateError('invalid Email',setError)
  //   if(!password.trim()|| password.length<8) return updateError('Password is less than 8 Character',setError)
  // }
  // const submitForm=()=>{
  //   if(isValidForm()){
  //     console.log(userInfo)
  //   }
  // }
  return (
    <View style={styles.container}>
      {/* {error ? <Text style={{ color: 'red', fontSize: 18, textAlign: 'center' }}>{error}</Text> : null} */}
      <TextInput
        style={styles.inputStyle}
        // value={name}
        // onChangeText={(value)=>handleOnChangeText(value,'name')}
        placeholder="Name"
      // value={this.state.displayName}
      // onChangeText={(val) => this.updateInputVal(val, 'displayName')}
      />
      <TextInput
        style={styles.inputStyle}
        // value={email}
        // onChangeText={(value)=>handleOnChangeText(value,'email')}
        placeholder="Email"
      // value={this.state.email}
      // onChangeText={(val) => this.updateInputVal(val, 'email')}
      />
      <TextInput
        style={styles.inputStyle}
        // value={password}
        // onChangeText={(value)=>handleOnChangeText(value,'password')}
        placeholder="Password"
        // value={this.state.password}
        // onChangeText={(val) => this.updateInputVal(val, 'password')}
        maxLength={15}
        secureTextEntry={true}
      />

      <Button

        color="#3740FE"
        title="Signup"
      // onPress={() => this.registerUser()}
      // onPress={submitForm}
      />


      <Text
        style={styles.loginText}
        onPress={() => navigation.navigate('LoginPage')}>
        Already Registered? Click here to Log In
      </Text>
    </View>
  );

}
export default SignupPage;

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
