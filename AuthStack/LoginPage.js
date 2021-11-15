
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator, navigation, I18nManager, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import DropDownPicker from 'react-native-dropdown-picker';
import RNRestart from 'react-native-restart';
import strings from '../Localization/LocalizedStrings';
import { setLng, getLng } from '../helper/changeLng';
import ModalDropdown from 'react-native-modal-dropdown';
import { useValidation } from 'react-native-form-validator';
const LoginPage = ({ navigation }) => {



  // const [open, setOpen] = useState(false);
  // const [value, setValue] = useState(null);
  // const [items, setItems] = useState([
  //   { label: 'English', value: 'en' },
  //   { label: 'Urdu', value: 'ur' }
  // ]);


  useEffect(() => {

    selectedLng()

  }, [])



  const selectedLng = async () => {

    const lngData = await getLng()

    if (!!lngData) {

      strings.setLanguage(lngData)

    }

    console.log("selected Language data==>>>", lngData);

    // let str1 = strings.CASE_UPDATE;

    // console.log(str1);

  }

  const onChangeLng = async (lng) => {

    if (lng === 'en') {

      await I18nManager.forceRTL(false)

      setLng('en')

      RNRestart.Restart()

      return;

    }

    if (lng === 'ur') {

      await I18nManager.forceRTL(true)

      setLng('ur')

      RNRestart.Restart()

      return;

    }


  }




  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const { validate, isFieldInError, getErrorsInField } =
    useValidation({
      state: { email, password },
    });


  const _onPressButton = () => {
    validate({
      email: { email: true },
      password: { minlength: 6, maxlength: 12, required: true },

    });
  };

  const handleSubmitPress = () => {
    if (!email || !password) {
      alert('Please enter an email and password');
    } else {
      try {
        auth().signInWithEmailAndPassword(email, password).then(() => {
          navigation.navigate('Drawer');
          console.log('Logged in!');
          alert("Logged in Successfully")
        });
      } catch (error) {
        alert("Error")
      }
      setemail('');
      setpassword('');
    }
  }
  function combined() {
    _onPressButton();
    handleSubmitPress();
  }
  return (



    <View style={styles.container}>


      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          paddingHorizontal: 55,
          top: -15
        }}>
        {/* /// For English */}
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}
          onPress={() => onChangeLng('en')}>
          <Text style={styles.buttonText}>English</Text>
        </TouchableOpacity>
        {/* /// For Hindi */}
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}
          onPress={() => onChangeLng('ur')}>
          <Text style={styles.buttonText}>Urdu</Text>
        </TouchableOpacity>
        {/* /// For Arabic */}

      </View>
      {/* <View >
        <Button title='Urdu' onPress={() => onChangeLng('ur')} /></View>
      <View >
        <Button title='English' onPress={() => onChangeLng('en')} /></View> */}
      <TextInput
        style={styles.inputStyle}
        autoCapitalize='none'
        placeholder="Email"
        value={email}
        onChangeText={text => setemail(text)}
      />
      {isFieldInError('email') &&
        getErrorsInField('email').map(errorMessage => (
          <Text key={Math.random().toString()} style={{ color: 'red' }}>{errorMessage}</Text>
        ))}

      <TextInput
        style={styles.inputStyle}
        placeholder="Password"
        value={password}
        onChangeText={text => setpassword(text)}

        maxLength={15}
        secureTextEntry={true}
      />
      {isFieldInError('password') &&
        getErrorsInField('password').map(errorMessage => (
          <Text key={Math.random().toString()} style={{ color: 'red' }}>{errorMessage}</Text>
        ))}

      <Button
        color="#3740FE"
        title={`${strings.Login}`}
        onPress={combined} />


      <Text style={styles.loginText}
        onPress={() => navigation.navigate('SignUpPage')}>
        {strings.Account}
      </Text>

    </View>
  );
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
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    borderWidth: 2,
    elevation: 5,
    backgroundColor: 'blue',
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',

  },
  btnur: {
    borderColor: '#000',
    borderWidth: 1,
    width: '30%',
    flexDirection: 'row',
    justifyContent: 'space-around'

  },
  btnen: {
    borderColor: '#000',
    borderWidth: 1,
    width: '30%',
    flexDirection: 'row',
    justifyContent: 'space-around'
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




