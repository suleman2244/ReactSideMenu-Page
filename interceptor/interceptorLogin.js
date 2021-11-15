import React from 'react';
import { TouchableOpacity, Text, View, TextInput, Alert, StyleSheet } from 'react-native';

import Loader from 'react-native-modal-loader';
import axios from 'axios';
import strings from '../Localization/LocalizedStrings';

const InterceptorLogin = ({ navigation }) => {
  const [username, onChangeUsername] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [isLoading, onChangeLoading] = React.useState(false);

  axios.defaults.baseURL = 'http://truly-contacts.herokuapp.com/api';

  const LogInUser = async (username, password) => {
    console.log(username, password);
    await axios
      .post('/auth/login', {
        username: username,
        password: password,
      })
      .then(response => {
        console.log('Then', response.data.token);
        onChangeUsername('');
        onChangePassword('');
        Alert.alert('Successfully logged IN, Auth Token', response.data.token);
        navigation.navigate('InterceptorUploadContact', {
          token: response.data.token,
        });
      })
      .catch(error => {
        Alert.alert(error);
        console.log('Catch', error);
      });
  };

  return (
    <View style={styles.container} >
      <Loader loading={isLoading} color="#ff66be" />
      <View style={styles.inputContainer}  >
        <TextInput style={styles.inputs}
          editable
          maxLength={20}
          placeholder='User Name'
          placeholderColor="#c4c3cb"
          placeholderTextColor="#003f5c"
          onChangeText={text => onChangeUsername(text)}
          value={username}

        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput style={styles.inputs}
          editable
          maxLength={20}
          placeholder='Enter Password'
          placeholderColor="#c4c3cb"
          secureTextEntry={true}
          placeholderTextColor="#003f5c"
          onChangeText={text => onChangePassword(text)}
          value={password}

        />
      </View>

      <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]}

        onPress={() => {
          navigation.navigate('Interceptor');
        }}>
        <Text style={styles.loginText} >
          Sign up
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]}

        mode="contained"
        disabled={password === '' || username === ''}
        onPress={() => {
          LogInUser(username, password);
        }}>
        <Text
          style={styles.loginText} >
          Sign In
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default InterceptorLogin;
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