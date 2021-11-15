

import React, { useEffect, useState, Component } from 'react';
import { ActivityIndicator, Button, Text, View, StyleSheet, Icon } from 'react-native';
import axios from 'axios';
import { Card } from 'react-native-elements';

const ApPage = (route, navigation) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);


  const getMovies = async () => {

    const { itemId } = route.params;
    console.log(`https://jsonplaceholder.typicode.com/posts/${itemId}`)
    axios.get(`https://jsonplaceholder.typicode.com/posts/${itemId}`).then
      (response => {
        setData(response.data);
        console.log(response.data);
      }).catch(function (error) {
        console.log(error);
      })
    setLoading(false);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (

    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator /> :
        (
          <Card>
            <Card.Title><Text style={styles.userid}>Id:{data.id}{'\n'}</Text> </Card.Title>
            <Card.Divider />
            <Text><Text style={styles.des}>Title:</Text>{'\n'}{data.title}{'\n'}</Text>
            <Text><Text style={styles.des}>Description:</Text> {'\n'} {data.body}{'\n'}</Text>
            <Button
              icon={<Icon name='code' color='#ffffff' />}
              buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
              onPress={() => navigation.navigate('ApPage')}
              title='Go Back To Post' />

          </Card>
        )}


    </View>
  );
};
export default ApPage


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea"
  },
  userid: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  des: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',

  }

});