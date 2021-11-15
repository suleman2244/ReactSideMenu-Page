import React from 'react';
import { TouchableOpacity, Text, View, TextInput, Alert, StyleSheet } from 'react-native';
import Loader from 'react-native-modal-loader';
import axios from 'axios';

import strings from '../Localization/LocalizedStrings';

const InterceptorScreen = ({ navigation }) => {
  const [username, onChangeUsername] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [isLoading, onChangeLoading] = React.useState(false);

  axios.defaults.baseURL = 'http://truly-contacts.herokuapp.com/api';

  const CreateUserAccount = async (username, password) => {
    console.log(username, password);
    axios
      .post('/auth/register', {
        username: username,
        first_name: 'salman12',
        last_name: 'khan12',
        email: `${username}@gmail.com`,
        password: password,
      })
      .then(response => {
        console.log('Then', response);
        onChangeUsername('');
        onChangePassword('');
        navigation.navigate('InterceptorLogin');
      })
      .catch(error => {
        Alert.alert(error);
        console.log('Catch', error);
      });
  };

  return (
    <View style={styles.container} >
      <Loader loading={isLoading} color="#ff66be" />
      <View style={styles.inputContainer} >
        <TextInput style={styles.inputs}
          editable
          maxLength={20}
          placeholder='Enter User Name'
          placeholderTextColor="#003f5c"
          onChangeText={text => onChangeUsername(text)}
          value={username}
        // style={styles.AuthStyles.InputField}
        />
      </View >

      <View style={styles.inputContainer}>
        <TextInput style={styles.inputs}
          editable
          maxLength={20}
          placeholder='Enter Password'
          secureTextEntry={true}
          placeholderTextColor="#003f5c"
          onChangeText={text => onChangePassword(text)}
          value={password}
        // style={styles.AuthStyles.InputField}
        />
      </View>

      <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]}

        onPress={() => {
          navigation.navigate('InterceptorLogin');
        }}>
        <Text style={styles.loginText} >
          Sign In
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]}

        mode="contained"
        disabled={password === '' || username === ''}
        onPress={() => {
          CreateUserAccount(username, password);
        }}>
        <Text style={styles.loginText} >
          Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default InterceptorScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});