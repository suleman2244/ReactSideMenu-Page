import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const FormSubmitButton = ({ title, onPress }) => {


  return (
    <TouchableOpacity
      onPress={ onPress }
      style={[styles.container, { backgroundColor }]}
    >
      <Text style={{ fontSize: 18, color: '#fff' }}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 45,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FormSubmitButton;