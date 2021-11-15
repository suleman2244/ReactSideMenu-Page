import * as React from 'react';
import { Button, View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
const ThirdPage = ({ navigation }) => {
  const counter = useSelector(state => state.counter);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            This is Contact Page
          </Text>
          <Button
            // onPress={() => navigation.navigate('FirstPage')}
            title="You are in Contact Page"
          />
          <Text style={styles.text}>{counter}</Text>


        </View>

      </View>
    </SafeAreaView>
  );
};

export default ThirdPage;
const styles = StyleSheet.create({
  text: {
    fontSize: 100,
    fontWeight: "bold",
    color: 'blue'
  },
});


