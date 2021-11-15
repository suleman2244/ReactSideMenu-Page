// components/signup.js
// components/signup.js







import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator, navigation, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import { useValidation } from 'react-native-form-validator';
import strings from '../Localization/LocalizedStrings';

const SignUpPage = ({ navigation }) => {

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [name, setname] = useState('');

  const { validate, isFieldInError, getErrorsInField } =
    useValidation({
      state: { name, email, password },
    });


  const _onPressButton = () => {
    validate({
      name: { minlength: 3, maxlength: 7, required: true },
      email: { email: true },
      password: { minlength: 6, maxlength: 12, required: true },

    });
  };


  const handleSubmitPress = () => {
    if (!email || !password || !name) {
      Alert.alert('Error', 'Please fill in all fields');
    } else {
      auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log('User created');
          alert('User Created Successfully')
        }).catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('Email already in use');
          }
          if (error.code === 'auth/invalid-email') {
            console.log('Invalid email');
          }
          console.log(error);
        });
      setname('');
      setemail('');
      setpassword('');
      navigation.navigate('LoginPage');
    }
  }

  function combinedFunction() {
    _onPressButton();
    handleSubmitPress();
  }

  return (
    <View style={styles.container}>
      {/* {error ? <Text style={{ color: 'red', fontSize: 18, textAlign: 'center' }}>{error}</Text> : null} */}
      <TextInput
        style={styles.inputStyle}
        value={name}
        onChangeText={text => setname(text)}
        placeholder="Name" />

      {isFieldInError('name') &&
        getErrorsInField('name').map(errorMessage => (
          <Text key={Math.random().toString()} style={{ color: 'red' }}>{errorMessage}</Text>
        ))}

      <TextInput
        style={styles.inputStyle}
        value={email}

        onChangeText={text => setemail(text)}
        placeholder="Email" />

      {isFieldInError('email') &&
        getErrorsInField('email').map(errorMessage => (
          <Text key={Math.random().toString()} style={{ color: 'red' }}>{errorMessage}</Text>
        ))}


      <TextInput
        style={styles.inputStyle}
        value={password}
        onChangeText={text => setpassword(text)}
        placeholder="Password"
        secureTextEntry={true}
      />
      {isFieldInError('password') &&
        getErrorsInField('password').map(errorMessage => (
          <Text key={Math.random().toString()} style={{ color: 'red' }}>{errorMessage}</Text>
        ))}

      <Button
        color="#3740FE"
        title={`${strings.Signup}`}
        onPress={() => combinedFunction()}
      />


      <Text
        style={styles.loginText}
        onPress={() => navigation.navigate('LoginPage')}>
        {strings.SignUpAccount}
      </Text>
    </View>
  );

}
export default SignUpPage;

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
