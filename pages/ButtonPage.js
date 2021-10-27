import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';

const ButtonPage = ({ navigation }) => {
  return (
   <Button title='Api Page 1' onPress={() => navigation.navigate('ApiPage')}/>
  );
};

export default ButtonPage;