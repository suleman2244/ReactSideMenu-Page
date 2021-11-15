import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function asyncStorage() {
  const [name, setName] = useState();

  const save = async () => {
    try {
      await AsyncStorage.setItem('MyName', name);
    } catch (e) {
      alert(e);
    }
  }
  const remove = async () => {
    try {
      await AsyncStorage.removeItem('MyName');
    } catch (e) {
      alert(e);
    } finally {
      setName('');
    }

  }
  const load = async () => {
    try {
      let name = await AsyncStorage.getItem('MyName');
      if (name !== null) {
        setName(name);
      }
    } catch (e) {
      alert(e);
    }
  }


  useEffect(() => {
    load();
  }, []);
  return (
    <View style={styles.container}>

      <Text style={styles.name}>Whats Your name </Text>



      <TextInput style={styles.input}
        onChangeText={(text) => setName(text)}
        onPress={() => clear()} />
      <Text style={{ height: 30 }}>{name}</Text>


      <TouchableOpacity style={styles.button}
        onPress={() => save()}>
        <Text style={{ color: 'white' }}>Save My Name</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}
        onPress={() => remove()}>
        <Text style={{ color: 'white' }}>Remove My Name</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#575009',
    alignSelf: 'stretch',
    margin: 32,
    height: 64,
    borderRadius: 6,
    paddingHorizontal: 16,
    fontSize: 24,
    fontWeight: '300',
  },
  button: {
    backgroundColor: '#575DD9',
    alignSelf: 'stretch',
    alignContent: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginTop: 32,
    marginHorizontal: 32,
    borderRadius: 6,
  }
})
