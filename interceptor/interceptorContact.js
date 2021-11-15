import React from 'react';
import { TouchableOpacity, Text, View, TextInput, Alert, StyleSheet } from 'react-native';

import Loader from 'react-native-modal-loader';
import axios from 'axios';
import strings from '../Localization/LocalizedStrings';

const InterceptorUploadContact = ({ route }) => {
  const [firstName, onChangeFirstName] = React.useState('');
  const [phoneNumber, onChangePassword] = React.useState('');
  const [isLoading, onChangeLoading] = React.useState(false);

  const { token } = route.params;

  axios.defaults.baseURL = 'http://truly-contacts.herokuapp.com/api';

  const CreateContact = async (firstName, phoneNumber) => {
    console.log(firstName, phoneNumber, token);
    await axios
      .post(
        '/contacts/',
        {
          country_code: '+92',
          first_name: firstName,
          last_name: 'string',
          phone_number: phoneNumber,
          is_favorite: true,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      )
      .then(response => {
        console.log('Then', response.data);
        Alert.alert(
          'Contact created Successfully using token',
          response.data.phone_number,
        );
      })
      .catch(error => {
        Alert.alert('Failed', error);
        console.log('Catch', error);
      });
  };

  return (
    <View style={styles.container}>
      <Loader loading={isLoading} color="#ff66be" />
      <View style={styles.inputContainer} >
        <TextInput style={styles.inputs}
          editable
          maxLength={20}
          placeholder='First Name'
          placeholderTextColor="#003f5c"
          onChangeText={text => onChangeFirstName(text)}
          value={firstName}

        />
      </View>

      <View style={styles.inputContainer} >
        <TextInput style={styles.inputs}
          editable
          maxLength={20}
          placeholder='Phone NuMBER'
          secureTextEntry={true}
          placeholderTextColor="#003f5c"
          onChangeText={text => onChangePassword(text)}
          value={phoneNumber}

        />
      </View>

      <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]}

        mode="contained"
        disabled={phoneNumber === '' || firstName === ''}
        onPress={() => {
          CreateContact(firstName, phoneNumber);
        }}>
        <Text
          style={styles.loginText}  >
          Create Contact
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default InterceptorUploadContact;
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

})